import { useState, useEffect } from "react";

const SHEET_CSV = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTUMzCB6SQxSxoaB_yWphf4M7frk78IHxjAJJZixVrVziUxS8qEQcwjLeCcI1Rw7WUnMqoy9snxyWa0/pub?gid=0&single=true&output=csv";

const CATALOG = [
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
    id: "accessories", name: "אביזרים וחזיתות", icon: "🔩",
    products: [
      { id: "ZV7.1043C01-OGM", name: "פרופיל לחזית גרפיט LEGRABOX", price: 124, unit: "יח'" },
      { id: "Zi7.0Ks0-OGM", name: "זוג מתאם לחזית K גרפיט LEGRABOX", price: 126, unit: "יח'" },
      { id: "ZV7.1043C01-SW-M", name: "פרופיל לחזית לבן LEGRABOX", price: 124, unit: "יח'" },
      { id: "Zi7.0Ks0-SW-M", name: "מתאם לחזית K לבן LEGRABOX", price: 126, unit: "יח'" },
      { id: "Zi7.0Ms0-OGM", name: "זוג מתאמים לחזית M גרפיט LEGRABOX", price: 110, unit: "יח'" },
      { id: "Zi7.0Ms0-SW-M", name: "מתאם לחזית M לבן LEGRABOX", price: 110, unit: "יח'" },
      { id: "ZV7.1043MNI-OGM", name: "פרופיל לחזית זכוכית גרפיט LEGRABOX", price: 120, unit: "יח'" },
      { id: "Zi7.2Cs0-OGM", name: "זוג מתאם לחזית זכוכית C גרפיט", price: 165, unit: "יח'" },
      { id: "ZV7.1043MNI-SW-M", name: "פרופיל לחזית זכוכית לבן LEGRABOX", price: 120, unit: "יח'" },
      { id: "Zi7.2Cs0-SW-M", name: "מתאם לחזית זכוכית C לבן LEGRABOX", price: 165, unit: "יח'" },
      { id: "ZE7W1100G", name: "חזית זכוכית LEGRABOX 1100×138×10mm", price: 73, unit: "יח'" },
      { id: "Zi7.3Cs0-OGM", name: "מתאם לחזית גלריה C גרפיט LEGRABOX", price: 165, unit: "יח'" },
      { id: "ZR7.1080U-OGM", name: "מוט מקשר גרפיט LEGRABOX", price: 47, unit: "יח'" },
      { id: "Zi7.3Cs0-SW-M", name: "מתאם לחזית גלריה C לבן LEGRABOX", price: 165, unit: "יח'" },
      { id: "ZR7.1080U-SW-M", name: "מוט מקשר לבן LEGRABOX", price: 47, unit: "יח'" },
    ]
  },
];

const AGENTS = [
  { id: "shani", name: "שני", phone: "972538377364" },
];

const STEPS = ["התחברות", "קטגוריה", "מוצרים", "סיכום"];

function applyDiscount(price, discount) {
  return Math.round(price * (1 - discount / 100));
}

