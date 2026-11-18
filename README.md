# Agrilink Web (UI)

React (Vite) front end for **Agrilink: Multilingual, Voice-Enabled Farm Produce Marketplace**.
This is the website UI only, with sample data and a professional dark theme. It is ready to connect to the Node.js / Express / MongoDB (MERN) back end.

## Run in VS Code

1. Install Node.js 18 or newer: https://nodejs.org
2. Open this folder in VS Code (File > Open Folder).
3. Open the terminal (Ctrl + `) and run:

```bash
npm install
npm run dev
```

4. Open the address shown in the terminal (usually http://localhost:5173).

## Pages

| Route | Page |
|---|---|
| `/` | Marketplace (public) |
| `/farmer` | Farmer dashboard |
| `/farmer/new` | Create advertisement (3-step form) |
| `/orders` | Customer order tracking |
| `/admin` | Admin panel |

## Folder structure

```
src/
  main.jsx            app entry
  App.jsx             routes
  styles.css          all styles (colours are CSS variables at the top)
  data.js             sample data (replace with API calls later)
  components/
    Layout.jsx        header, language switch, voice button
    Icon.jsx          SVG icons
  pages/
    Home.jsx  FarmerDashboard.jsx  CreateAd.jsx  OrderTracking.jsx  Admin.jsx
```

## Next steps

- Replace `src/data.js` with calls to the Express API (use `fetch` or `axios`).
- Add real login and role-based routes (farmer, customer, wholesale, delivery, admin).
