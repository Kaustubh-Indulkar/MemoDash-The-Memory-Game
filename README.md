# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>MemoDash — Memory Matching Game</title>
  <style>
    :root{
      --bg:#0f1724;
      --card:#0b1220;
      --accent:#6ee7b7;
      --muted:#94a3b8;
      --glass: rgba(255,255,255,0.03);
      --maxw:960px;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
      color: #e6eef8;
    }
    html,body{height:100%;}
    body{
      margin:0;
      background: linear-gradient(180deg,#071029 0%, #051026 100%);
      display:flex;
      align-items:center;
      justify-content:center;
      padding:32px;
      box-sizing:border-box;
      color:var(--muted);
    }
    .container{
      width:100%;
      max-width:var(--maxw);
      background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
      border-radius:12px;
      padding:28px;
      box-shadow: 0 8px 30px rgba(2,6,23,0.7);
      border: 1px solid rgba(255,255,255,0.03);
    }
    header h1{
      margin:0 0 6px 0;
      font-size:28px;
      color:#fff;
    }
    header p.lead{
      margin:0 0 18px 0;
      color:var(--muted);
    }
    .badges img{height:20px; margin-right:8px; vertical-align:middle;}
    section{margin-top:20px;}
    h2{color:#dbeafe; margin:18px 0 8px 0; font-size:18px;}
    ul{color:var(--muted); line-height:1.6;}
    pre{
      background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
      padding:12px;
      border-radius:8px;
      overflow:auto;
      border:1px solid rgba(255,255,255,0.025);
      color:#cfe8ff;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", monospace;
      font-size:13px;
    }
    .grid{
      display:grid;
      grid-template-columns: 1fr 1fr;
      gap:18px;
    }
    .screenshot{
      background:var(--glass);
      border-radius:8px;
      height:140px;
      display:flex;
      align-items:center;
      justify-content:center;
      color:var(--muted);
      font-size:13px;
      border:1px dashed rgba(255,255,255,0.03);
    }
    @media (max-width:720px){
      .grid{grid-template-columns:1fr;}
    }
    footer{margin-top:22px; color:var(--muted); font-size:13px;}
    .tech-table{border-collapse:collapse; width:100%;}
    .tech-table td{padding:8px 6px; border-bottom:1px dashed rgba(255,255,255,0.02); color:var(--muted);}
    .pill{display:inline-block;padding:6px 10px;background:rgba(110,231,183,0.08);color:var(--accent);border-radius:999px;font-weight:600;font-size:13px;}
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;">
        <div>
          <h1>🎰 MemoDash — Memory Matching Game</h1>
          <p class="lead">A fast, fun, and visually engaging React-based memory game. Flip cards, match pairs, and try to finish with the fewest moves.</p>
        </div>
        <div style="text-align:right">
          <div class="badges">
            <!-- Replace with actual badge images/links if desired -->
            <img src="https://img.shields.io/badge/license-MIT-blue" alt="license" />
            <img src="https://img.shields.io/badge/build-dev-green" alt="build" />
          </div>
          <div style="margin-top:8px;">
            <a href="#" style="text-decoration:none"><span class="pill">Live Demo — Coming Soon</span></a>
          </div>
        </div>
      </div>
    </header>

    <section>
      <h2>🚀 Demo</h2>
      <p>Live demo: <em>Coming soon</em>. Host the app on Vercel / Netlify and paste the URL here.</p>
    </section>

    <section>
      <h2>🎮 Features</h2>
      <ul>
        <li>🎴 Smooth card flip animations</li>
        <li>🧠 Smart matching logic via a custom <code>useGameLogic</code> hook</li>
        <li>📊 Score & move tracking</li>
        <li>🏆 Win message overlay when all pairs are matched</li>
        <li>🌌 Custom background image theme</li>
        <li>🎨 Optional pixelated border for a retro look</li>
        <li>🔄 Restart / Reset game button</li>
        <li>📱 Responsive layout (mobile + desktop)</li>
      </ul>
    </section>

    <section>
      <h2>🖼 Screenshots</h2>
      <div class="grid">
        <div class="screenshot">Home Screen Placeholder (screenshots/home.png)</div>
        <div class="screenshot">Gameplay Placeholder (screenshots/gameplay.png)</div>
        <div class="screenshot">Win Screen Placeholder (screenshots/win-screen.png)</div>
        <div class="screenshot">Optional Pixel Border Example</div>
      </div>
      <p style="margin-top:8px;color:var(--muted)">Replace these placeholders with actual images in <code>/screenshots/</code> folder and update paths.</p>
    </section>

    <section>
      <h2>🧩 Gameplay</h2>
      <ol style="color:var(--muted);line-height:1.6">
        <li>Click any card to flip it.</li>
        <li>Flip another card to check for a match.</li>
        <li>Matched pairs remain flipped; unmatched cards flip back.</li>
        <li>Finish all 8 pairs (16 cards) to win!</li>
        <li>Try to beat your best move score each round.</li>
      </ol>
    </section>

    <section>
      <h2>🛠 Tech Stack</h2>
      <table class="tech-table">
        <tr><td><strong>React</strong></td><td>Main UI framework</td></tr>
        <tr><td><strong>Custom Hooks</strong></td><td><code>useGameLogic</code> for state & match detection</td></tr>
        <tr><td><strong>CSS</strong></td><td>Layout, animations, pixel border</td></tr>
        <tr><td><strong>Vite / CRA</strong></td><td>Build tool (whichever you used)</td></tr>
        <tr><td><strong>JavaScript (ES6+)</strong></td><td>Game mechanics</td></tr>
      </table>
    </section>

    <section>
      <h2>📦 Installation</h2>
      <p>Clone, install, and run locally:</p>
      <pre>
git clone https://github.com/your-username/memodash.git
cd memodash
npm install
npm run dev
      </pre>
      <p>Build for production:</p>
      <pre>
npm run build
      </pre>
    </section>

    <section>
      <h2>📁 Project Structure</h2>
      <pre>
memodash/
│
├── src/
│   ├── components/
│   │   ├── Card.jsx
│   │   ├── GameHeader.jsx
│   │   ├── WinMessage.jsx
│   ├── hooks/
│   │   └── useGameLogic.js
│   ├── assets/
│   │   └── night-sky5.jpg
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── public/
└── README.md
      </pre>
    </section>

    <section>
      <h2>🔧 Customization</h2>
      <p>To tweak the pixel border and card content:</p>
      <pre>
/* in App.css */
--pixel-border-thickness: 8px;
--pixel-border-color: #000;
      </pre>
      <p>Change card emojis in <code>App.jsx</code>:</p>
      <pre>
const cardValues = ["😶","😎","🥶","💀","🙀","😵‍💫","🤣","👽"];
      </pre>
    </section>

    <section>
      <h2>📌 Future Enhancements</h2>
      <ul>
        <li>⏳ Timer & pace mode</li>
        <li>🌐 Online leaderboard / high scores</li>
        <li>🔊 Sound effects & music</li>
        <li>🎭 Multiple visual themes (Light, Dark, Pixel)</li>
        <li>🧱 More card sets (Animals, Flags, Icons)</li>
      </ul>
    </section>

    <section>
      <h2>🤝 Contributing</h2>
      <p style="color:var(--muted)">Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.</p>
    </section>

    <section>
      <h2>📜 License</h2>
      <p style="color:var(--muted)">This project is licensed under the <strong>MIT License</strong>. See <code>LICENSE</code> for details.</p>
    </section>

    <footer>
      <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;">
        <div>Made with ❤️ — <strong>MemoDash</strong></div>
        <div style="color:var(--muted)">Author: Kaustubh Indulkar (update if different)</div>
      </div>
    </footer>
  </div>
</body>
</html>
