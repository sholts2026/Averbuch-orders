import { useState, useEffect } from "react";

const MERIVO_CATALOG = [
  {
    id: "merivo-m-white", name: "לבן — מגירה נמוכה M", icon: "⬜", dualPrice: true,
    products: [
      { id: "MR400M-W",       name: "מריוובוקס עומק 40 לבן M",         priceNagar: 175, priceSocher: 160, unit: "יח'" },
      { id: "MR450-M-W",      name: "מריוובוקס עומק 45 לבן M",         priceNagar: 175, priceSocher: 160, unit: "יח'" },
      { id: "MR500-M-W",      name: "מריוובוקס עומק 50 לבן M",         priceNagar: 175, priceSocher: 160, unit: "יח'" },
      { id: "MR550-M-W",      name: "מריוובוקס עומק 55 לבן M",         priceNagar: 180, priceSocher: 170, unit: "יח'" },
      { id: "MR500-M-W-70KG", name: "מריוובוקס עומק 50 לבן M — 70kg", priceNagar: 200, priceSocher: 185, unit: "יח'" },
      { id: "MR550-M-W-70KG", name: "מריוובוקס עומק 55 לבן M — 70kg", priceNagar: 205, priceSocher: 195, unit: "יח'" },
    ]
  },
  {
    id: "merivo-m-graphite", name: "גרפיט — מגירה נמוכה M", icon: "⬛", dualPrice: true,
    products: [
      { id: "MR400M-G",       name: "מריוובוקס עומק 40 גרפיט M",         priceNagar: 175, priceSocher: 160, unit: "יח'" },
      { id: "MR450-M-G",      name: "מריוובוקס עומק 45 גרפיט M",         priceNagar: 175, priceSocher: 160, unit: "יח'" },
      { id: "MR500-M-G",      name: "מריוובוקס עומק 50 גרפיט M",         priceNagar: 175, priceSocher: 160, unit: "יח'" },
      { id: "MR550-M-G",      name: "מריוובוקס עומק 55 גרפיט M",         priceNagar: 180, priceSocher: 170, unit: "יח'" },
      { id: "MR500-M-G-70KG", name: "מריוובוקס עומק 50 גרפיט M — 70kg", priceNagar: 200, priceSocher: 185, unit: "יח'" },
      { id: "MR550-M-G-70KG", name: "מריוובוקס עומק 55 גרפיט M — 70kg", priceNagar: 205, priceSocher: 195, unit: "יח'" },
    ]
  },
  {
    id: "merivo-gallery-white", name: "לבן — מגירה גלריה", icon: "⬜", dualPrice: true,
    products: [
      { id: "MR450GALLERY-W",      name: "מריוובוקס גלריה עומק 45 לבן",         priceNagar: 205, priceSocher: 190, unit: "יח'" },
      { id: "MR500GALLERY-W",      name: "מריוובוקס גלריה עומק 50 לבן",         priceNagar: 205, priceSocher: 190, unit: "יח'" },
      { id: "MR550GALLERY-W",      name: "מריוובוקס גלריה עומק 55 לבן",         priceNagar: 210, priceSocher: 200, unit: "יח'" },
      { id: "MR500GALLERY-W-70KG", name: "מריוובוקס גלריה עומק 50 לבן — 70kg", priceNagar: 230, priceSocher: 215, unit: "יח'" },
      { id: "MR550GALLERY-W-70KG", name: "מריוובוקס גלריה עומק 55 לבן — 70kg", priceNagar: 235, priceSocher: 225, unit: "יח'" },
    ]
  },
  {
    id: "merivo-gallery-graphite", name: "גרפיט — מגירה גלריה", icon: "⬛", dualPrice: true,
    products: [
      { id: "MR450GALLERY-G",      name: "מריוובוקס גלריה עומק 45 גרפיט",         priceNagar: 205, priceSocher: 190, unit: "יח'" },
      { id: "MR500GALLERY-G",      name: "מריוובוקס גלריה עומק 50 גרפיט",         priceNagar: 205, priceSocher: 190, unit: "יח'" },
      { id: "MR550GALLERY-G",      name: "מריוובוקס גלריה עומק 55 גרפיט",         priceNagar: 210, priceSocher: 200, unit: "יח'" },
      { id: "MR500GALLERY-G-70KG", name: "מריוובוקס גלריה עומק 50 גרפיט — 70kg", priceNagar: 230, priceSocher: 215, unit: "יח'" },
      { id: "MR550GALLERY-G-70KG", name: "מריוובוקס גלריה עומק 55 גרפיט — 70kg", priceNagar: 235, priceSocher: 225, unit: "יח'" },
    ]
  },
  {
    id: "merivo-metal-white", name: "לבן — דופן מתכת כפולה", icon: "⬜", dualPrice: true,
    products: [
      { id: "MR400-P-W",      name: "מריוובוקס מתכת עומק 40 לבן",         priceNagar: 225, priceSocher: 210, unit: "יח'" },
      { id: "MR450-P-W",      name: "מריוובוקס מתכת עומק 45 לבן",         priceNagar: 225, priceSocher: 210, unit: "יח'" },
      { id: "MR500-P-W",      name: "מריוובוקס מתכת עומק 50 לבן",         priceNagar: 225, priceSocher: 210, unit: "יח'" },
      { id: "MR550-P-W",      name: "מריוובוקס מתכת עומק 55 לבן",         priceNagar: 230, priceSocher: 220, unit: "יח'" },
      { id: "MR500-P-W-70KG", name: "מריוובוקס מתכת עומק 50 לבן — 70kg", priceNagar: 250, priceSocher: 245, unit: "יח'" },
      { id: "MR550-P-W-70KG", name: "מריוובוקס מתכת עומק 55 לבן — 70kg", priceNagar: 255, priceSocher: 255, unit: "יח'" },
    ]
  },
  {
    id: "merivo-metal-graphite", name: "גרפיט — דופן מתכת כפולה", icon: "⬛", dualPrice: true,
    products: [
      { id: "MR400-P-G",      name: "מריוובוקס מתכת עומק 40 גרפיט",         priceNagar: 225, priceSocher: 210, unit: "יח'" },
      { id: "MR450-P-G",      name: "מריוובוקס מתכת עומק 45 גרפיט",         priceNagar: 225, priceSocher: 210, unit: "יח'" },
      { id: "MR500-P-G",      name: "מריוובוקס מתכת עומק 50 גרפיט",         priceNagar: 225, priceSocher: 210, unit: "יח'" },
      { id: "MR550-P-G",      name: "מריוובוקס מתכת עומק 55 גרפיט",         priceNagar: 230, priceSocher: 220, unit: "יח'" },
      { id: "MR500-P-G-70KG", name: "מריוובוקס מתכת עומק 50 גרפיט — 70kg", priceNagar: 250, priceSocher: 245, unit: "יח'" },
      { id: "MR550-P-G-70KG", name: "מריוובוקס מתכת עומק 55 גרפיט — 70kg", priceNagar: 255, priceSocher: 255, unit: "יח'" },
    ]
  },
  {
    id: "merivo-glass-white", name: "לבן — דופן זכוכית", icon: "🪟", dualPrice: true,
    products: [
      { id: "MR450GLASS-W",      name: "מריוובוקס זכוכית עומק 45 לבן",         priceNagar: 245, priceSocher: 220, unit: "יח'" },
      { id: "MR500GLASS-W",      name: "מריוובוקס זכוכית עומק 50 לבן",         priceNagar: 245, priceSocher: 220, unit: "יח'" },
      { id: "MR550GLASS-W",      name: "מריוובוקס זכוכית עומק 55 לבן",         priceNagar: 255, priceSocher: 230, unit: "יח'" },
      { id: "MR500GLASS-W-70KG", name: "מריוובוקס זכוכית עומק 50 לבן — 70kg", priceNagar: 270, priceSocher: 245, unit: "יח'" },
      { id: "MR550GLASS-W-70KG", name: "מריוובוקס זכוכית עומק 55 לבן — 70kg", priceNagar: 280, priceSocher: 255, unit: "יח'" },
    ]
  },
  {
    id: "merivo-glass-graphite", name: "גרפיט — דופן זכוכית", icon: "🪟", dualPrice: true,
    products: [
      { id: "MR450GLASS-G",      name: "מריוובוקס זכוכית עומק 45 גרפיט",         priceNagar: 245, priceSocher: 220, unit: "יח'" },
      { id: "MR500GLASS-G",      name: "מריוובוקס זכוכית עומק 50 גרפיט",         priceNagar: 245, priceSocher: 220, unit: "יח'" },
      { id: "MR550GLASS-G",      name: "מריוובוקס זכוכית עומק 55 גרפיט",         priceNagar: 255, priceSocher: 230, unit: "יח'" },
      { id: "MR500GLASS-G-70KG", name: "מריוובוקס זכוכית עומק 50 גרפיט — 70kg", priceNagar: 270, priceSocher: 245, unit: "יח'" },
      { id: "MR550GLASS-G-70KG", name: "מריוובוקס זכוכית עומק 55 גרפיט — 70kg", priceNagar: 280, priceSocher: 255, unit: "יח'" },
    ]
  },
  {
    id: "merivo-accessories-white", name: "לבן — אביזרים נלווים", icon: "🔩", dualPrice: true,
    products: [
      { id: "ZI4.4ES1SW",    name: "מתאם לחזית זכוכית MERIVO לבן",       priceNagar: 65,  priceSocher: 60,  unit: "יח'" },
      { id: "ZI4.2ES1SW",    name: "מתאם לחזית מוט מקשר MERIVO לבן",    priceNagar: 65,  priceSocher: 60,  unit: "יח'" },
      { id: "ZI4.0MS1SW",    name: "מתאם לחזית נמוכה MERIVO לבן",       priceNagar: 45,  priceSocher: 40,  unit: "יח'" },
      { id: "ZV4.1042NNSW",  name: "פרופיל חזית זכוכית מריוובוקס לבן",  priceNagar: 65,  priceSocher: 62,  unit: "יח'" },
      { id: "ZV4.1042MSW",   name: "פרופיל חזית פנימית מריוובוקס לבן",  priceNagar: 65,  priceSocher: 62,  unit: "יח'" },
      { id: "ZE4H1058G.KL",  name: "חזית זכוכית MERIVOBOX",             priceNagar: 35,  priceSocher: 35,  unit: "יח'" },
      { id: "ZR4.1059USW-M", name: "מוט מקשר MERIVOBOX לבן",           priceNagar: 28,  priceSocher: 25,  unit: "יח'" },
    ]
  },
  {
    id: "merivo-accessories-graphite", name: "גרפיט — אביזרים נלווים", icon: "🔩", dualPrice: true,
    products: [
      { id: "ZI4.4ES1OG",    name: "מתאם לחזית זכוכית MERIVO גרפיט",     priceNagar: 65,  priceSocher: 60,  unit: "יח'" },
      { id: "ZI4.2ES1OG",    name: "מתאם לחזית מוט מקשר MERIVO גרפיט",  priceNagar: 65,  priceSocher: 60,  unit: "יח'" },
      { id: "ZI4.0MS1OG",    name: "מתאם לחזית נמוכה MERIVO גרפיט",     priceNagar: 45,  priceSocher: 40,  unit: "יח'" },
      { id: "ZV4.1042NNOG",  name: "פרופיל חזית זכוכית מריוובוקס גרפיט",priceNagar: 65,  priceSocher: 62,  unit: "יח'" },
      { id: "ZV4.1042MOG",   name: "פרופיל חזית פנימית מריוובוקס גרפיט",priceNagar: 65,  priceSocher: 62,  unit: "יח'" },
      { id: "ZE4H1058G.KL",  name: "חזית זכוכית MERIVOBOX",             priceNagar: 35,  priceSocher: 35,  unit: "יח'" },
      { id: "ZR4.1059UOG-M", name: "מוט מקשר MERIVOBOX גרפיט",          priceNagar: 28,  priceSocher: 25,  unit: "יח'" },
    ]
  },
];

