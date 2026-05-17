# Security Audit — Cafe Soda Website
**Date:** 2026-05-16  
**Auditor:** Senior Cybersecurity Review (Claude Code)  
**Scope:** Full codebase — `Cafe Soda.html`, `styles.css`, `emblem.jsx`, `data.jsx`, `common.jsx`, `sections.jsx`, `tweaks-panel.jsx`  
**Methodology:** OWASP Top 10:2025, OWASP Cheat Sheet Series, MSRC advisories, manual code review  

---

## Architecture Summary

| Property | Value |
|---|---|
| **Tier** | Static site — pure HTML/CSS/JSX, no backend |
| **Detected stack** | React 18.3.1 (CDN), Babel Standalone 7.29.0 (CDN), Google Fonts (CDN) |
| **Backend** | None |
| **Database** | None |
| **Auth / Payments** | None |
| **Attack surface** | Client-side only |

Because there is no server, there are no database injection, authentication bypass, or privilege escalation vulnerabilities. **The entire risk profile is client-side.** That said, the three highest-severity findings below are architectural in nature and cannot be patched with a one-line fix — they require a build-step migration.

---

## Security Grade: **C+**

| Domain | Score | Notes |
|---|---|---|
| Supply chain | 55/100 | SRI on CDN scripts ✓ — Babel Standalone negates it |
| Security headers | 10/100 | Zero headers configured |
| Input/XSS | 75/100 | React JSX escaping ✓ — no dangerouslySetInnerHTML |
| Secrets | 100/100 | No secrets in code |
| Data protection | 70/100 | Email exposure, Google Fonts tracking |
| Cross-origin messaging | 40/100 | Wildcard postMessage in tweaks-panel |
| **Overall** | **C+** | One architectural issue (Babel) caps this below B |

---

## Findings — Critical to Low

---

### 🔴 HIGH — Babel Standalone in Production Requires `unsafe-eval`

