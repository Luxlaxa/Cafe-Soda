/* Dragon-Lotus emblem — geometric placeholder.
   Petals + Đông Sơn concentric rings + glowing center.
   Final illustrated dragon head should be commissioned. */

const Emblem = ({ size = 480, glow = true }) => {
  const cx = 250, cy = 250;
  // 8 outer petals
  const petals = Array.from({ length: 8 }, (_, i) => {
    const angle = (i * 360) / 8;
    return (
      <g key={i} transform={`rotate(${angle} ${cx} ${cy})`}>
        <path
          d={`M ${cx} ${cy - 60}
              C ${cx - 38} ${cy - 110}, ${cx - 32} ${cy - 180}, ${cx} ${cy - 210}
              C ${cx + 32} ${cy - 180}, ${cx + 38} ${cy - 110}, ${cx} ${cy - 60} Z`}
          fill={i % 2 === 0 ? "url(#petalRed)" : "url(#petalGold)"}
          stroke="#D4A017"
          strokeWidth="1"
          opacity={i % 2 === 0 ? 0.92 : 0.85}
        />
      </g>
    );
  });
  // 8 inner small petals offset
  const innerPetals = Array.from({ length: 8 }, (_, i) => {
    const angle = (i * 360) / 8 + 22.5;
    return (
      <g key={i} transform={`rotate(${angle} ${cx} ${cy})`}>
        <path
          d={`M ${cx} ${cy - 40}
              C ${cx - 18} ${cy - 70}, ${cx - 16} ${cy - 110}, ${cx} ${cy - 128}
              C ${cx + 16} ${cy - 110}, ${cx + 18} ${cy - 70}, ${cx} ${cy - 40} Z`}
          fill="url(#petalInner)"
          opacity="0.7"
        />
      </g>
    );
  });
  // Đông Sơn outer ring ticks
  const ticks = Array.from({ length: 48 }, (_, i) => {
    const angle = (i * 360) / 48;
    return (
      <g key={i} transform={`rotate(${angle} ${cx} ${cy})`}>
        <rect x={cx - 0.6} y={cy - 232} width="1.2" height="8" fill="#D4A017" opacity="0.6" />
      </g>
    );
  });
  // Arced text "CÀ PHÊ SỮA ĐÁ · SEATTLE · LITTLE SAIGON"
  return (
    <svg
      viewBox="0 0 500 500"
      width={size}
      height={size}
      style={{ display: "block", overflow: "visible" }}
      aria-label="Cafe Soda emblem"
    >
      <defs>
        <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF1A8" stopOpacity="1" />
          <stop offset="60%" stopColor="#F0C842" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#D4A017" stopOpacity="0.6" />
        </radialGradient>
        <linearGradient id="petalRed" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B1A1A" />
          <stop offset="100%" stopColor="#B22234" />
        </linearGradient>
        <linearGradient id="petalGold" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D4A017" />
          <stop offset="100%" stopColor="#8a6510" />
        </linearGradient>
        <linearGradient id="petalInner" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F0C842" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#D4A017" stopOpacity="0.4" />
        </linearGradient>
        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <path id="emblemArc" d={`M 60 ${cy} A 190 190 0 0 1 440 ${cy}`} fill="none" />
      </defs>

      {/* Đông Sơn outermost ring */}
      <circle cx={cx} cy={cy} r="232" fill="none" stroke="#D4A017" strokeWidth="1" opacity="0.45" />
      <circle cx={cx} cy={cy} r="225" fill="none" stroke="#D4A017" strokeWidth="0.6" opacity="0.3" />
      {ticks}
      <circle cx={cx} cy={cy} r="215" fill="none" stroke="#D4A017" strokeWidth="0.8" opacity="0.35" />

      {/* Arced text */}
      <text fill="#D4A017" opacity="0.55" fontSize="11" letterSpacing="6" fontFamily="'Be Vietnam Pro', sans-serif">
        <textPath href="#emblemArc" startOffset="50%" textAnchor="middle">
          CÀ PHÊ SỮA ĐÁ · SEATTLE · LITTLE SAIGON
        </textPath>
      </text>

      {/* Outer petals */}
      <g filter={glow ? "url(#softGlow)" : undefined}>{petals}</g>

      {/* Inner ring */}
      <circle cx={cx} cy={cy} r="150" fill="none" stroke="#D4A017" strokeWidth="0.6" opacity="0.5" />

      {/* Inner petals */}
      {innerPetals}

      {/* Inner concentric */}
      <circle cx={cx} cy={cy} r="70" fill="none" stroke="#D4A017" strokeWidth="1" opacity="0.6" />
      <circle cx={cx} cy={cy} r="60" fill="none" stroke="#D4A017" strokeWidth="0.5" opacity="0.4" />

      {/* Coffee-bean / sun center */}
      <circle cx={cx} cy={cy} r="48" fill="url(#centerGlow)" />
      <path
        d={`M ${cx} ${cy - 30} C ${cx - 8} ${cy - 10}, ${cx - 8} ${cy + 10}, ${cx} ${cy + 30}
            C ${cx + 8} ${cy + 10}, ${cx + 8} ${cy - 10}, ${cx} ${cy - 30} Z`}
        fill="#6B0F0F"
        opacity="0.75"
      />

      {/* Subtle dragon-spine suggestion (placeholder) — sinuous curve overlay */}
      <path
        d={`M ${cx} ${cy - 215}
            C ${cx + 18} ${cy - 180}, ${cx - 18} ${cy - 150}, ${cx} ${cy - 120}
            C ${cx + 14} ${cy - 95}, ${cx - 14} ${cy - 75}, ${cx} ${cy - 55}`}
        fill="none"
        stroke="#F0C842"
        strokeWidth="1.4"
        opacity="0.7"
      />
      <circle cx={cx} cy={cy - 215} r="5" fill="#F0C842" />
      <circle cx={cx} cy={cy - 215} r="1.6" fill="#1A0A00" />
    </svg>
  );
};