function parseCSV(text) {
  const lines = text.trim().split("\n").slice(1);
  return lines.map(line => {
    const [phone, name, discount] = line.split(",").map(s => s.trim().replace(/"/g, ""));
    return { phone, name, discount: parseFloat(discount) || 0 };
  });
}

export default function App() {
  const [step, setStep] = useState(0);
  const [activeCat, setActiveCat] = useState(null);
  const [cart, setCart] = useState({});
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [agent, setAgent] = useState(null);
  const [customer, setCustomer] = useState(null);
  const [phoneInput, setPhoneInput] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const found = AGENTS.find(a => a.id === params.get("agent"));
    setAgent(found || null);
    fetch(SHEET_CSV)
      .then(r => r.text())
      .then(text => setCustomers(parseCSV(text)))
      .catch(() => {});
  }, []);

  const login = () => {
    setLoading(true);
    setLoginError("");
    const clean = phoneInput.replace(/[-\s]/g, "");
    const found = customers.find(c => c.phone.replace(/[-\s]/g, "") === clean);
    setTimeout(() => {
      setLoading(false);
      if (found) {
        setCustomer(found);
        setStep(1);
      } else {
        setLoginError("מספר הטלפון לא נמצא במערכת. פנה לסוכן שלך.");
      }
    }, 800);
  };

  const discount = customer?.discount || 0;
  const getPrice = (price) => applyDiscount(price, discount);

  const cartCount = Object.values(cart).reduce((s, q) => s + q, 0);
  const cartTotal = CATALOG.flatMap(c => c.products)
    .reduce((s, p) => s + (cart[p.id] || 0) * getPrice(p.price), 0);
  const cartItems = CATALOG.flatMap(c =>
    c.products.filter(p => cart[p.id]).map(p => ({ ...p, qty: cart[p.id], cat: c.name, finalPrice: getPrice(p.price) }))
  );

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
      `👤 *לקוח:* ${customer?.name || phoneInput}`,
      `📞 *טלפון:* ${phoneInput}`,
      discount > 0 ? `💸 *הנחה:* ${discount}%` : ``,
      agent ? `🧑‍💼 *סוכן:* ${agent.name}` : ``,
      ``, `*פריטים:*`,
      ...cartItems.map(p => `• ${p.name}  ×${p.qty}  ₪${(p.finalPrice * p.qty).toLocaleString("he-IL")}`),
      ``, `💰 *סה"כ: ₪${cartTotal.toLocaleString("he-IL")}*`,
      notes ? `📝 *הערות:* ${notes}` : ``,
    ].filter(Boolean);
    setSubmitted(true);
    setTimeout(() => window.open(`https://wa.me/${phone}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank"), 500);
  };

  const cat = CATALOG.find(c => c.id === activeCat);

  if (submitted) return (
    <div style={{fontFamily:"sans-serif",direction:"rtl",background:"#f5f5f0",minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:20}}>
      <div style={{background:"#fff",borderRadius:16,padding:"40px 28px",maxWidth:400,width:"100%",textAlign:"center",boxShadow:"0 4px 24px rgba(0,0,0,0.1)"}}>
        <div style={{fontSize:"3rem",marginBottom:12}}>✅</div>
        <h2 style={{marginBottom:8}}>ההזמנה נשלחה!</h2>
        <p style={{color:"#666",marginBottom:20}}>תודה {customer?.name}! נחזור אליך בקרוב.</p>
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
        <span style={{fontWeight:700}}>🔩 אברבוך פרזול {customer && <span style={{fontSize:"0.75rem",opacity:0.7}}>· {customer.name}</span>}</span>
        {cartCount > 0 && step > 1 && (
          <div onClick={() => setStep(3)} style={{background:"#d4a017",color:"#1c1c1c",borderRadius:20,padding:"4px 12px",cursor:"pointer",fontWeight:700,fontSize:"0.85rem"}}>
            🛒 {cartCount} · ₪{cartTotal.toLocaleString("he-IL")}
          </div>
        )}
      </div>

      {step > 0 && (
        <div style={{background:"#fff",borderBottom:"1px solid #eee",display:"flex",padding:"0 16px"}}>
          {["קטגוריה","מוצרים","סיכום"].map((s,i) => (
            <div key={s} onClick={() => i+1 < step && setStep(i+1)}
              style={{flex:1,textAlign:"center",padding:"11px 0",fontSize:"0.8rem",fontWeight:step===i+1?700:400,
                color:step===i+1?"#d4a017":i+1<step?"#555":"#ccc",
                borderBottom:step===i+1?"2.5px solid #d4a017":"2.5px solid transparent",cursor:i+1<step?"pointer":"default"}}>
              <span style={{background:step>=i+1?(step===i+1?"#d4a017":"#555"):"#ddd",color:"#fff",borderRadius:"50%",width:18,height:18,display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:"0.7rem",fontWeight:700,marginLeft:5}}>{i+1}</span>
              {s}
            </div>
          ))}
        </div>
      )}

      <div style={{maxWidth:620,margin:"0 auto",padding:"20px 14px 80px"}}>

        {step === 0 && (
          <div style={{maxWidth:380,margin:"40px auto"}}>
            <div style={{textAlign:"center",marginBottom:28}}>
              <div style={{fontSize:"2.5rem",marginBottom:8}}>🔩</div>
              <h2 style={{fontSize:"1.3rem",fontWeight:700,marginBottom:6}}>אברבוך פרזול</h2>
              <p style={{color:"#888",fontSize:"0.9rem"}}>הכנס את מספר הטלפון שלך כדי להתחבר</p>
            </div>
            <div style={{background:"#fff",borderRadius:12,padding:24,boxShadow:"0 2px 12px rgba(0,0,0,0.08)"}}>
              <label style={{display:"block",fontSize:"0.82rem",fontWeight:700,color:"#aaa",marginBottom:6}}>מספר טלפון</label>
              <input value={phoneInput} onChange={e => setPhoneInput(e.target.value)}
                onKeyDown={e => e.key==="Enter" && login()}
                placeholder="050-0000000" type="tel"
                style={{width:"100%",border:"1.5px solid #e8e8e8",borderRadius:8,padding:"11px 13px",fontFamily:"inherit",fontSize:"1rem",outline:"none",direction:"rtl",marginBottom:12,boxSizing:"border-box"}} />
              {loginError && <div style={{color:"#e53935",fontSize:"0.82rem",marginBottom:10}}>{loginError}</div>}
              <button onClick={login} disabled={loading||!phoneInput}
                style={{width:"100%",background:loading||!phoneInput?"#ccc":"#1c1c1c",color:"#fff",border:"none",borderRadius:8,padding:"12px",fontFamily:"inherit",fontSize:"1rem",fontWeight:700,cursor:loading||!phoneInput?"default":"pointer"}}>
                {loading ? "מחפש..." : "כניסה →"}
              </button>
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            {discount > 0 && (
              <div style={{background:"#fff8e1",border:"1px solid #d4a017",borderRadius:10,padding:"10px 14px",marginBottom:16,fontSize:"0.88rem",color:"#b8860b",fontWeight:600}}>
                🎉 ההנחה שלך: {discount}% — המחירים מוצגים כבר אחרי הנחה!
              </div>
            )}
            <h2 style={{fontSize:"1.1rem",fontWeight:700,marginBottom:16}}>בחר קטגוריה</h2>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
              {CATALOG.map(c => (
                <div key={c.id} onClick={() => { setActiveCat(c.id); setStep(2); }}
                  style={{background:"#fff",border:`1.5px solid ${c.products.some(p=>cart[p.id])?"#d4a017":"#e8e8e8"}`,borderRadius:12,padding:"16px 12px",cursor:"pointer",textAlign:"center"}}>
                  <div style={{fontSize:"1.6rem",marginBottom:5}}>{c.icon}</div>
                  <div style={{fontWeight:600,fontSize:"0.85rem",lineHeight:1.3}}>{c.name}</div>
                  <div style={{fontSize:"0.7rem",color:"#aaa",marginTop:3}}>{c.products.length} מוצרים</div>
                  {c.products.some(p=>cart[p.id]) && (
                    <div style={{marginTop:5,background:"#fff8e1",color:"#d4a017",borderRadius:20,padding:"2px 8px",fontSize:"0.68rem",fontWeight:700,display:"inline-block"}}>
                      {c.products.filter(p=>cart[p.id]).length} נבחרו ✓
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 2 && cat && (
          <div>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:18}}>
              <button onClick={() => setStep(1)} style={{background:"none",border:"none",fontSize:"1.2rem",cursor:"pointer"}}>→</button>
              <span style={{fontSize:"1.2rem"}}>{cat.icon}</span>
              <h2 style={{fontSize:"1.05rem",fontWeight:700}}>{cat.name}</h2>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:9,marginBottom:18}}>
              {cat.products.map(p => {
                const qty = cart[p.id]||0;
                const finalPrice = getPrice(p.price);
                return (
                  <div key={p.id} style={{background:"#fff",border:`1.5px solid ${qty>0?"#d4a017":"#e8e8e8"}`,borderRadius:11,padding:"12px 14px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                    <div style={{flex:1}}>
                      <div style={{fontWeight:600,fontSize:"0.88rem"}}>{p.name}</div>
                      <div style={{fontSize:"0.76rem",color:"#888",marginTop:2,display:"flex",gap:8,alignItems:"center"}}>
                        <span style={{fontWeight:700,color:"#1c1c1c"}}>₪{finalPrice}</span>
                        {discount > 0 && <span style={{color:"#bbb",textDecoration:"line-through"}}>₪{p.price}</span>}
                        <span style={{color:"#aaa"}}>/ {p.unit}</span>
                      </div>
                    </div>
                    <div style={{display:"flex",alignItems:"center",gap:8,flexShrink:0}}>
                      {qty > 0 ? <>
                        <button onClick={() => setQty(p.id,-1)} style={{width:28,height:28,borderRadius:"50%",border:"1.5px solid #ddd",background:"#f5f5f0",cursor:"pointer",fontWeight:700,fontSize:"1rem"}}>−</button>
                        <span style={{minWidth:22,textAlign:"center",fontWeight:700}}>{qty}</span>
                        <button onClick={() => setQty(p.id,1)} style={{width:28,height:28,borderRadius:"50%",border:"none",background:"#d4a017",cursor:"pointer",fontWeight:700,color:"#fff",fontSize:"1rem"}}>+</button>
                      </> : (
                        <button onClick={() => setQty(p.id,1)} style={{background:"#1c1c1c",color:"#fff",border:"none",borderRadius:7,padding:"6px 12px",cursor:"pointer",fontWeight:600,fontSize:"0.8rem",whiteSpace:"nowrap"}}>+ הוסף</button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <div style={{display:"flex",gap:9}}>
              <button onClick={() => setStep(1)} style={{flex:1,background:"#f5f5f0",border:"1.5px solid #ddd",borderRadius:9,padding:"11px",fontFamily:"inherit",fontSize:"0.9rem",fontWeight:600,cursor:"pointer",color:"#555"}}>← קטגוריות</button>
              {cartCount > 0 && (
                <button onClick={() => setStep(3)} style={{flex:2,background:"#1c1c1c",color:"#fff",border:"none",borderRadius:9,padding:"11px",fontFamily:"inherit",fontSize:"0.9rem",fontWeight:700,cursor:"pointer"}}>
                  לסיכום ({cartCount}) →
                </button>
              )}
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 style={{fontSize:"1.1rem",fontWeight:700,marginBottom:16}}>סיכום הזמנה</h2>
            {cartItems.length > 0 ? (
              <div style={{background:"#fff",border:"1px solid #e8e8e8",borderRadius:12,overflow:"hidden",marginBottom:18}}>
                {cartItems.map((p,i) => (
                  <div key={p.id} style={{display:"flex",alignItems:"center",padding:"11px 14px",borderBottom:i<cartItems.length-1?"1px solid #f0f0f0":"none"}}>
                    <div style={{flex:1}}>
                      <div style={{fontSize:"0.88rem",fontWeight:600}}>{p.name}</div>
                      <div style={{fontSize:"0.72rem",color:"#aaa"}}>{p.cat} · ₪{p.finalPrice}/{p.unit}</div>
                    </div>
                    <div style={{display:"flex",alignItems:"center",gap:7,flexShrink:0}}>
                      <button onClick={() => setQty(p.id,-1)} style={{width:24,height:24,borderRadius:"50%",border:"1.5px solid #ddd",background:"#f5f5f0",cursor:"pointer",fontSize:"0.85rem"}}>−</button>
                      <span style={{minWidth:18,textAlign:"center",fontWeight:700,fontSize:"0.9rem"}}>{p.qty}</span>
                      <button onClick={() => setQty(p.id,1)} style={{width:24,height:24,borderRadius:"50%",border:"none",background:"#d4a017",cursor:"pointer",fontSize:"0.85rem",color:"#fff"}}>+</button>
                      <span style={{minWidth:58,textAlign:"left",fontWeight:700,fontSize:"0.88rem"}}>₪{(p.finalPrice*p.qty).toLocaleString("he-IL")}</span>
                    </div>
                  </div>
                ))}
                <div style={{background:"#f9f6ef",padding:"12px 14px",display:"flex",justifyContent:"space-between",fontWeight:700,fontSize:"1rem"}}>
                  <span>סה"כ</span>
                  <span style={{color:"#d4a017"}}>₪{cartTotal.toLocaleString("he-IL")}</span>
                </div>
              </div>
            ) : (
              <div style={{background:"#fff",border:"1.5px dashed #ddd",borderRadius:12,padding:28,textAlign:"center",color:"#aaa",marginBottom:18}}>
                <div style={{fontSize:"1.8rem",marginBottom:8}}>🛒</div>
                <span onClick={() => setStep(1)} style={{color:"#d4a017",cursor:"pointer",fontWeight:600}}>חזור לבחור מוצרים</span>
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