**File:** `Cafe Soda.html` — lines 19, 21, 23–27  
**OWASP:** A05:2025 Security Misconfiguration / A08:2021 Software & Data Integrity Failures  
**References:** [Babel GitHub discussion #13564](https://github.com/babel/babel/discussions/13564), [Google Strict CSP](https://csp.withgoogle.com/docs/strict-csp.html), [Beagle Security: unsafe-eval](https://beaglesecurity.com/blog/vulnerability/content-security-policy-implemented-with-unsafe-in.html)

**What's happening:**  
`@babel/standalone` compiles JSX to JavaScript **at runtime in the browser** using `new Function()` — which is functionally identical to `eval()`. This means:

1. **You cannot deploy any meaningful Content Security Policy.** A strict CSP (`script-src 'self'`) blocks Babel from running. To allow it, you must add `'unsafe-eval'` to CSP — which nullifies CSP's core protection against XSS.
2. **Babel itself is 1.5 MB of eval-capable attack surface** loaded from an external CDN. If the CDN is compromised AND the SRI hash somehow matched, or if a future hash rotation is missed, an attacker gets a full eval engine in your page.
3. **Babel Standalone is explicitly documented as "not for production"** by the Babel team. It is a developer tool.

**Attacker impact:**  
Without CSP, a successful XSS injection (e.g., via a future CMS, ad network, or third-party script) has no browser-level containment. Scripts run with full page privilege: read cookies, exfiltrate form data, redirect users to phishing pages.

**Before (current):**
```html
<!-- 1.5MB eval engine shipped to every visitor -->
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js"
        integrity="sha384-..." crossorigin="anonymous"></script>

<!-- JSX transpiled at runtime, requires unsafe-eval -->
<script type="text/babel" src="sections.jsx"></script>
```

**After (fix — compile JSX at build time):**
```bash
# One-time setup
npm init -y
npm install --save-dev vite @vitejs/plugin-react

# vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({ plugins: [react()] })
```
```html
<!-- After build: single bundled file, no runtime eval -->
<script type="module" src="/assets/index-[hash].js"></script>

<!-- Now you CAN deploy a strict CSP -->
<meta http-equiv="Content-Security-Policy"
      content="default-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data:;">
```

**Priority:** Fix first. Every other security header is blocked until Babel Standalone is removed.

---

### 🔴 HIGH — React Development Builds Shipped to Users

**File:** `Cafe Soda.html` — lines 18–19  
**OWASP:** A05:2025 Security Misconfiguration  

**What's happening:**
```html
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js" ...></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" ...></script>
```

The **development** builds are 3–4× larger than production builds and contain:
- Detailed internal stack traces exposed in the browser console  
- Component name leakage that maps your application architecture  
- Extra validation code attackers can probe to fingerprint your stack version  
- Explicit performance warnings that act as a recon guide  

**Attacker impact:**  
Reconnaissance — an attacker opening DevTools gets a free architectural map of your React component hierarchy, exact version numbers, and a list of props/state shapes. Combined with known React 18 CVEs, this reduces the work to target a specific exploit.

**Before:**
```html
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js" ...></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" ...></script>
```

**After:**
```html
<script src="https://unpkg.com/react@18.3.1/umd/react.production.min.js"
        integrity="sha384-[RECOMPUTE HASH]" crossorigin="anonymous"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js"
        integrity="sha384-[RECOMPUTE HASH]" crossorigin="anonymous"></script>
```

> **Note:** After switching to production builds, recompute SRI hashes — the `.development.js` and `.production.min.js` files have different hashes.

```bash
# Recompute SRI hash for any file:
curl -s https://unpkg.com/react@18.3.1/umd/react.production.min.js | \
  openssl dgst -sha384 -binary | openssl base64 -A
```

---

### 🟠 HIGH — postMessage Sent to Wildcard Origin with No Receiver Validation

**File:** `tweaks-panel.jsx` — lines 258–260, 263, 34  
**OWASP:** A01:2025 Broken Access Control  
**References:** [Microsoft MSRC: PostMessage Vulnerabilities (CVE-2024-49038, CVSS 9.3)](https://msrc.microsoft.com/blog/2025/08/postmessaged-and-compromised/), [HackTricks: PostMessage Vulnerabilities](https://book.hacktricks.xyz/pentesting-web/postmessage-vulnerabilities), [SecureFlag: Unchecked Origin](https://knowledge-base.secureflag.com/vulnerabilities/broken_authorization/unchecked_origin_in_postmessage_vulnerability.html)

**What's happening:**

```javascript
// tweaks-panel.jsx — line 258
window.parent.postMessage({ type: '__edit_mode_available' }, '*');  // wildcard!
window.parent.postMessage({ type: '__edit_mode_set_keys', edits }, '*');  // sends user edits to ANY parent
window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*');

// Receiver has NO origin check — any parent frame can trigger panel open:
const onMsg = (e) => {
  const t = e?.data?.type;
  if (t === '__activate_edit_mode') setOpen(true);     // no e.origin check!
  else if (t === '__deactivate_edit_mode') setOpen(false);
};
window.addEventListener('message', onMsg);
```

Two bugs:
1. **No `targetOrigin` specified** on the `postMessage` sender — `'*'` sends data to whatever frame is listening, including malicious parent frames.
2. **No `event.origin` validation** on the receiver — any window (not just the Claude Design host) can send `__activate_edit_mode` to force the panel open or manipulate state.

**Attacker impact:**  
If this page is ever embedded in a third-party iframe (which is possible without `X-Frame-Options`), the embedding page can:
- Send `__activate_edit_mode` to open the tweaks panel via JS
- Receive `__edit_mode_set_keys` messages containing user preference edits
- Correlate these to fingerprint users or manipulate the page's appearance remotely

This is the same class as CVE-2024-49038 (CVSS 9.3) — missing origin in postMessage led to access token theft in Microsoft Copilot Studio.

**Before:**
```javascript
// No origin on outbound
window.parent.postMessage({ type: '__edit_mode_available' }, '*');

// No origin check on inbound
const onMsg = (e) => {
  if (e?.data?.type === '__activate_edit_mode') setOpen(true);
};
```

**After:**
```javascript
// Define the trusted origin (the Claude Design host)
const TRUSTED_ORIGIN = 'https://claude.ai'; // adjust to actual host

// Outbound: specify exact target origin
window.parent.postMessage({ type: '__edit_mode_available' }, TRUSTED_ORIGIN);
window.parent.postMessage({ type: '__edit_mode_set_keys', edits }, TRUSTED_ORIGIN);

// Inbound: always validate origin before acting
const onMsg = (e) => {
  if (e.origin !== TRUSTED_ORIGIN) return; // reject untrusted senders
  const t = e?.data?.type;
  if (t === '__activate_edit_mode') setOpen(true);
  else if (t === '__deactivate_edit_mode') setOpen(false);
};
```

> **Recommended additional fix:** Remove `tweaks-panel.jsx` entirely from the production deployment. It is a design-tool artifact and has no place on a live website. Shipping it means shipping a remotely-activatable UI that wasn't designed for public audiences.

---

### 🟡 MEDIUM — Zero Security Headers

**Scope:** All served HTML files  
**OWASP:** A05:2025 Security Misconfiguration  
**References:** [OWASP CSP Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html), [Security Headers in 2026 — wplus.net](https://wplus.net/security/security-headers-2026-csp-sri-practical-defaults/)

No security headers are configured anywhere. The following are absent:

| Header | Risk Without It |
|---|---|
| `Content-Security-Policy` | XSS scripts execute unrestricted |
| `X-Frame-Options: DENY` | Site can be framed for clickjacking attacks |
| `X-Content-Type-Options: nosniff` | Browser MIME-sniffs scripts → can run text/plain as JS |
| `Strict-Transport-Security` | No HTTPS enforcement; SSL stripping possible |
| `Referrer-Policy: strict-origin-when-cross-origin` | Full URL leaked to third-party destinations |
| `Permissions-Policy` | Camera/mic/geolocation APIs accessible to injected code |

**Fix — add a `_headers` file (Netlify/Vercel static) or configure at your host:**

```
# _headers (Netlify format) or netlify.toml / vercel.json

/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload

# Add CSP ONLY after removing Babel Standalone (see finding #1):
  Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data:; frame-ancestors 'none';
```

**For Vercel (`vercel.json`):**
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Strict-Transport-Security", "value": "max-age=63072000; includeSubDomains; preload" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" }
      ]
    }
  ]
}
```

---

### 🟡 MEDIUM — Email Address Exposed to Harvesters

**File:** `sections.jsx` — Location component  
**OWASP:** A02:2025 Cryptographic Failures (data exposure)

```javascript
// sections.jsx — plaintext email in HTML
<div className="cs-loc-val">hello@cafesodaseattle.com<br />(206) 555-SODA</div>
```

Plain-text email addresses in HTML are scraped by automated bots within hours of a site going live, resulting in spam campaigns and phishing attempts targeting that address.

**Fix — encode the email using HTML entities or a contact form:**
```javascript
// Option A: HTML entity encoding (renders correctly, foils simple scrapers)
<div className="cs-loc-val">
  hello&#64;cafesodaseattle&#46;com
