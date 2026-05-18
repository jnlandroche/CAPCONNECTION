# CapitalPath — Middle Market Corporate Lending Portal

A polished React prototype for a corporate lending advisory platform targeting middle market companies ($10M–$500M revenue) seeking institutional debt financing.

## Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3**
- **React Router 6**
- **Recharts** (dashboard charts)
- **Lucide React** (icons)
- **Google Fonts**: Playfair Display + DM Sans + DM Mono

## Pages

| Route | Page |
|-------|------|
| `/` | Homepage — hero, solutions grid, how it works |
| `/intake` | Multi-step borrower intake form |
| `/upload` | Secure document upload center |
| `/assessment` | AI financing assessment with Capital Fit Score |
| `/lenders` | Lender term sheet comparison table |
| `/dashboard` | Advisor/admin pipeline dashboard |

## Running Locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`

## Deploying to Replit

1. Import this repo into Replit (GitHub → Import Repository)
2. Replit will auto-detect Vite/Node
3. Set the **Run** command to: `npm run dev`
4. Replit will expose port 3000 automatically

> If Replit doesn't auto-install, run `npm install` in the Shell tab first.

## Deploying to GitHub Pages

```bash
npm run build
# Push /dist to gh-pages branch or use GitHub Actions
```

## Notes

- **All data is mock** — no real banking, lender, or file functionality
- Prototype only — not a licensed financial advisory platform
- Designed for desktop-first with full mobile responsiveness
- Dark navy + gold color palette, Bloomberg/private banking aesthetic

## File Structure

```
capitalpath/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── components/
    │   ├── Nav.jsx
    │   ├── Footer.jsx
    │   └── Ticker.jsx
    ├── data/
    │   └── mockData.js
    └── pages/
        ├── HomePage.jsx
        ├── IntakePage.jsx
        ├── UploadPage.jsx
        ├── AssessmentPage.jsx
        ├── LendersPage.jsx
        └── DashboardPage.jsx
```
