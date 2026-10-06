const WHATSAPP_NUMBER = ""; // Ej.: 5492966XXXXXXXX. Dejar vacío para modo demo.

const PRODUCTS = [
  { id: 1, category: "panchos", icon: "🌭", name: { es: "Pancho Clásico", en: "Classic Hot Dog" }, desc: { es: "Salchicha, aderezo y papas pay. Simple y rendidor.", en: "Sausage, sauce and crispy potato sticks. Simple and satisfying." }, price: 6500 },
  { id: 2, category: "panchos", icon: "🌭", name: { es: "Superpancho Completo", en: "Loaded Super Hot Dog" }, desc: { es: "Cheddar, cebolla crispy y salsa de la casa.", en: "Cheddar, crispy onion and house sauce." }, price: 8500 },
  { id: 3, category: "panchos", icon: "🌶️", name: { es: "Pancho Picante", en: "Spicy Hot Dog" }, desc: { es: "Cheddar, jalapeños y salsa picante.", en: "Cheddar, jalapeños and spicy sauce." }, price: 8900 },
  { id: 4, category: "combos", icon: "🍟", name: { es: "Combo Clásico", en: "Classic Combo" }, desc: { es: "Pancho clásico + papas + bebida.", en: "Classic hot dog + fries + drink." }, price: 11500 },
  { id: 5, category: "combos", icon: "🥤", name: { es: "Combo Completo", en: "Loaded Combo" }, desc: { es: "Superpancho completo + papas + bebida.", en: "Loaded super hot dog + fries + drink." }, price: 13500 },
  { id: 6, category: "papas", icon: "🍟", name: { es: "Papas con Cheddar", en: "Cheddar Fries" }, desc: { es: "Papas crocantes con cheddar. Para compartir o no.", en: "Crispy fries with cheddar. Share them—or don't." }, price: 6500 },
  { id: 7, category: "bebidas", icon: "🥤", name: { es: "Gaseosa", en: "Soft Drink" }, desc: { es: "Bebida fría individual.", en: "Individual cold soft drink." }, price: 3000 },
  { id: 8, category: "bebidas", icon: "💧", name: { es: "Agua", en: "Water" }, desc: { es: "Agua mineral fría.", en: "Cold mineral water." }, price: 2500 },
];

