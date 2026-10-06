# La Panchería · Demo de tienda web

Prototipo estático, mobile-first y bilingüe (ES/EN) para presentar a **La Panchería, El Calafate**.

## Incluye

- Landing comercial responsive.
- Menú con filtros por categoría.
- Carrito de compras.
- Selector Retiro / Delivery.
- Formulario de nombre, dirección y observaciones.
- Pedido listo para enviar por WhatsApp.
- Modo demo si todavía no se cargó el número de WhatsApp.
- Selector Español / Inglés.
- Enlace a Google Maps.
- Enlace a Instagram.
- Persistencia del carrito en `localStorage`.

## Importante

Los productos y precios incluidos son **de demostración**. Deben reemplazarse por el menú real antes de publicar.

## Configurar WhatsApp

Abrir `app.js` y completar:

```js
const WHATSAPP_NUMBER = "5492966XXXXXXXX";
```

Usar el número completo, sólo dígitos, con código de país y característica.

## Probar localmente

Se puede abrir `index.html` directamente o ejecutar:

```bash
python -m http.server 8080
```

Luego visitar `http://localhost:8080`.

## Publicación

Al ser un sitio estático puede desplegarse gratis en GitHub Pages, Cloudflare Pages, Netlify o Render Static Site.