const LEGRABOX_CATALOG = [
  {
    id: "white-c", name: "לבן — דופן C", icon: "⬜",
    products: [
      { id: "LG270CSW", name: "לגראבוקס C לבן עומק 27", price: 468, unit: "יח'" },
      { id: "LG300CSW", name: "לגראבוקס C לבן עומק 30", price: 468, unit: "יח'" },
      { id: "LG350CSW", name: "לגראבוקס C לבן עומק 35", price: 470, unit: "יח'" },
      { id: "LG400CSW", name: "לגראבוקס C לבן עומק 40", price: 456, unit: "יח'" },
      { id: "LG450CSW", name: "לגראבוקס C לבן עומק 45", price: 460, unit: "יח'" },
      { id: "LG500CSW", name: "לגראבוקס C לבן עומק 50", price: 468, unit: "יח'" },
      { id: "LG550CSW", name: "לגראבוקס C לבן עומק 55", price: 510, unit: "יח'" },
      { id: "LG450CSW70Kg", name: "לגראבוקס C לבן עומק 45 — 70kg", price: 516, unit: "יח'" },
      { id: "LG500CSW70Kg", name: "לגראבוקס C לבן עומק 50 — 70kg", price: 524, unit: "יח'" },
      { id: "LG550CSW70Kg", name: "לגראבוקס C לבן עומק 55 — 70kg", price: 566, unit: "יח'" },
    ]
  },
  {
    id: "white-m", name: "לבן — דופן M", icon: "⬜",
    products: [
      { id: "LG270MSW", name: "לגראבוקס M לבן עומק 27", price: 370, unit: "יח'" },
      { id: "LG300MSW", name: "לגראבוקס M לבן עומק 30", price: 370, unit: "יח'" },
      { id: "LG350MSW", name: "לגראבוקס M לבן עומק 35", price: 370, unit: "יח'" },
      { id: "LG400MSW", name: "לגראבוקס M לבן עומק 40", price: 370, unit: "יח'" },
      { id: "LG450MSW", name: "לגראבוקס M לבן עומק 45", price: 370, unit: "יח'" },
      { id: "LG500MSW", name: "לגראבוקס M לבן עומק 50", price: 370, unit: "יח'" },
      { id: "LG550MSW", name: "לגראבוקס M לבן עומק 55", price: 390, unit: "יח'" },
      { id: "LG450MSW70Kg", name: "לגראבוקס M לבן עומק 45 — 70kg", price: 413, unit: "יח'" },
      { id: "LG500MSW70Kg", name: "לגראבוקס M לבן עומק 50 — 70kg", price: 426, unit: "יח'" },
      { id: "LG550MSW70Kg", name: "לגראבוקס M לבן עומק 55 — 70kg", price: 446, unit: "יח'" },
    ]
  },
  {
    id: "white-k", name: "לבן — דופן K", icon: "⬜",
    products: [
      { id: "LG350KSW", name: "לגראבוקס K לבן עומק 35", price: 427, unit: "יח'" },
      { id: "LG400KSW", name: "לגראבוקס K לבן עומק 40", price: 427, unit: "יח'" },
      { id: "LG450KSW", name: "לגראבוקס K לבן עומק 45", price: 427, unit: "יח'" },
      { id: "LG500KSW", name: "לגראבוקס K לבן עומק 50", price: 450, unit: "יח'" },
      { id: "LG550KSW", name: "לגראבוקס K לבן עומק 55", price: 470, unit: "יח'" },
      { id: "LG450KSW70Kg", name: "לגראבוקס K לבן עומק 45 — 70kg", price: 483, unit: "יח'" },
      { id: "LG500KSW70Kg", name: "לגראבוקס K לבן עומק 50 — 70kg", price: 506, unit: "יח'" },
      { id: "LG550KSW70Kg", name: "לגראבוקס K לבן עומק 55 — 70kg", price: 526, unit: "יח'" },
    ]
  },
  {
    id: "white-f", name: "לבן — דופן F", icon: "⬜",
    products: [
      { id: "LG400FSW", name: "לגראבוקס F לבן עומק 40", price: 710, unit: "יח'" },
      { id: "LG450FSW", name: "לגראבוקס F לבן עומק 45", price: 710, unit: "יח'" },
      { id: "LG500FSW-M", name: "לגראבוקס F לבן עומק 50", price: 710, unit: "יח'" },
      { id: "LG550FSW-M", name: "לגראבוקס F לבן עומק 55", price: 730, unit: "יח'" },
      { id: "LG450FSW70Kg", name: "לגראבוקס F לבן עומק 45 — 70kg", price: 766, unit: "יח'" },
      { id: "LG500FSW70Kg", name: "לגראבוקס F לבן עומק 50 — 70kg", price: 766, unit: "יח'" },
      { id: "LG550FSW70KG", name: "לגראבוקס F לבן עומק 55 — 70kg", price: 780, unit: "יח'" },
    ]
  },
  {
    id: "white-glass", name: "לבן — זכוכית", icon: "🪟",
    products: [
      { id: "LG400CSWGLASS", name: "לגראבוקס זכוכית לבן עומק 40", price: 510, unit: "יח'" },
      { id: "LG450CSWGLASS", name: "לגראבוקס זכוכית לבן עומק 45", price: 510, unit: "יח'" },
      { id: "LG500CSWGLASS", name: "לגראבוקס זכוכית לבן עומק 50", price: 530, unit: "יח'" },
      { id: "LG550CSWGLASS", name: "לגראבוקס זכוכית לבן עומק 55", price: 560, unit: "יח'" },
      { id: "LG450CSWGLASS70KG", name: "לגראבוקס זכוכית לבן עומק 45 — 70kg", price: 566, unit: "יח'" },
      { id: "LG500CSWGLASS70KG", name: "לגראבוקס זכוכית לבן עומק 50 — 70kg", price: 590, unit: "יח'" },
      { id: "LG550CSWGLASS70KG", name: "לגראבוקס זכוכית לבן עומק 55 — 70kg", price: 620, unit: "יח'" },
    ]
  },
  {
    id: "graphite-c", name: "גרפיט — דופן C", icon: "⬛",
    products: [
      { id: "LG270COG", name: "לגראבוקס C גרפיט עומק 27", price: 468, unit: "יח'" },
      { id: "LG300COG", name: "לגראבוקס C גרפיט עומק 30", price: 468, unit: "יח'" },
      { id: "LG350COG", name: "לגראבוקס C גרפיט עומק 35", price: 470, unit: "יח'" },
      { id: "LG400COG", name: "לגראבוקס C גרפיט עומק 40", price: 456, unit: "יח'" },
      { id: "LG450COG", name: "לגראבוקס C גרפיט עומק 45", price: 460, unit: "יח'" },
      { id: "LG500COG", name: "לגראבוקס C גרפיט עומק 50", price: 468, unit: "יח'" },
      { id: "LG550COG", name: "לגראבוקס C גרפיט עומק 55", price: 510, unit: "יח'" },
      { id: "LG500COG70Kg", name: "לגראבוקס C גרפיט עומק 50 — 70kg", price: 524, unit: "יח'" },
      { id: "LG550COG70Kg", name: "לגראבוקס C גרפיט עומק 55 — 70kg", price: 566, unit: "יח'" },
    ]
  },
  {
    id: "graphite-m", name: "גרפיט — דופן M", icon: "⬛",
    products: [
      { id: "LG270MOG", name: "לגראבוקס M גרפיט עומק 27", price: 370, unit: "יח'" },
      { id: "LG300MOG", name: "לגראבוקס M גרפיט עומק 30", price: 370, unit: "יח'" },
      { id: "LG350MOG", name: "לגראבוקס M גרפיט עומק 35", price: 370, unit: "יח'" },
      { id: "LG400MOG", name: "לגראבוקס M גרפיט עומק 40", price: 370, unit: "יח'" },
      { id: "LG450MOG", name: "לגראבוקס M גרפיט עומק 45", price: 370, unit: "יח'" },
      { id: "LG500MOG", name: "לגראבוקס M גרפיט עומק 50", price: 370, unit: "יח'" },
      { id: "LG550MOG", name: "לגראבוקס M גרפיט עומק 55", price: 390, unit: "יח'" },
      { id: "LG450MOG70Kg", name: "לגראבוקס M גרפיט עומק 45 — 70kg", price: 413, unit: "יח'" },
      { id: "LG500MOG70Kg", name: "לגראבוקס M גרפיט עומק 50 — 70kg", price: 426, unit: "יח'" },
      { id: "LG550MOG70Kg", name: "לגראבוקס M גרפיט עומק 55 — 70kg", price: 446, unit: "יח'" },
    ]
  },
  {
    id: "graphite-k", name: "גרפיט — דופן K", icon: "⬛",
    products: [
      { id: "LG350KOG", name: "לגראבוקס K גרפיט עומק 35", price: 427, unit: "יח'" },
      { id: "LG400KOG", name: "לגראבוקס K גרפיט עומק 40", price: 427, unit: "יח'" },
      { id: "LG450KOG", name: "לגראבוקס K גרפיט עומק 45", price: 427, unit: "יח'" },
      { id: "LG500KOG", name: "לגראבוקס K גרפיט עומק 50", price: 450, unit: "יח'" },
      { id: "LG550KOG", name: "לגראבוקס K גרפיט עומק 55", price: 470, unit: "יח'" },
      { id: "LG450KOG70Kg", name: "לגראבוקס K גרפיט עומק 45 — 70kg", price: 483, unit: "יח'" },
      { id: "LG500KOGM70Kg", name: "לגראבוקס K גרפיט עומק 50 — 70kg", price: 506, unit: "יח'" },
      { id: "LG550KOGM70Kg", name: "לגראבוקס K גרפיט עומק 55 — 70kg", price: 526, unit: "יח'" },
    ]
  },
  {
    id: "graphite-f", name: "גרפיט — דופן F", icon: "⬛",
    products: [
      { id: "LG400FOG", name: "לגראבוקס F גרפיט עומק 40", price: 710, unit: "יח'" },
      { id: "LG450FOG", name: "לגראבוקס F גרפיט עומק 45", price: 710, unit: "יח'" },
      { id: "LG500FOG", name: "לגראבוקס F גרפיט עומק 50", price: 710, unit: "יח'" },
      { id: "LG550FOG", name: "לגראבוקס F גרפיט עומק 55", price: 730, unit: "יח'" },
      { id: "LG450FOG70Kg", name: "לגראבוקס F גרפיט עומק 45 — 70kg", price: 766, unit: "יח'" },
      { id: "LG500FOG70Kg", name: "לגראבוקס F גרפיט עומק 50 — 70kg", price: 766, unit: "יח'" },
      { id: "LG550FOG70KG", name: "לגראבוקס F גרפיט עומק 55 — 70kg", price: 780, unit: "יח'" },
    ]
  },
  {
    id: "graphite-glass", name: "גרפיט — זכוכית", icon: "🪟",
    products: [
      { id: "LG400COGGLASS", name: "לגראבוקס זכוכית גרפיט עומק 40", price: 510, unit: "יח'" },
      { id: "LG450COGGLASS", name: "לגראבוקס זכוכית גרפיט עומק 45", price: 510, unit: "יח'" },
      { id: "LG500COGGLASS", name: "לגראבוקס זכוכית גרפיט עומק 50", price: 530, unit: "יח'" },
      { id: "LG550COGGLASS", name: "לגראבוקס זכוכית גרפיט עומק 55", price: 560, unit: "יח'" },
      { id: "LG450COGGLASS70KG", name: "לגראבוקס זכוכית גרפיט עומק 45 — 70kg", price: 566, unit: "יח'" },
      { id: "LG500COGGLASS70KG", name: "לגראבוקס זכוכית גרפיט עומק 50 — 70kg", price: 590, unit: "יח'" },
      { id: "LG550COGGLASS70KG", name: "לגראבוקס זכוכית גרפיט עומק 55 — 70kg", price: 620, unit: "יח'" },
    ]
  },
  {
    id: "tipon-blum", name: "TIP-ON BLUMOTION", icon: "🔘",
    products: [
      { id: "T60L7040", name: "סט טיפאון 7040 לעומק 27-30", price: 120, unit: "סט" },
      { id: "T60L7540", name: "סט טיפאון 7540 עד 40 ק\"ג", price: 144, unit: "סט" },
      { id: "T60L7570", name: "סט טיפאון 7570 עד 60 ק\"ג", price: 160, unit: "סט" },
      { id: "T60.1125W", name: "מוט סנכרון עגול לLEGRABOX טיפאון", price: 36, unit: "יח'" },
    ]
  },
  {
    id: "tipon-rail-white", name: "TIP-ON במסילה — לבן", icon: "🔘",
    products: [
      { id: "LG500MSW-TIPON", name: "לגראבוקס TIPON M לבן עומק 50", price: 454, unit: "יח'" },
      { id: "LG550MSW-TIPON", name: "לגראבוקס TIPON M לבן עומק 55", price: 454, unit: "יח'" },
      { id: "LG500KSW-TIPON", name: "לגראבוקס TIPON K לבן עומק 50", price: 500, unit: "יח'" },
      { id: "LG550KSW-TIPON", name: "לגראבוקס TIPON K לבן עומק 55", price: 500, unit: "יח'" },
      { id: "LG450CSWTIPON", name: "לגראבוקס TIPON C לבן עומק 45", price: 565, unit: "יח'" },
      { id: "LG500CSW-TIPON", name: "לגראבוקס TIPON C לבן עומק 50", price: 565, unit: "יח'" },
      { id: "LG550CSW-TIPON", name: "לגראבוקס TIPON C לבן עומק 55", price: 565, unit: "יח'" },
      { id: "LG500FSWTIPON", name: "לגראבוקס TIPON F לבן עומק 50", price: 800, unit: "יח'" },
      { id: "LG550FSWTIPON", name: "לגראבוקס TIPON F לבן עומק 55", price: 800, unit: "יח'" },
      { id: "LG500GLASSSW-TIPON", name: "לגראבוקס TIPON זכוכית לבן עומק 50", price: 600, unit: "יח'" },
      { id: "LG550GLASSSW-TIPON", name: "לגראבוקס TIPON זכוכית לבן עומק 55", price: 620, unit: "יח'" },
    ]
  },
  {
    id: "tipon-rail-graphite", name: "TIP-ON במסילה — גרפיט", icon: "🔘",
    products: [
      { id: "LG500MOG-TIPON", name: "לגראבוקס TIPON M גרפיט עומק 50", price: 454, unit: "יח'" },
      { id: "LG550MOG-TIPON", name: "לגראבוקס TIPON M גרפיט עומק 55", price: 454, unit: "יח'" },
      { id: "LG500KOG-TIPON", name: "לגראבוקס TIPON K גרפיט עומק 50", price: 500, unit: "יח'" },
      { id: "LG550KOG-TIPON", name: "לגראבוקס TIPON K גרפיט עומק 55", price: 500, unit: "יח'" },
      { id: "LG450COGTIPON", name: "לגראבוקס TIPON C גרפיט עומק 45", price: 565, unit: "יח'" },
      { id: "LG500COG-TIPON", name: "לגראבוקס TIPON C גרפיט עומק 50", price: 565, unit: "יח'" },
      { id: "LG550COG-TIPON", name: "לגראבוקס TIPON C גרפיט עומק 55", price: 565, unit: "יח'" },
      { id: "LG500FOGTIPON", name: "לגראבוקס TIPON F גרפיט עומק 50", price: 800, unit: "יח'" },
      { id: "LG550FOGTIPON", name: "לגראבוקס TIPON F גרפיט עומק 55", price: 800, unit: "יח'" },
      { id: "LG500GLASSOG-TIPON", name: "לגראבוקס TIPON זכוכית גרפיט עומק 50", price: 600, unit: "יח'" },
      { id: "LG550COGGLASS-TIPON", name: "לגראבוקס TIPON זכוכית גרפיט עומק 55", price: 620, unit: "יח'" },
      { id: "LG500GLASSOG-TIPON70", name: "לגראבוקס TIPON זכוכית גרפיט עומק 50 — 70kg", price: 740, unit: "יח'" },
      { id: "LG550GLASSOG-TIPON70", name: "לגראבוקס TIPON זכוכית גרפיט עומק 55 — 70kg", price: 766, unit: "יח'" },
    ]
  },
  {
    id: "lg-accessories-white", name: "לבן — אביזרים וחזיתות", icon: "⬜",
    products: [
      { id: "ZV7.1043C01-SW-M", name: "פרופיל לחזית לבן LEGRABOX",           price: 124, unit: "יח'" },
      { id: "Zi7.0Ks0-SW-M",   name: "מתאם לחזית K לבן LEGRABOX",           price: 126, unit: "יח'" },
      { id: "Zi7.0Ms0-SW-M",   name: "מתאם לחזית M לבן LEGRABOX",           price: 110, unit: "יח'" },
      { id: "ZV7.1043MNI-SW-M",name: "פרופיל לחזית זכוכית לבן LEGRABOX",   price: 120, unit: "יח'" },
      { id: "Zi7.2Cs0-SW-M",   name: "מתאם לחזית זכוכית C לבן LEGRABOX",   price: 165, unit: "יח'" },
      { id: "ZE7W1100G-SW",    name: "חזית זכוכית LEGRABOX 1100×138×10mm",  price: 73,  unit: "יח'" },
      { id: "Zi7.3Cs0-SW-M",   name: "מתאם לחזית גלריה C לבן LEGRABOX",    price: 165, unit: "יח'" },
      { id: "ZR7.1080U-SW-M",  name: "מוט מקשר לבן LEGRABOX",               price: 47,  unit: "יח'" },
    ]
  },
  {
    id: "lg-accessories-graphite", name: "גרפיט — אביזרים וחזיתות", icon: "⬛",
    products: [
      { id: "ZV7.1043C01-OGM", name: "פרופיל לחזית גרפיט LEGRABOX",          price: 124, unit: "יח'" },
      { id: "Zi7.0Ks0-OGM",   name: "זוג מתאם לחזית K גרפיט LEGRABOX",     price: 126, unit: "יח'" },
      { id: "Zi7.0Ms0-OGM",   name: "זוג מתאמים לחזית M גרפיט LEGRABOX",   price: 110, unit: "יח'" },
      { id: "ZV7.1043MNI-OGM",name: "פרופיל לחזית זכוכית גרפיט LEGRABOX",  price: 120, unit: "יח'" },
      { id: "Zi7.2Cs0-OGM",   name: "זוג מתאם לחזית זכוכית C גרפיט",      price: 165, unit: "יח'" },
      { id: "ZE7W1100G-OGM",  name: "חזית זכוכית LEGRABOX 1100×138×10mm",  price: 73,  unit: "יח'" },
      { id: "Zi7.3Cs0-OGM",   name: "מתאם לחזית גלריה C גרפיט LEGRABOX",  price: 165, unit: "יח'" },
      { id: "ZR7.1080U-OGM",  name: "מוט מקשר גרפיט LEGRABOX",             price: 47,  unit: "יח'" },
    ]
  },
];