const I18N = {
  es: {
    navMenu:"Menú", navLocation:"Ubicación", cart:"Pedido", kicker:"PANCHOS BIEN CARGADOS · EL CALAFATE",
    heroTitle:'Comida rápida,<br><span>sin vueltas.</span>', heroText:"Elegí, armá tu pedido y mandalo por WhatsApp en menos de un minuto.",
    viewMenu:"Ver menú", howToGet:"Cómo llegar", pickup:"🥡 Retiro en local", whatsappOrders:"💬 Pedidos por WhatsApp", sticker:"¡ARMALO<br>A TU GUSTO!",
    demoLabel:"DEMO COMERCIAL", demoText:"Los productos y precios son de muestra. Se reemplazan por el menú real antes de publicar.",
    choose:"ELEGÍ TU FAVORITO", menuTitle:"Menú", menuIntro:"Sumá productos al pedido y enviá todo junto por WhatsApp.",
    all:"Todo", panchos:"Panchos", combos:"Combos", papas:"Papas", bebidas:"Bebidas", add:"Agregar al pedido",
    easy:"FÁCIL Y RÁPIDO", howTitle:"Tu pedido en 3 pasos", step1Title:"Elegí", step1Text:"Agregá panchos, combos, papas y bebidas.", step2Title:"Revisá", step2Text:"Confirmá cantidades, retiro y observaciones.", step3Title:"Mandalo", step3Text:"WhatsApp se abre con el pedido completo listo para enviar.",
    findUs:"ENCONTRANOS", openMaps:"Abrir en Maps", footerText:"Demo de tienda móvil · Menú + carrito + WhatsApp + ES/EN",
    yourOrder:"TU PEDIDO", cartTitle:"Carrito", emptyTitle:"Tu carrito está vacío", emptyText:"Agregá algo rico del menú.", pickupShort:"Retiro", name:"Nombre", address:"Dirección / alojamiento", notes:"Observaciones", total:"Total", sendWhatsApp:"Enviar pedido por WhatsApp", whatsappDemo:"En esta demo, el número de WhatsApp queda pendiente de configurar.",
    dialogTitle:"Pedido listo", dialogText:"En la versión final este botón abre WhatsApp con el pedido completo. Para la demo, podés copiar el mensaje:", copy:"Copiar pedido", copied:"¡Copiado!",
    orderHeader:"Hola La Panchería 👋 Quiero hacer este pedido:", method:"Modalidad", customer:"Nombre", addressMsg:"Dirección / alojamiento", notesMsg:"Observaciones", totalMsg:"TOTAL"
  },
  en: {
    navMenu:"Menu", navLocation:"Location", cart:"Order", kicker:"LOADED HOT DOGS · EL CALAFATE",
    heroTitle:'Fast food,<br><span>no fuss.</span>', heroText:"Choose, build your order and send it on WhatsApp in under a minute.",
    viewMenu:"View menu", howToGet:"Get directions", pickup:"🥡 Pickup", whatsappOrders:"💬 WhatsApp orders", sticker:"BUILD IT<br>YOUR WAY!",
    demoLabel:"COMMERCIAL DEMO", demoText:"Products and prices are placeholders. They are replaced with the real menu before launch.",
    choose:"PICK YOUR FAVORITE", menuTitle:"Menu", menuIntro:"Add products to your order and send everything together on WhatsApp.",
    all:"All", panchos:"Hot dogs", combos:"Combos", papas:"Fries", bebidas:"Drinks", add:"Add to order",
    easy:"QUICK & EASY", howTitle:"Your order in 3 steps", step1Title:"Choose", step1Text:"Add hot dogs, combos, fries and drinks.", step2Title:"Review", step2Text:"Confirm quantities, pickup/delivery and notes.", step3Title:"Send", step3Text:"WhatsApp opens with the full order ready to send.",
    findUs:"FIND US", openMaps:"Open Maps", footerText:"Mobile shop demo · Menu + cart + WhatsApp + ES/EN",
    yourOrder:"YOUR ORDER", cartTitle:"Cart", emptyTitle:"Your cart is empty", emptyText:"Add something tasty from the menu.", pickupShort:"Pickup", name:"Name", address:"Address / accommodation", notes:"Notes", total:"Total", sendWhatsApp:"Send order on WhatsApp", whatsappDemo:"In this demo, the WhatsApp number is pending configuration.",
    dialogTitle:"Order ready", dialogText:"In the final version this button opens WhatsApp with the full order. For this demo, you can copy the message:", copy:"Copy order", copied:"Copied!",
    orderHeader:"Hi La Panchería 👋 I'd like to order:", method:"Method", customer:"Name", addressMsg:"Address / accommodation", notesMsg:"Notes", totalMsg:"TOTAL"
  }
};

let lang = localStorage.getItem("lp-lang") || "es";
let activeFilter = "all";
let cart = JSON.parse(localStorage.getItem("lp-cart") || "{}");

const $ = (s) => document.querySelector(s);
const money = (n) => new Intl.NumberFormat("es-AR", { style:"currency", currency:"ARS", maximumFractionDigits:0 }).format(n);

function t(key){ return I18N[lang][key] ?? key; }

function applyLanguage(){
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (I18N[lang][key]) el.innerHTML = I18N[lang][key];
  });
  $("#langBtn").textContent = lang === "es" ? "EN" : "ES";
  renderFilters();
  renderProducts();
  renderCart();
}

function renderFilters(){
  const cats = ["all","panchos","combos","papas","bebidas"];
  $("#filters").innerHTML = cats.map(c => `<button class="filter-btn ${activeFilter===c?'active':''}" data-filter="${c}">${t(c)}</button>`).join("");
  document.querySelectorAll(".filter-btn").forEach(btn => btn.addEventListener("click", () => {
    activeFilter = btn.dataset.filter;
    renderFilters(); renderProducts();
  }));
}

function renderProducts(){
  const items = PRODUCTS.filter(p => activeFilter === "all" || p.category === activeFilter);
  $("#productGrid").innerHTML = items.map(p => `
    <article class="product-card">
      <div class="product-visual" aria-hidden="true">${p.icon}</div>
      <div class="product-body">
        <div class="product-top"><h3>${p.name[lang]}</h3><span class="price">${money(p.price)}</span></div>
        <p>${p.desc[lang]}</p>
        <button class="add-btn" data-add="${p.id}">+ ${t("add")}</button>
      </div>
    </article>`).join("");
  document.querySelectorAll("[data-add]").forEach(btn => btn.addEventListener("click", () => addToCart(Number(btn.dataset.add))));
}