</div>

// Option B: Replace email with a contact form link (stronger)
<a href="Visit Us.html#contact" className="cs-loc-val">Send us a message →</a>

// Option C: CSS direction trick (visible, not copy-pasteable by bots)
// email displayed via CSS content property on a pseudo-element
```

---

### 🟡 MEDIUM — Tweaks Panel Should Not Ship to Production

**File:** `Cafe Soda.html` — line 22; `tweaks-panel.jsx`  
**OWASP:** A05:2025 Security Misconfiguration

```html
<script type="text/babel" src="tweaks-panel.jsx"></script>
```

`tweaks-panel.jsx` is a 569-line Claude Design tool that:
- Exposes a hidden floating UI any user can activate via message injection (see postMessage finding above)
- Contains drag, DOM manipulation, and `localStorage` interaction that was never audited for production
- Adds 569 lines of attack surface that serves no function for real site visitors

**Fix:**
```html
<!-- Remove this line entirely before deploying -->
<!-- <script type="text/babel" src="tweaks-panel.jsx"></script> -->

<!-- And remove TweaksPanel from the App() render -->
```

---

### 🟢 LOW — Google Fonts Leaks User IP and Browser Data to Third Party

**File:** `Cafe Soda.html` — lines 9–11  
**OWASP:** A09:2025 Security Logging / Privacy (GDPR Art. 4(1))  
**References:** [Supply Chain Security Risks in Static Sites — nizar.se](https://nizar.se/supply-chain-security-risks-in-static-sites/)

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet" />
```

Every visitor's IP address, User-Agent, and Referer are shared with Google on page load. Under GDPR/CCPA this is a data transfer to a third party without explicit consent — the German courts have ruled Google Fonts loaded remotely as a GDPR violation (LG München I, case 3 O 17493/20).

**Fix — self-host the fonts:**
```bash
# Download fonts at build time using google-webfonts-helper
# https://gwfh.mranftl.com/fonts
# Then serve from /fonts/ locally

npx google-webfonts-helper-cli \
  "Playfair Display:400,700,900" \
  "Cormorant Garamond:300,400,600" \
  "Be Vietnam Pro:300,400,500,600,700" \
  --output ./public/fonts/
```
```css
/* styles.css — self-hosted */
@font-face {
  font-family: 'Playfair Display';
  src: url('/fonts/playfair-display-v37-latin-900.woff2') format('woff2');
  font-weight: 900;
  font-display: swap;
}
```

