# Shopify + IA Demo 🚀

📅 Proyecto de prueba – Presentación funcional  
👤 Autor: Atter Mayer Basilio Rengifo  
🗓 Fecha: 08/05/2025  
🌐 Demo desplegado en: [Vercel](https://vercel.com/)  

---

## 📦 Estructura del proyecto

- `pages/index.tsx`: Página principal con producto y botón de compra IA.
- `pages/api/order.ts`: API que simula el envío de un pedido a n8n.
- `components/SimulatedCall.tsx`: Componente que muestra mensaje simulado tipo llamada IA.
- `styles/globals.css`: Estilos globales con Tailwind.
- `public/`: Recursos públicos (imágenes, íconos).
- `tailwind.config.js` y `postcss.config.js`: Configuración de TailwindCSS.
- `_app.tsx`: Archivo necesario para importar los estilos globales.

---

## ⚙️ Tecnologías utilizadas

- Next.js (con TypeScript)
- Tailwind CSS
- API Routes (para simular integración con Shopify + Telnyx)
- n8n (como herramienta de automatización futura)

---

## 💡 Descripción

Este proyecto simula un flujo de compra donde el usuario presiona el botón “Comprar con IA”.  
Esto lanza una llamada a una API interna que simula el disparo de un webhook (por ejemplo, hacia n8n).  
Luego se muestra un mensaje en pantalla que simula una llamada automática con IA usando TTS (Text to Speech).

---

## 📁 Instrucciones para correr localmente

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tuusuario/shopify-ia-demo.git
   cd shopify-ia-demo