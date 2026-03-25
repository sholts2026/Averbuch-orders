
import { useState, useEffect } from "react";

const CATALOG = [
  {
    id: "hinges", name: "צירים", icon: "🔩",
    products: [
      { id: "h1", name: 'ציר כוס רגיל 35מ"מ', price: 12, unit: "יח'" },
      { id: "h2", name: "ציר כוס רך (soft-close)", price: 22, unit: "יח'" },
      { id: "h3", name: "ציר פרסה פינתי", price: 35, unit: "יח'" },
      { id: "h4", name: "ציר מרובע לדלתות עץ", price: 18, unit: "יח'" },
    ]
  },
  {
    id: "rails", name: "מגירות ומסילות", icon: "📦",
    products: [
      { id: "r1", name: 'מסילה טלסקופית 45ס"מ', price: 38, unit: "זוג" },
      { id: "r2", name: 'מסילה טלסקופית 55ס"מ', price: 44, unit: "זוג" },
      { id: "r3", name: 'מסילה רכה 45ס"מ', price: 68, unit: "זוג" },
      { id: "r4", name: 'מסילה רכה 55ס"מ', price: 78, unit: "זוג" },
      { id: "r5", name: 'מגירת תיל מלאה 45ס"מ', price: 145, unit: "יח'" },
    ]
  },
  {
    id: "handles", name: "ידיות ואחיזות", icon: "🖐️",
    products: [
      { id: "hn1", name: 'ידית בר אלומיניום 128מ"מ', price: 24, unit: "יח'" },
      { id: "hn2", name: 'ידית בר אלומיניום 192מ"מ', price: 28, unit: "יח'" },
      { id: "hn3", name: "ידית כפתור עגול נירוסטה", price: 19, unit: "יח'" },
      { id: "hn4", name: 'ידית שחורה מט 128מ"מ', price: 32, unit: "יח'" },
      { id: "hn5", name: "ידית J פרופיל ארוך", price: 55, unit: "יח'" },
    ]
  },
  {
    id: "lifts", name: "מנגנוני הרמה", icon: "⬆️",
    products: [
      { id: "l1", name: "זרוע הרמה חד-כנפית", price: 185, unit: "זוג" },
      { id: "l2", name: "זרוע הרמה דו-כנפית", price: 245, unit: "זוג" },
      { id: "l3", name: "מנגנון פושר (push-to-open)", price: 65, unit: "יח'" },
      { id: "l4", name: "גז ריהוט 60N", price: 42, unit: "יח'" },
    ]
  },
  {
    id: "organizers", name: "אירגוניות ומדפים", icon: "🗂️",
    products: [
      { id: "o1", name: 'קרוסלה פינתית 80ס"מ', price: 320, unit: "יח'" },
      { id: "o2", name: "מגש חילוץ לפינה", price: 420, unit: "יח'" },
      { id: "o3", name: "מעמד תבלינים נשלף", price: 155, unit: "יח'" },
      { id: "o4", name: "מוט בגדים לארון", price: 48, unit: "יח'" },
    ]
  },
  {
    id: "misc", name: "חומרים ואביזרים", icon: "🔧",
    products: [
      { id: "m1", name: 'רגל ריהוט 10ס"מ', price: 4, unit: "יח'" },
      { id: "m2", name: "בורג קידום 5x50 (50 יח')", price: 18, unit: "קופסה" },
      { id: "m3", name: "גומי עצירה שקוף", price: 3, unit: "יח'" },
      { id: "m4", name: "לוח גב מלמין 122x244", price: 210, unit: "יח'" },
    ]
  },
];

const AGENTS = [
  { id: "shani", name: "שני", phone: "972538377364" },
];

const STEPS = ["קטגוריה", "מוצרים", "סיכום"];

