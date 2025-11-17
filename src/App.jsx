import { GameHeader } from "./components/GameHeader"
import { Card } from "./components/Card";
import React, { useState,useEffect } from "react";
import "./App.css";
import bgImage from "./assets/night-sky5.jpg";
import { WinMessage } from "./components/WinMessage";
import { useGameLogic } from "./hooks/useGameLogic";


const cardValues = [
  "😶",
  "😎",
  "🥶",
  "💀",
  "🙀",
  "😵‍💫",
  "🤣",
  "👽",
  "😶",
  "😎",
  "🥶",
  "💀",
  "🙀",
  "😵‍💫",
  "🤣",
  "👽",
];

function App() {
  const { cards,score,moves,handleCardClick,initializeGame,isGameComplete}=useGameLogic(cardValues);
  return (
    <div
      className="app-bg-inline"
      style={{
        "--bg-image": `url(${bgImage})`,
      }}
    >
      <div className="app">
        <GameHeader score={score} moves={moves} onReset={initializeGame} />

      {isGameComplete && <WinMessage moves={moves}/>}

      
        <main className="content">
          <div className="cards-grid">
            {cards.map((card) => (
              <Card card={card} onClick={handleCardClick} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
export default App
