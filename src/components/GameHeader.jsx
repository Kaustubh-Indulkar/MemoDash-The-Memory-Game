import React from "react";
import "../App.css";

export const GameHeader = ({ score, moves, onReset}) => {
  return (
    <header className="game-header">
        <p><span className="lead2">“If remembering you was a game, I’d have a flawless streak.💕”</span></p>
      <h1>
        <span className="title-highlight">🎰MemoDash</span> - Test Your Memory!
      </h1>
      <p className="lead">
        MemoDash is a fast and fun memory game where you flip cards, match pairs,
        and test your recall skills.
      </p>

      <div className="stats">
        <div className="stat-item font-mono">
          <span className="stat-label">Score:</span>{" "}
          <span className="stat-value">{score}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Moves:</span>{" "}
          <span className="stat-value">{moves}</span>
        </div>
      </div>

      <button className="reset-btn" onClick={onReset}>✨New Game</button>
    </header>
  );
};
