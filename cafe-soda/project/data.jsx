const MENU = {
  Traditional: [
    { vi: "Cà Phê Sữa Đá", en: "Cafe Soda Classic", desc: "Phin-brewed robusta, condensed milk, ice. The drink that named us.", price: "$6", tag: "Signature" },
    { vi: "Cà Phê Trứng", en: "Egg Coffee", desc: "Whipped egg yolk, condensed milk, dark robusta. A Hanoi original from 1946.", price: "$7", tag: "Hanoi Heritage" },
    { vi: "Cà Phê Muối", en: "Salt Coffee", desc: "Hue-style salted cream foam over phin-brewed robusta.", price: "$6.50", tag: "Huế Style" },
    { vi: "Cà Phê Dừa", en: "Coconut Coffee", desc: "Coconut cream blended with robusta over crushed ice.", price: "$7", tag: "Crowd Favorite" },
    { vi: "Cà Phê Đen", en: "Black Coffee", desc: "Just robusta, slow phin pour, hot or iced. No sugar, no apology.", price: "$5", tag: "Purist" },
    { vi: "Cà Phê Sữa Chua", en: "Yogurt Coffee", desc: "Tangy yogurt layered with sweet phin coffee. Hanoi modern.", price: "$7", tag: "Hanoi Modern" },
  ],
  Specialty: [
    { vi: "Cà Phê Mít", en: "Jackfruit Coffee", desc: "Ripe jackfruit syrup, phin robusta, oat milk.", price: "$7.50", tag: "Tropical" },
    { vi: "Cà Phê Mè Đen", en: "Black Sesame Latte", desc: "Toasted black sesame paste, robusta espresso, steamed milk.", price: "$7", tag: "Nutty" },
    { vi: "Cold Brew Caramel Muối", en: "Sea Salt Caramel Cold Brew", desc: "16-hour cold brew, house caramel, flaked sea salt.", price: "$7", tag: "Slow Brewed" },
    { vi: "Cà Phê Ổi", en: "Guava Coffee", desc: "Pink guava purée, phin pour, condensed milk swirl.", price: "$7", tag: "Tropical" },
    { vi: "Cà Phê Lá Dứa", en: "Pandan Coffee", desc: "House pandan syrup, robusta, coconut foam.", price: "$7", tag: "Aromatic" },
    { vi: "Cà Phê Cúc", en: "Chrysanthemum Coffee", desc: "Chrysanthemum-infused robusta, raw honey, lemon zest.", price: "$7.50", tag: "Floral" },
  ],
  Seasonal: [
    { vi: "Lucky Red", en: "Tết Red Lacquer", desc: "Hibiscus, lychee, robusta. Served through Lunar New Year.", price: "$8", tag: "Tết" },
    { vi: "Bánh Trung Thu Latte", en: "Mooncake Latte", desc: "Lotus seed paste, salted yolk foam, robusta. Mid-Autumn only.", price: "$8", tag: "Mid-Autumn" },
    { vi: "Mùa Thu Phin", en: "Autumn Harvest", desc: "Roasted chestnut syrup, cinnamon, phin pour.", price: "$7.50", tag: "Fall" },
    { vi: "Phin Chai Đông", en: "Winter Chai Phin", desc: "Cardamom, star anise, ginger, robusta, oat milk.", price: "$7.50", tag: "Winter" },
    { vi: "Mùa Hè Đá Bào", en: "Summer Freeze", desc: "Shaved ice, condensed milk, phin shot poured tableside.", price: "$8", tag: "Summer" },
    { vi: "Hoa Xuân", en: "Spring Blossom", desc: "Jasmine cold brew, fresh peach, gold leaf garnish.", price: "$8", tag: "Spring" },
  ],
  Bites: [
    { vi: "Bánh Mì", en: "Saigon Sandwich", desc: "House pâté, pickled daikon & carrot, cilantro, jalapeño on baguette.", price: "$10", tag: "Lunch" },
    { vi: "Bánh Cuốn", en: "Steamed Rice Rolls", desc: "Pork & wood-ear mushroom in soft rice sheets, nước chấm.", price: "$9", tag: "Morning" },
    { vi: "Chè (Rotating)", en: "Sweet Soup of the Day", desc: "Ask the bar — coconut, mung bean, taro, or longan.", price: "$6", tag: "Dessert" },
    { vi: "Bánh Tiêu", en: "Hollow Donut", desc: "Sesame-crusted, golden fried, served warm.", price: "$5", tag: "Sweet" },
    { vi: "Xôi Mặn", en: "Savory Sticky Rice", desc: "Chinese sausage, dried shrimp, scallion oil, fried shallot.", price: "$11", tag: "Hearty" },
    { vi: "Chả Giò", en: "Crispy Spring Rolls", desc: "Pork & shrimp, served with lettuce, herbs, nước chấm.", price: "$8", tag: "Crispy" },
  ],
};

const MARQUEE_ITEMS = [
  "Cà Phê Trứng", "Cà Phê Sữa Đá", "Cà Phê Muối", "Cà Phê Dừa",
  "Cà Phê Đen", "Robusta Fine", "Phin Brewed", "Little Saigon Seattle",
];

const TIMELINE = [
  { year: "1857", text: "French missionaries introduce arabica to Vietnam." },
  { year: "1908", text: "Robusta planted in the Central Highlands." },
  { year: "1920s", text: "The phin filter is adapted from French drip devices." },
  { year: "1946", text: "Egg coffee (cà phê trứng) invented in Hà Nội during wartime food shortages." },
  { year: "1986", text: "Đổi Mới reforms launch Vietnam's coffee export boom." },
  { year: "2010", text: "Salt coffee (cà phê muối) invented in Huế." },
  { year: "Today", text: "Vietnam is the world's #2 coffee exporter — #1 in robusta." },
];

Object.assign(window, { MENU, MARQUEE_ITEMS, TIMELINE });