const BRANDS = [
  { id: "merivobox", name: "MERIVOBOX", icon: "📦", subCategories: MERIVO_CATALOG },
  { id: "legrabox",  name: "LEGRABOX",  icon: "🗂️", subCategories: LEGRABOX_CATALOG },
];

const AGENTS = [
  { id: "0538377364", name: "שני",   phone: "972538377364" },
  { id: "0542898898", name: "רועי",  phone: "972542898898" },
  { id: "0522490660", name: "יוסף",  phone: "972522490660" },
  { id: "0502208368", name: "איתי",  phone: "972502208368" },
  { id: "0525651107", name: "אבי",   phone: "972525651107" },
  { id: "0522759367", name: "איציק", phone: "972522759367" },
  { id: "0506830313", name: "אלברט", phone: "972506830313" },
  { id: "0526555851", name: "חזי",   phone: "972526555851" },
  { id: "0544288073", name: "יאיר",  phone: "972544288073" },
  { id: "0506599214", name: "יובל",  phone: "972506599214" },
  { id: "0522365557", name: "יפתח",  phone: "972522365557" },
  { id: "0538788978", name: "עשרה",  phone: "972538788978" },
  { id: "0537624588", name: "אורי",  phone: "972537624588" },
  { id: "0507405060", name: "הילה",  phone: "972507405060" },
  { id: "0546000750", name: "ניסו",  phone: "972546000750" },
  { id: "0535557410", name: "עאמר",  phone: "972535557410" },
];