function addToCart(id){
  cart[id] = (cart[id] || 0) + 1;
  saveCart(); renderCart(); openCart();
}
function saveCart(){ localStorage.setItem("lp-cart", JSON.stringify(cart)); }
function setQty(id, qty){
  if(qty <= 0) delete cart[id]; else cart[id] = qty;
  saveCart(); renderCart();
}
function cartEntries(){
  return Object.entries(cart).map(([id,qty]) => ({ p:PRODUCTS.find(x=>x.id===Number(id)), qty })).filter(x=>x.p);
}
function renderCart(){
  const entries = cartEntries();
  const count = entries.reduce((s,x)=>s+x.qty,0);
  const total = entries.reduce((s,x)=>s+x.qty*x.p.price,0);
  $("#cartCount").textContent = count;
  $("#cartTotal").textContent = money(total);
  $("#cartEmpty").style.display = entries.length ? "none" : "grid";
  $("#cartItems").innerHTML = entries.map(({p,qty}) => `
    <div class="cart-row">
      <div><h4>${p.name[lang]}</h4><small>${money(p.price)} c/u</small>
        <div class="qty-controls"><button data-dec="${p.id}">−</button><strong>${qty}</strong><button data-inc="${p.id}">+</button></div>
      </div>
      <div style="text-align:right"><strong>${money(p.price*qty)}</strong><br><button class="remove-btn" data-remove="${p.id}">×</button></div>
    </div>`).join("");
  document.querySelectorAll("[data-dec]").forEach(b=>b.onclick=()=>setQty(Number(b.dataset.dec),cart[b.dataset.dec]-1));
  document.querySelectorAll("[data-inc]").forEach(b=>b.onclick=()=>setQty(Number(b.dataset.inc),cart[b.dataset.inc]+1));
  document.querySelectorAll("[data-remove]").forEach(b=>b.onclick=()=>setQty(Number(b.dataset.remove),0));
  $("#whatsappBtn").disabled = !entries.length;
}

function openCart(){
  $("#cartDrawer").classList.add("open");
  $("#cartDrawer").setAttribute("aria-hidden","false");
  $("#overlay").hidden = false;
}
function closeCart(){
  $("#cartDrawer").classList.remove("open");
  $("#cartDrawer").setAttribute("aria-hidden","true");
  $("#overlay").hidden = true;
}

function buildOrderMessage(){
  const entries = cartEntries();
  const total = entries.reduce((s,x)=>s+x.qty*x.p.price,0);
  const method = document.querySelector('input[name="delivery"]:checked').value;
  const name = $("#customerName").value.trim();
  const address = $("#customerAddress").value.trim();
  const notes = $("#customerNotes").value.trim();
  const lines = [t("orderHeader"),""];
  entries.forEach(({p,qty}) => lines.push(`• ${qty} × ${p.name[lang]} — ${money(p.price*qty)}`));
  lines.push("",`${t("totalMsg")}: ${money(total)}`,`${t("method")}: ${method}`);
  if(name) lines.push(`${t("customer")}: ${name}`);
  if(method === "Delivery" && address) lines.push(`${t("addressMsg")}: ${address}`);
  if(notes) lines.push(`${t("notesMsg")}: ${notes}`);
  return lines.join("\n");
}

$("#langBtn").addEventListener("click",()=>{ lang = lang === "es" ? "en" : "es"; localStorage.setItem("lp-lang",lang); applyLanguage(); });
$("#cartBtn").addEventListener("click",openCart);
$("#closeCart").addEventListener("click",closeCart);
$("#overlay").addEventListener("click",closeCart);
document.querySelectorAll('input[name="delivery"]').forEach(r=>r.addEventListener("change",()=>{
  const isDelivery = document.querySelector('input[name="delivery"]:checked').value === "Delivery";
  $("#addressLabel").classList.toggle("hidden",!isDelivery);
}));

$("#whatsappBtn").addEventListener("click",()=>{
  const msg = buildOrderMessage();
  if(WHATSAPP_NUMBER){
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,"_blank","noopener");
  } else {
    $("#orderPreview").value = msg;
    $("#demoDialog").showModal();
  }
});
$("#closeDialog").addEventListener("click",()=>$("#demoDialog").close());
$("#copyOrder").addEventListener("click",async()=>{
  await navigator.clipboard.writeText($("#orderPreview").value);
  const b=$("#copyOrder"), old=b.textContent; b.textContent=t("copied"); setTimeout(()=>b.textContent=t("copy"),1400);
});

applyLanguage();