/* Phin filter — secondary brand icon */
const PhinIcon = ({ size = 120, color = "#D4A017", steam = true }) => (
  <svg viewBox="0 0 120 160" width={size} height={size * (160/120)} style={{ display: "block" }} aria-label="Phin filter">
    {steam && (
      <g stroke={color} strokeWidth="1.4" fill="none" opacity="0.65" strokeLinecap="round">
        <path d="M 44 30 C 40 22, 48 18, 44 8">
          <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3.2s" repeatCount="indefinite" />
        </path>
        <path d="M 60 28 C 56 18, 64 14, 60 4">
          <animate attributeName="opacity" values="0.4;0.9;0.4" dur="3.6s" begin="-1s" repeatCount="indefinite" />
        </path>
        <path d="M 76 30 C 72 22, 80 18, 76 8">
          <animate attributeName="opacity" values="0.2;0.7;0.2" dur="3s" begin="-0.5s" repeatCount="indefinite" />
        </path>
      </g>
    )}
    {/* Top knob */}
    <rect x="52" y="32" width="16" height="6" fill={color} />
    <rect x="48" y="38" width="24" height="3" fill={color} />
    {/* Press disc */}
    <rect x="38" y="42" width="44" height="8" fill={color} opacity="0.95" />
    {/* Chamber */}
    <rect x="32" y="50" width="56" height="34" fill="none" stroke={color} strokeWidth="2" />
    {/* Chamber inner detail */}
    <line x1="32" y1="58" x2="88" y2="58" stroke={color} strokeWidth="0.8" opacity="0.6" />
    <line x1="32" y1="76" x2="88" y2="76" stroke={color} strokeWidth="0.8" opacity="0.6" />
    {/* Base lip */}
    <rect x="28" y="84" width="64" height="6" fill={color} />
    {/* Drip */}
    <line x1="60" y1="92" x2="60" y2="110" stroke={color} strokeWidth="1.2" strokeDasharray="2 3" opacity="0.7">
      <animate attributeName="stroke-dashoffset" values="0;-10" dur="1.4s" repeatCount="indefinite" />
    </line>
    {/* Glass */}
    <path d="M 38 110 L 82 110 L 76 150 L 44 150 Z" fill="none" stroke={color} strokeWidth="1.6" />
    <path d="M 44 138 L 76 138" stroke={color} strokeWidth="1" opacity="0.6" />
    <rect x="44" y="140" width="32" height="8" fill={color} opacity="0.25" />
  </svg>
);

/* Tiny culture-strip icons */
const LotusIcon = ({ size = 56, color = "#F0C842" }) => (
  <svg viewBox="0 0 64 64" width={size} height={size}>
    {Array.from({ length: 6 }, (_, i) => {
      const angle = (i * 360) / 6;
      return (
        <g key={i} transform={`rotate(${angle} 32 32)`}>
          <ellipse cx="32" cy="18" rx="6" ry="14" fill={color} opacity={i % 2 ? 0.55 : 0.85} />
        </g>
      );
    })}
    <circle cx="32" cy="32" r="5" fill="#F0C842" />
  </svg>
);

const DragonIcon = ({ size = 56, color = "#F0C842" }) => (
  <svg viewBox="0 0 64 64" width={size} height={size}>
    {/* Stylized serpentine curve */}
    <path d="M 8 44 C 18 30, 24 50, 34 36 C 44 24, 50 40, 56 28"
          fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
    <circle cx="56" cy="28" r="3.2" fill={color} />
    <circle cx="57" cy="27" r="0.9" fill="#1A0A00" />
    {/* Horns */}
    <path d="M 53 24 L 50 18 M 58 24 L 60 18" stroke={color} strokeWidth="1.4" strokeLinecap="round" fill="none" />
    {/* Whisker */}
    <path d="M 52 30 C 46 32, 44 36, 40 36" stroke={color} strokeWidth="1" fill="none" opacity="0.7" />
  </svg>
);

const BeanIcon = ({ size = 56, color = "#F0C842" }) => (
  <svg viewBox="0 0 64 64" width={size} height={size}>
    <ellipse cx="32" cy="32" rx="14" ry="22" fill={color} transform="rotate(-20 32 32)" />
    <path d="M 32 12 C 26 22, 26 42, 32 52" stroke="#1A0A00" strokeWidth="1.6" fill="none" transform="rotate(-20 32 32)" />
  </svg>
);

Object.assign(window, { Emblem, PhinIcon, LotusIcon, DragonIcon, BeanIcon });