export default function App() {
  const [step, setStep] = useState(0);
  const [activeBrand, setActiveBrand] = useState(null);
  const [activeCat, setActiveCat] = useState(null);
  const [cart, setCart] = useState({});
  const [notes, setNotes] = useState("");
  const [expando, setExpando] = useState(false);
  const [inserta, setInserta] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [agent, setAgent] = useState(null);
  const [customerType, setCustomerType] = useState(null); // "נגר" | "סוחר"
  const [nameInput, setNameInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [nameError, setNameError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const foundAgent = AGENTS.find(a => a.id === params.get("agent"));
    setAgent(foundAgent || null);
    const t = params.get("type");
    if (t === "nagar") setCustomerType("נגר");
    else if (t === "socher") setCustomerType("סוחר");
    else setCustomerType(null);
  }, []);

  const enter = () => {
    if (!nameInput.trim()) { setNameError("יש להזין שם"); return; }
    setNameError("");
    setStep(1);
  };

  const getPrice = (p, cat) => {
    if (cat && cat.dualPrice) {
      return customerType === "סוחר" ? p.priceSocher : p.priceNagar;
    }
    return Math.round(p.price * 0.5);
  };

  const allProducts = BRANDS.flatMap(b => b.subCategories.flatMap(c => c.products.map(p => ({ ...p, cat: c }))));
  const cartCount = Object.values(cart).reduce((s, q) => s + q, 0);
  const cartTotal = allProducts.reduce((s, p) => s + (cart[p.id] || 0) * getPrice(p, p.cat), 0);
  const cartItems = allProducts.filter(p => cart[p.id]).map(p => ({
    ...p, qty: cart[p.id], catName: p.cat.name, finalPrice: getPrice(p, p.cat)
  }));

  const setQty = (pid, delta) => {
    setCart(prev => {
      const next = Math.max(0, (prev[pid] || 0) + delta);
      if (next === 0) { const { [pid]: _, ...rest } = prev; return rest; }
      return { ...prev, [pid]: next };
    });
  };

  const submit = () => {
    if (cartItems.length === 0) return;
    const phone = agent?.phone || "972538377364";
    const lines = [
      `🔩 *הזמנה חדשה – אברבוך פרזול*`, ``,
      `👤 *לקוח:* ${nameInput}`,
      phoneInput ? `📞 *טלפון:* ${phoneInput}` : ``,
      agent ? `🧑‍💼 *סוכן:* ${agent.name}` : ``,
      customerType ? `🏷️ *סוג:* ${customerType}` : ``,
      expando ? `📦 *EXPANDO:* כן` : ``,
      inserta ? `📦 *INSERTA:* כן` : ``,
      ``, `*פריטים:*`,
      ...cartItems.map(p => `• מק"ט: ${p.id} | ${p.name}  ×${p.qty}  ₪${(p.finalPrice * p.qty).toLocaleString("he-IL")}`),
      ``, `💰 *סה"כ: ₪${cartTotal.toLocaleString("he-IL")}*`,
      notes ? `📝 *הערות:* ${notes}` : ``,
    ].filter(Boolean);
    setSubmitted(true);
    setTimeout(() => window.open(`https://wa.me/${phone}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank"), 500);
  };

  const brand = BRANDS.find(b => b.id === activeBrand);
  const cat = brand?.subCategories.find(c => c.id === activeCat);

  if (submitted) return (
    <div style={{fontFamily:"sans-serif",direction:"rtl",background:"#f5f5f0",minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
      <div style={{background:"#fff",borderRadius:16,padding:"40px 28px",maxWidth:400,width:"100%",textAlign:"center",boxShadow:"0 4px 24px rgba(0,0,0,0.1)"}}>
        <div style={{fontSize:"3rem",marginBottom:12}}>✅</div>
        <h2 style={{marginBottom:8}}>ההזמנה נשלחה!</h2>
        <p style={{color:"#666",marginBottom:20}}>תודה {nameInput}! נחזור אליך בקרוב.</p>
        <div style={{background:"#f5f5f0",borderRadius:10,padding:16,textAlign:"right"}}>
          {cartItems.map(p => (
            <div key={p.id} style={{display:"flex",justifyContent:"space-between",fontSize:"0.88rem",padding:"3px 0"}}>
              <span>{p.name} ×{p.qty}</span>
              <span>₪{(p.finalPrice*p.qty).toLocaleString("he-IL")}</span>
            </div>
          ))}
          <div style={{borderTop:"1px solid #ddd",marginTop:10,paddingTop:10,fontWeight:700,display:"flex",justifyContent:"space-between"}}>
            <span>סה"כ</span><span style={{color:"#d4a017"}}>₪{cartTotal.toLocaleString("he-IL")}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{fontFamily:"sans-serif",direction:"rtl",background:"#f5f5f0",minHeight:"100vh"}}>
      <div style={{background:"#1c1c1c",color:"#fff",padding:"0 16px",height:52,display:"flex",alignItems:"center",justifyContent:"space-between",position:"sticky",top:0,zIndex:50}}>
        <span style={{fontWeight:700}}>🔩 אברבוך פרזול {nameInput && <span style={{fontSize:"0.75rem",opacity:0.7}}>· {nameInput}</span>}</span>
        {cartCount > 0 && step > 1 && (
          <div onClick={() => setStep(4)} style={{background:"#d4a017",color:"#1c1c1c",borderRadius:20,padding:"4px 12px",cursor:"pointer",fontWeight:700,fontSize:"0.85rem"}}>
            🛒 {cartCount} · ₪{cartTotal.toLocaleString("he-IL")}
          </div>
        )}
      </div>

      <div style={{maxWidth:620,margin:"0 auto",padding:"20px 14px 80px"}}>

        {/* STEP 0 — פרטי לקוח */}
        {step === 0 && (
          <div style={{maxWidth:380,margin:"40px auto"}}>
            {/* לינק לא תקין */}
            {(!agent || !customerType) ? (
              <div style={{textAlign:"center",padding:"60px 20px"}}>
                <div style={{fontSize:"2.5rem",marginBottom:12}}>⚠️</div>
                <h2 style={{fontSize:"1.1rem",fontWeight:700,marginBottom:8}}>לינק לא תקין</h2>
                <p style={{color:"#888",fontSize:"0.88rem"}}>פנה לסוכן שלך לקבלת הלינק הנכון</p>
              </div>
            ) : (
              <>
                <div style={{textAlign:"center",marginBottom:24}}>
                  <div style={{fontSize:"2.5rem",marginBottom:8}}>🔩</div>
                  <h2 style={{fontSize:"1.3rem",fontWeight:700,marginBottom:4}}>אברבוך פרזול</h2>
                  <div style={{display:"inline-block",background:customerType==="סוחר"?"#e8f5e9":"#fff8e1",color:customerType==="סוחר"?"#2e7d32":"#b8860b",borderRadius:20,padding:"3px 14px",fontSize:"0.82rem",fontWeight:700,marginBottom:4}}>
                    {customerType==="סוחר" ? "S" : "N"}
                  </div>
                  <p style={{color:"#888",fontSize:"0.85rem",marginTop:6}}>הכנס את פרטיך כדי להמשיך</p>
                </div>
                <div style={{background:"#fff",borderRadius:12,padding:24,boxShadow:"0 2px 12px rgba(0,0,0,0.08)"}}>
                  <label style={{display:"block",fontSize:"0.82rem",fontWeight:700,color:"#aaa",marginBottom:6}}>שם מלא *</label>
                  <input value={nameInput} onChange={e => { setNameInput(e.target.value); setNameError(""); }}
                    onKeyDown={e => e.key==="Enter" && enter()}
                    placeholder="ישראל ישראלי"
                    style={{width:"100%",border:`1.5px solid ${nameError?"#e53935":"#e8e8e8"}`,borderRadius:8,padding:"11px 13px",fontFamily:"inherit",fontSize:"1rem",outline:"none",direction:"rtl",marginBottom:nameError?4:12,boxSizing:"border-box"}} />
                  {nameError && <div style={{color:"#e53935",fontSize:"0.78rem",marginBottom:10}}>{nameError}</div>}
                  <label style={{display:"block",fontSize:"0.82rem",fontWeight:700,color:"#aaa",marginBottom:6}}>טלפון (אופציונלי)</label>
                  <input value={phoneInput} onChange={e => setPhoneInput(e.target.value)}
                    onKeyDown={e => e.key==="Enter" && enter()}
                    placeholder="050-0000000" type="tel"
                    style={{width:"100%",border:"1.5px solid #e8e8e8",borderRadius:8,padding:"11px 13px",fontFamily:"inherit",fontSize:"1rem",outline:"none",direction:"rtl",marginBottom:16,boxSizing:"border-box"}} />
                  <button onClick={enter} disabled={!nameInput.trim()}
                    style={{width:"100%",background:!nameInput.trim()?"#ccc":"#1c1c1c",color:"#fff",border:"none",borderRadius:8,padding:"12px",fontFamily:"inherit",fontSize:"1rem",fontWeight:700,cursor:!nameInput.trim()?"default":"pointer",transition:"background 0.15s"}}>
                    כניסה לקטלוג →
                  </button>
                </div>
              </>
            )}
          </div>
        )}

        {/* STEP 1 — בחירת מותג */}
        {step === 1 && (
          <div>
            <h2 style={{fontSize:"1.1rem",fontWeight:700,marginBottom:4}}>בחר קטלוג</h2>
            <p style={{fontSize:"0.82rem",color:"#888",marginBottom:18}}>כל המחירים המוצגים הם מחירי נטו</p>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
              {BRANDS.map(b => {
                const totalInCart = b.subCategories.flatMap(c => c.products).filter(p => cart[p.id]).length;
                return (
                  <div key={b.id} onClick={() => { setActiveBrand(b.id); setStep(2); }}
                    style={{background:"#fff",border:`1.5px solid ${totalInCart>0?"#d4a017":"#e8e8e8"}`,borderRadius:14,padding:"28px 16px",cursor:"pointer",textAlign:"center"}}>
                    <div style={{fontSize:"2.4rem",marginBottom:10}}>{b.icon}</div>
                    <div style={{fontWeight:700,fontSize:"1.1rem"}}>{b.name}</div>
                    <div style={{fontSize:"0.72rem",color:"#aaa",marginTop:4}}>{b.subCategories.length} קטגוריות</div>
                    {totalInCart > 0 && (
                      <div style={{marginTop:8,background:"#fff8e1",color:"#d4a017",borderRadius:20,padding:"2px 10px",fontSize:"0.72rem",fontWeight:700,display:"inline-block"}}>
                        {totalInCart} פריטים ✓
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 2 — קטגוריות */}
        {step === 2 && brand && (
          <div>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:6}}>
              <button onClick={() => setStep(1)} style={{background:"none",border:"none",fontSize:"1.2rem",cursor:"pointer"}}>→</button>
              <span style={{fontSize:"1.2rem"}}>{brand.icon}</span>
              <h2 style={{fontSize:"1.05rem",fontWeight:700}}>{brand.name}</h2>
            </div>
            <p style={{fontSize:"0.82rem",color:"#888",marginBottom:14,paddingRight:36}}>כל המחירים הם מחירי נטו</p>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
              {brand.subCategories.map(c => {
                const inCart = c.products.filter(p => cart[p.id]).length;
                return (
                  <div key={c.id} onClick={() => { setActiveCat(c.id); setStep(3); }}
                    style={{background:"#fff",border:`1.5px solid ${inCart>0?"#d4a017":"#e8e8e8"}`,borderRadius:12,padding:"16px 12px",cursor:"pointer",textAlign:"center"}}>
                    <div style={{fontSize:"1.6rem",marginBottom:5}}>{c.icon}</div>
                    <div style={{fontWeight:600,fontSize:"0.85rem",lineHeight:1.3}}>{c.name}</div>
                    <div style={{fontSize:"0.7rem",color:"#aaa",marginTop:3}}>{c.products.length} מוצרים</div>
                    {inCart > 0 && (
                      <div style={{marginTop:5,background:"#fff8e1",color:"#d4a017",borderRadius:20,padding:"2px 8px",fontSize:"0.68rem",fontWeight:700,display:"inline-block"}}>
                        {inCart} נבחרו ✓
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            {activeBrand === "legrabox" && (
              <div style={{background:"#fff",border:"1.5px solid #e8e8e8",borderRadius:10,padding:"14px 16px",marginTop:12,display:"flex",alignItems:"center",gap:12,cursor:"pointer"}}
                onClick={() => setExpando(e => !e)}>
                <div style={{width:22,height:22,borderRadius:5,border:`2px solid ${expando?"#1c1c1c":"#ccc"}`,background:expando?"#1c1c1c":"#fff",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"all 0.15s"}}>
                  {expando && <span style={{color:"#fff",fontSize:"0.85rem",fontWeight:700}}>✓</span>}
                </div>
                <div>
                  <div style={{fontWeight:600,fontSize:"0.92rem"}}>EXPANDO</div>
                  <div style={{fontSize:"0.76rem",color:"#aaa",marginTop:2}}>סמן אם ההזמנה כוללת EXPANDO</div>
                </div>
              </div>
            )}
            {activeBrand === "merivobox" && (
              <div style={{background:"#fff",border:"1.5px solid #e8e8e8",borderRadius:10,padding:"14px 16px",marginTop:12,display:"flex",alignItems:"center",gap:12,cursor:"pointer"}}
                onClick={() => setInserta(e => !e)}>
                <div style={{width:22,height:22,borderRadius:5,border:`2px solid ${inserta?"#1c1c1c":"#ccc"}`,background:inserta?"#1c1c1c":"#fff",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"all 0.15s"}}>
                  {inserta && <span style={{color:"#fff",fontSize:"0.85rem",fontWeight:700}}>✓</span>}
                </div>
                <div>
                  <div style={{fontWeight:600,fontSize:"0.92rem"}}>INSERTA</div>
                  <div style={{fontSize:"0.76rem",color:"#aaa",marginTop:2}}>סמן אם ההזמנה כוללת INSERTA</div>
                </div>
              </div>
            )}
            {cartCount > 0 && (
              <button onClick={() => setStep(4)} style={{width:"100%",marginTop:12,background:"#1c1c1c",color:"#fff",border:"none",borderRadius:9,padding:"13px",fontFamily:"inherit",fontSize:"0.95rem",fontWeight:700,cursor:"pointer"}}>
                לסיכום ({cartCount} פריטים) →
              </button>
            )}
          </div>
        )}

        {/* STEP 3 — מוצרים */}
        {step === 3 && cat && (
          <div>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:18}}>
              <button onClick={() => setStep(2)} style={{background:"none",border:"none",fontSize:"1.2rem",cursor:"pointer"}}>→</button>
              <span style={{fontSize:"1.2rem"}}>{cat.icon}</span>
              <h2 style={{fontSize:"1.05rem",fontWeight:700}}>{cat.name}</h2>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:9,marginBottom:18}}>
              {cat.products.map(p => {
                const qty = cart[p.id]||0;
                const finalPrice = getPrice(p, cat);
                return (
                  <div key={p.id} style={{background:"#fff",border:`1.5px solid ${qty>0?"#d4a017":"#e8e8e8"}`,borderRadius:11,padding:"12px 14px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                    <div style={{flex:1}}>
                      <div style={{fontWeight:600,fontSize:"0.88rem"}}>{p.name}</div>
                      <div style={{fontSize:"0.76rem",color:"#888",marginTop:2,display:"flex",gap:6,alignItems:"center"}}>
                        <span style={{fontWeight:700,color:"#1c1c1c"}}>₪{finalPrice}</span>
                        <span style={{color:"#bbb"}}>נטו / {p.unit}</span>
                      </div>
                    </div>
                    <div style={{display:"flex",alignItems:"center",gap:8,flexShrink:0}}>
                      {qty > 0 ? <>
                        <button onClick={() => setQty(p.id,-1)} style={{width:28,height:28,borderRadius:"50%",border:"1.5px solid #ddd",background:"#f5f5f0",cursor:"pointer",fontWeight:700,fontSize:"1rem"}}>−</button>
                        <span style={{minWidth:22,textAlign:"center",fontWeight:700}}>{qty}</span>
                        <button onClick={() => setQty(p.id,1)} style={{width:28,height:28,borderRadius:"50%",border:"none",background:"#d4a017",cursor:"pointer",fontWeight:700,color:"#fff",fontSize:"1rem"}}>+</button>
                      </> : (
                        <button onClick={() => setQty(p.id,1)} style={{background:"#1c1c1c",color:"#fff",border:"none",borderRadius:7,padding:"6px 12px",cursor:"pointer",fontWeight:600,fontSize:"0.8rem"}}>+ הוסף</button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <div style={{display:"flex",gap:9}}>
              <button onClick={() => setStep(2)} style={{flex:1,background:"#f5f5f0",border:"1.5px solid #ddd",borderRadius:9,padding:"11px",fontFamily:"inherit",fontSize:"0.9rem",fontWeight:600,cursor:"pointer",color:"#555"}}>← קטגוריות</button>
              {cartCount > 0 && (
                <button onClick={() => setStep(4)} style={{flex:2,background:"#1c1c1c",color:"#fff",border:"none",borderRadius:9,padding:"11px",fontFamily:"inherit",fontSize:"0.9rem",fontWeight:700,cursor:"pointer"}}>
                  לסיכום ({cartCount}) →
                </button>
              )}
            </div>
          </div>
        )}

        {/* STEP 4 — סיכום */}
        {step === 4 && (
          <div>
            <h2 style={{fontSize:"1.1rem",fontWeight:700,marginBottom:16}}>סיכום הזמנה</h2>
            {cartItems.length > 0 ? (
              <div style={{background:"#fff",border:"1px solid #e8e8e8",borderRadius:12,overflow:"hidden",marginBottom:18}}>
                {cartItems.map((p,i) => (
                  <div key={p.id} style={{display:"flex",alignItems:"center",padding:"11px 14px",borderBottom:i<cartItems.length-1?"1px solid #f0f0f0":"none"}}>
                    <div style={{flex:1}}>
                      <div style={{fontSize:"0.88rem",fontWeight:600}}>{p.name}</div>
                      <div style={{fontSize:"0.72rem",color:"#aaa"}}>{p.catName} · ₪{p.finalPrice} נטו/{p.unit}</div>
                    </div>
                    <div style={{display:"flex",alignItems:"center",gap:7,flexShrink:0}}>
                      <button onClick={() => setQty(p.id,-1)} style={{width:24,height:24,borderRadius:"50%",border:"1.5px solid #ddd",background:"#f5f5f0",cursor:"pointer",fontSize:"0.85rem"}}>−</button>
                      <span style={{minWidth:18,textAlign:"center",fontWeight:700,fontSize:"0.9rem"}}>{p.qty}</span>
                      <button onClick={() => setQty(p.id,1)} style={{width:24,height:24,borderRadius:"50%",border:"none",background:"#d4a017",cursor:"pointer",fontSize:"0.85rem",color:"#fff"}}>+</button>
                      <span style={{minWidth:58,textAlign:"left",fontWeight:700,fontSize:"0.88rem"}}>₪{(p.finalPrice*p.qty).toLocaleString("he-IL")}</span>
                    </div>
                  </div>
                ))}
                {expando && (
                  <div style={{padding:"10px 14px",borderBottom:"1px solid #f0f0f0",display:"flex",alignItems:"center",gap:8,background:"#f0f4ff"}}>
                    <span style={{fontSize:"0.85rem",fontWeight:600}}>📦 EXPANDO</span>
                    <span style={{fontSize:"0.78rem",color:"#555",marginRight:"auto"}}>כלול בהזמנה</span>
                  </div>
                )}
                {inserta && (
                  <div style={{padding:"10px 14px",borderBottom:"1px solid #f0f0f0",display:"flex",alignItems:"center",gap:8,background:"#f0f4ff"}}>
                    <span style={{fontSize:"0.85rem",fontWeight:600}}>📦 INSERTA</span>
                    <span style={{fontSize:"0.78rem",color:"#555",marginRight:"auto"}}>כלול בהזמנה</span>
                  </div>
                )}
                <div style={{background:"#f9f6ef",padding:"12px 14px",display:"flex",justifyContent:"space-between",fontWeight:700,fontSize:"1rem"}}>
                  <span>סה"כ נטו</span>
                  <span style={{color:"#d4a017"}}>₪{cartTotal.toLocaleString("he-IL")}</span>
                </div>
              </div>
            ) : (
              <div style={{background:"#fff",border:"1.5px dashed #ddd",borderRadius:12,padding:28,textAlign:"center",color:"#aaa",marginBottom:18}}>
                <div style={{fontSize:"1.8rem",marginBottom:8}}>🛒</div>
                <span onClick={() => setStep(1)} style={{color:"#d4a017",cursor:"pointer",fontWeight:600}}>חזור לבחור מוצרים</span>
              </div>
            )}
            {cartItems.some(p => p.cat && LEGRABOX_CATALOG.some(c => c.id === p.cat.id)) && (
              <div style={{background:"#fff",border:"1.5px solid #e8e8e8",borderRadius:10,padding:"14px 16px",marginBottom:12,display:"flex",alignItems:"center",gap:12,cursor:"pointer"}}
                onClick={() => setExpando(e => !e)}>
                <div style={{width:22,height:22,borderRadius:5,border:`2px solid ${expando?"#1c1c1c":"#ccc"}`,background:expando?"#1c1c1c":"#fff",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"all 0.15s"}}>
                  {expando && <span style={{color:"#fff",fontSize:"0.85rem",fontWeight:700}}>✓</span>}
                </div>
                <div>
                  <div style={{fontWeight:600,fontSize:"0.92rem"}}>EXPANDO</div>
                  <div style={{fontSize:"0.76rem",color:"#aaa",marginTop:2}}>סמן אם ההזמנה כוללת EXPANDO</div>
                </div>
              </div>
            )}
            {cartItems.some(p => p.cat && MERIVO_CATALOG.some(c => c.id === p.cat.id)) && (
              <div style={{background:"#fff",border:"1.5px solid #e8e8e8",borderRadius:10,padding:"14px 16px",marginBottom:12,display:"flex",alignItems:"center",gap:12,cursor:"pointer"}}
                onClick={() => setInserta(e => !e)}>
                <div style={{width:22,height:22,borderRadius:5,border:`2px solid ${inserta?"#1c1c1c":"#ccc"}`,background:inserta?"#1c1c1c":"#fff",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"all 0.15s"}}>
                  {inserta && <span style={{color:"#fff",fontSize:"0.85rem",fontWeight:700}}>✓</span>}
                </div>
                <div>
                  <div style={{fontWeight:600,fontSize:"0.92rem"}}>INSERTA</div>
                  <div style={{fontSize:"0.76rem",color:"#aaa",marginTop:2}}>סמן אם ההזמנה כוללת INSERTA</div>
                </div>
              </div>
            )}
            <div style={{marginBottom:16}}>
              <label style={{display:"block",fontSize:"0.76rem",fontWeight:700,color:"#aaa",marginBottom:5}}>הערות (אופציונלי)</label>
              <textarea value={notes} onChange={e => setNotes(e.target.value)} placeholder="מק״ט ספציפי, כמות מיוחדת, הוראות..."
                style={{width:"100%",border:"1.5px solid #e8e8e8",borderRadius:9,padding:"10px 12px",fontFamily:"inherit",fontSize:"0.92rem",outline:"none",resize:"vertical",minHeight:70,direction:"rtl",background:"#fafaf8"}} />
            </div>
            <div style={{display:"flex",gap:9}}>
              <button onClick={() => setStep(1)} style={{flex:1,background:"#f5f5f0",border:"1.5px solid #ddd",borderRadius:9,padding:"11px",fontFamily:"inherit",fontSize:"0.88rem",fontWeight:600,cursor:"pointer",color:"#555"}}>+ הוסף עוד</button>
              <button onClick={submit} disabled={cartItems.length===0}
                style={{flex:2,background:cartItems.length===0?"#ccc":"#25D366",color:"#fff",border:"none",borderRadius:9,padding:"12px",fontFamily:"inherit",fontSize:"0.95rem",fontWeight:700,cursor:cartItems.length===0?"default":"pointer"}}>
                שלח ב-WhatsApp ✓
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