export default function App() {
  const [step, setStep] = useState(0);
  const [activeCat, setActiveCat] = useState(null);
  const [cart, setCart] = useState({});
  const [notes, setNotes] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [agent, setAgent] = useState(undefined);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const found = AGENTS.find(a => a.id === params.get("agent"));
    setAgent(found || null);
  }, []);

  const cartCount = Object.values(cart).reduce((s, q) => s + q, 0);
  const cartTotal = CATALOG.flatMap(c => c.products)
    .reduce((s, p) => s + (cart[p.id] || 0) * p.price, 0);
  const cartItems = CATALOG.flatMap(c =>
    c.products.filter(p => cart[p.id]).map(p => ({ ...p, qty: cart[p.id], cat: c.name }))
  );

  const setQty = (pid, delta) => {
    setCart(prev => {
      const next = Math.max(0, (prev[pid] || 0) + delta);
      if (next === 0) { const { [pid]: _, ...rest } = prev; return rest; }
      return { ...prev, [pid]: next };
    });
  };

  const validate = () => {
    const e = {};
    if (!clientName.trim()) e.name = "נדרש שם";
    if (!clientPhone.trim()) e.phone = "נדרש טלפון";
    if (cartItems.length === 0) e.cart = "יש לבחור לפחות מוצר אחד";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = () => {
    if (!validate()) return;
    const phone = agent?.phone || "972538377364";
    const lines = [
      `🔩 *הזמנה חדשה – אברבוך פרזול*`, ``,
      `👤 *לקוח:* ${clientName}`,
      `📞 *טלפון:* ${clientPhone}`,
      agent ? `🧑‍💼 *סוכן:* ${agent.name}` : ``,
      ``, `*פריטים:*`,
      ...cartItems.map(p => `• ${p.name}  ×${p.qty}  ₪${(p.price*p.qty).toLocaleString("he-IL")}`),
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
        <p style={{color:"#666",marginBottom:20}}>תודה {clientName}! {agent?.name} יצור איתך קשר בקרוב.</p>
        <div style={{background:"#f5f5f0",borderRadius:10,padding:16,textAlign:"right"}}>
          {cartItems.map(p => (
            <div key={p.id} style={{display:"flex",justifyContent:"space-between",fontSize:"0.88rem",padding:"3px 0"}}>
              <span>{p.name} ×{p.qty}</span>
              <span>₪{(p.price*p.qty).toLocaleString("he-IL")}</span>
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
        <span style={{fontWeight:700}}>🔩 אברבוך פרזול {agent && <span style={{fontSize:"0.75rem",opacity:0.7}}>· {agent.name}</span>}</span>
        {cartCount > 0 && (
          <div onClick={() => setStep(2)} style={{background:"#d4a017",color:"#1c1c1c",borderRadius:20,padding:"4px 12px",cursor:"pointer",fontWeight:700,fontSize:"0.85rem"}}>
            🛒 {cartCount} · ₪{cartTotal.toLocaleString("he-IL")}
          </div>
        )}
      </div>
      <div style={{background:"#fff",borderBottom:"1px solid #eee",display:"flex",padding:"0 16px"}}>
        {STEPS.map((s,i) => (
          <div key={s} onClick={() => i < step && setStep(i)}
            style={{flex:1,textAlign:"center",padding:"11px 0",fontSize:"0.8rem",fontWeight:step===i?700:400,
              color:step===i?"#d4a017":i<step?"#555":"#ccc",
              borderBottom:step===i?"2.5px solid #d4a017":"2.5px solid transparent",cursor:i<step?"pointer":"default"}}>
            <span style={{background:step>=i?(step===i?"#d4a017":"#555"):"#ddd",color:"#fff",borderRadius:"50%",width:18,height:18,display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:"0.7rem",fontWeight:700,marginLeft:5}}>{i+1}</span>
            {s}
          </div>
        ))}
      </div>
      <div style={{maxWidth:620,margin:"0 auto",padding:"20px 14px 80px"}}>
        {step === 0 && (
          <div>
            <h2 style={{fontSize:"1.1rem",fontWeight:700,marginBottom:16}}>בחר קטגוריה</h2>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
              {CATALOG.map(c => (
                <div key={c.id} onClick={() => { setActiveCat(c.id); setStep(1); }}
                  style={{background:"#fff",border:`1.5px solid ${c.products.some(p=>cart[p.id])?"#d4a017":"#e8e8e8"}`,borderRadius:12,padding:"18px 14px",cursor:"pointer",textAlign:"center"}}>
                  <div style={{fontSize:"1.8rem",marginBottom:6}}>{c.icon}</div>
                  <div style={{fontWeight:600,fontSize:"0.92rem"}}>{c.name}</div>
                  <div style={{fontSize:"0.72rem",color:"#aaa",marginTop:3}}>{c.products.length} מוצרים</div>
                  {c.products.some(p=>cart[p.id]) && (
                    <div style={{marginTop:6,background:"#fff8e1",color:"#d4a017",borderRadius:20,padding:"2px 8px",fontSize:"0.7rem",fontWeight:700,display:"inline-block"}}>
                      {c.products.filter(p=>cart[p.id]).length} נבחרו ✓
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        {step === 1 && cat && (
          <div>
            <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:18}}>
              <button onClick={() => setStep(0)} style={{background:"none",border:"none",fontSize:"1.2rem",cursor:"pointer"}}>→</button>
              <span style={{fontSize:"1.2rem"}}>{cat.icon}</span>
              <h2 style={{fontSize:"1.05rem",fontWeight:700}}>{cat.name}</h2>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:9,marginBottom:18}}>
              {cat.products.map(p => {
                const qty = cart[p.id]||0;
                return (
                  <div key={p.id} style={{background:"#fff",border:`1.5px solid ${qty>0?"#d4a017":"#e8e8e8"}`,borderRadius:11,padding:"12px 14px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                    <div>
                      <div style={{fontWeight:600,fontSize:"0.9rem"}}>{p.name}</div>
                      <div style={{fontSize:"0.78rem",color:"#888",marginTop:2}}>₪{p.price} / {p.unit}</div>
                    </div>
                    <div style={{display:"flex",alignItems:"center",gap:8}}>
                      {qty > 0 ? <>
                        <button onClick={() => setQty(p.id,-1)} style={{width:28,height:28,borderRadius:"50%",border:"1.5px solid #ddd",background:"#f5f5f0",cursor:"pointer",fontWeight:700}}>−</button>
                        <span style={{minWidth:22,textAlign:"center",fontWeight:700}}>{qty}</span>
                        <button onClick={() => setQty(p.id,1)} style={{width:28,height:28,borderRadius:"50%",border:"none",background:"#d4a017",cursor:"pointer",fontWeight:700,color:"#fff"}}>+</button>
                      </> : (
                        <button onClick={() => setQty(p.id,1)} style={{background:"#1c1c1c",color:"#fff",border:"none",borderRadius:7,padding:"6px 14px",cursor:"pointer",fontWeight:600,fontSize:"0.83rem"}}>+ הוסף</button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <div style={{display:"flex",gap:9}}>
              <button onClick={() => setStep(0)} style={{flex:1,background:"#f5f5f0",border:"1.5px solid #ddd",borderRadius:9,padding:"11px",fontFamily:"inherit",fontSize:"0.9rem",fontWeight:600,cursor:"pointer",color:"#555"}}>← קטגוריות</button>
              {cartCount > 0 && (
                <button onClick={() => setStep(2)} style={{flex:2,background:"#1c1c1c",color:"#fff",border:"none",borderRadius:9,padding:"11px",fontFamily:"inherit",fontSize:"0.9rem",fontWeight:700,cursor:"pointer"}}>
                  לסיכום ({cartCount}) →
                </button>
              )}
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            <h2 style={{fontSize:"1.1rem",fontWeight:700,marginBottom:16}}>סיכום הזמנה</h2>
            {errors.cart && <div style={{background:"#ffebee",color:"#b71c1c",borderRadius:8,padding:"10px 13px",marginBottom:12,fontSize:"0.85rem"}}>{errors.cart}</div>}
            {cartItems.length > 0 ? (
              <div style={{background:"#fff",border:"1px solid #e8e8e8",borderRadius:12,overflow:"hidden",marginBottom:18}}>
                {cartItems.map((p,i) => (
                  <div key={p.id} style={{display:"flex",alignItems:"center",padding:"11px 14px",borderBottom:i<cartItems.length-1?"1px solid #f0f0f0":"none"}}>
                    <div style={{flex:1}}>
                      <div style={{fontSize:"0.9rem",fontWeight:600}}>{p.name}</div>
                      <div style={{fontSize:"0.74rem",color:"#aaa"}}>{p.cat} · ₪{p.price}/{p.unit}</div>
                    </div>
                    <div style={{display:"flex",alignItems:"center",gap:7}}>
                      <button onClick={() => setQty(p.id,-1)} style={{width:24,height:24,borderRadius:"50%",border:"1.5px solid #ddd",background:"#f5f5f0",cursor:"pointer",fontSize:"0.85rem"}}>−</button>
                      <span style={{minWidth:18,textAlign:"center",fontWeight:700,fontSize:"0.9rem"}}>{p.qty}</span>
                      <button onClick={() => setQty(p.id,1)} style={{width:24,height:24,borderRadius:"50%",border:"none",background:"#d4a017",cursor:"pointer",fontSize:"0.85rem",color:"#fff"}}>+</button>
                      <span style={{minWidth:58,textAlign:"left",fontWeight:700,fontSize:"0.88rem"}}>₪{(p.price*p.qty).toLocaleString("he-IL")}</span>
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
                <span onClick={() => setStep(0)} style={{color:"#d4a017",cursor:"pointer",fontWeight:600}}>חזור לבחור מוצרים</span>
              </div>
            )}
            <div style={{marginBottom:16}}>
              <label style={{display:"block",fontSize:"0.76rem",fontWeight:700,color:"#aaa",marginBottom:5}}>הערות (אופציונלי)</label>
              <textarea value={notes} onChange={e => setNotes(e.target.value)} placeholder="צבע, גודל מיוחד..."
                style={{width:"100%",border:"1.5px solid #e8e8e8",borderRadius:9,padding:"10px 12px",fontFamily:"inherit",fontSize:"0.92rem",outline:"none",resize:"vertical",minHeight:70,direction:"rtl",background:"#fafaf8"}} />
            </div>
            <div style={{background:"#fff",border:"1px solid #e8e8e8",borderRadius:12,padding:16,marginBottom:18}}>
              <div style={{fontSize:"0.85rem",fontWeight:700,color:"#555",marginBottom:12}}>פרטי יצירת קשר</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
                <div>
                  <label style={{display:"block",fontSize:"0.74rem",color:"#aaa",fontWeight:600,marginBottom:4}}>שם מלא *</label>
                  <input value={clientName} onChange={e => setClientName(e.target.value)} placeholder="ישראל ישראלי"
                    style={{width:"100%",border:`1.5px solid ${errors.name?"#e53935":"#e8e8e8"}`,borderRadius:7,padding:"8px 10px",fontFamily:"inherit",fontSize:"0.9rem",outline:"none",direction:"rtl"}} />
                  {errors.name && <span style={{color:"#e53935",fontSize:"0.72rem"}}>{errors.name}</span>}
                </div>
                <div>
                  <label style={{display:"block",fontSize:"0.74rem",color:"#aaa",fontWeight:600,marginBottom:4}}>טלפון *</label>
                  <input value={clientPhone} onChange={e => setClientPhone(e.target.value)} placeholder="050-0000000" type="tel"
                    style={{width:"100%",border:`1.5px solid ${errors.phone?"#e53935":"#e8e8e8"}`,borderRadius:7,padding:"8px 10px",fontFamily:"inherit",fontSize:"0.9rem",outline:"none",direction:"rtl"}} />
                  {errors.phone && <span style={{color:"#e53935",fontSize:"0.72rem"}}>{errors.phone}</span>}
                </div>
              </div>
            </div>
            <div style={{display:"flex",gap:9}}>
              <button onClick={() => setStep(0)} style={{flex:1,background:"#f5f5f0",border:"1.5px solid #ddd",borderRadius:9,padding:"11px",fontFamily:"inherit",fontSize:"0.88rem",fontWeight:600,cursor:"pointer",color:"#555"}}>+ הוסף עוד</button>
              <button onClick={submit} style={{flex:2,background:"#25D366",color:"#fff",border:"none",borderRadius:9,padding:"12px",fontFamily:"inherit",fontSize:"0.95rem",fontWeight:700,cursor:"pointer"}}>
                שלח ב-WhatsApp ✓
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