---

### 🟢 LOW — No `security.txt` File

**OWASP:** A05:2025 Security Misconfiguration (defense-in-depth gap)  
**References:** [RFC 9116](https://www.rfc-editor.org/rfc/rfc9116)

Security researchers who discover vulnerabilities have no way to report them responsibly. `/.well-known/security.txt` is now an internet standard (RFC 9116) and is scanned by HackerOne, Google, and bug bounty platforms.

**Fix — create `/.well-known/security.txt`:**
```
Contact: mailto:hello@cafesodaseattle.com
Expires: 2027-05-16T00:00:00.000Z
Preferred-Languages: en, vi
Policy: https://cafesodaseattle.com/security-policy
```

---

## What Is Correctly Secured ✓

These findings are **positive** and should be maintained:

| Item | Location | Status |
|---|---|---|
| SRI hashes on CDN scripts | `Cafe Soda.html` lines 18–20 | ✓ All three CDN scripts have `integrity=` SHA-384 hashes |
| No `dangerouslySetInnerHTML` | All JSX files | ✓ Zero occurrences — React's JSX auto-escaping is intact |
| No hardcoded secrets | All files | ✓ No API keys, tokens, or credentials in any file |
| No SQL injection surface | Architecture | ✓ No database |
| No SSRF surface | Architecture | ✓ No server-side requests |
| No broken auth | Architecture | ✓ No authentication |
| No insecure deserialization | Architecture | ✓ No backend |
| No third-party payment scripts | Architecture | ✓ No payment forms |

---

## Prioritized Remediation Plan

Address in this order — each step unblocks the next:

### Step 1 — Migrate to a build step (HIGH, blocks Step 3)
```bash
npm create vite@latest cafe-soda -- --template react
# Move JSX files into src/
# npm run build → outputs dist/ with compiled JS, no Babel Standalone
```
This eliminates the `unsafe-eval` requirement and makes a strict CSP possible.

### Step 2 — Switch to React production builds (HIGH, 10 minutes)
Replace `.development.js` → `.production.min.js` in all HTML files and recompute SRI hashes.

### Step 3 — Add security headers at hosting layer (MEDIUM, 15 minutes)
After Step 1 removes Babel Standalone, add full CSP + X-Frame-Options + HSTS to `_headers` / `vercel.json`.

### Step 4 — Fix postMessage origin validation (HIGH, 30 minutes)
Add `event.origin` check in the message receiver and specify exact `targetOrigin` on sends. Then remove `tweaks-panel.jsx` from production HTML.

### Step 5 — Protect the contact email (MEDIUM, 5 minutes)
Replace plain-text email with HTML entities or a contact form link.

### Step 6 — Self-host Google Fonts (LOW, 1–2 hours)
Download and serve fonts locally to eliminate third-party data sharing.

### Step 7 — Add `security.txt` (LOW, 5 minutes)
Create `/.well-known/security.txt` per RFC 9116.

---

## Post-Remediation Target Grade: **A-**

After completing Steps 1–4, the site will have:
- No eval-equivalent code in production
- Strict CSP blocking any future XSS propagation
- Clickjacking prevention via X-Frame-Options / `frame-ancestors 'none'`
- HTTPS enforced via HSTS
- No wildcard postMessage vectors
- React production builds (minimized attack surface)

Steps 5–7 bring it to full **A**.

---

*Audit methodology: OWASP Top 10:2025 · OWASP Cheat Sheet Series · MSRC Security Advisories · RFC 9116 · Manual code review*  
*Sources: [OWASP Top Ten](https://owasp.org/Top10/2025/) · [OWASP CSP Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html) · [SRI — KeyCDN](https://www.keycdn.com/support/subresource-integrity) · [postMessage Vulnerabilities — HackTricks](https://book.hacktricks.xyz/pentesting-web/postmessage-vulnerabilities) · [Microsoft MSRC CVE-2024-49038](https://msrc.microsoft.com/blog/2025/08/postmessaged-and-compromised/) · [nizar.se — Supply Chain Static Sites](https://nizar.se/supply-chain-security-risks-in-static-sites/) · [wplus.net — Security Headers 2026](https://wplus.net/security/security-headers-2026-csp-sri-practical-defaults/)*
