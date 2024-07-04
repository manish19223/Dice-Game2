import React, { useState } from "react";
import "./App.css";

function App() {
  const [diceNumber, setDiceNumber] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [score, setScore] = useState(0);
  const [showRules, setShowRules] = useState(false);

  const rollDice = () => {
    if (selectedNumber === null) {
      alert("You have not selected any number");
      return;
    }
    const newNumber = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(newNumber);
    if (newNumber === selectedNumber) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
  };

  const resetScore = () => {
    setScore(0);
  };

  const toggleRules = () => {
    setShowRules(!showRules);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dice Game</h1>
        <div className="score">
          <p>Total Score: {score}</p>
        </div>
        <div className="select-number">
          <p>Select Number</p>
          <div className="numbers">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <button
                key={num}
                onClick={() => setSelectedNumber(num)}
                className={selectedNumber === num ? "selected" : ""}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
        <div className="dice">
          <img
            src={`${process.env.PUBLIC_URL}/dice-${diceNumber}.png`}
            alt={`Dice showing ${diceNumber}`}
            onClick={rollDice}
          />
        </div>
        <div className="controls">
          <button onClick={resetScore}>Reset Score</button>
          <button onClick={toggleRules}>Show/Hide Rules</button>
        </div>
        {showRules && (
          <div className="rules">
            <h2>How to play dice game</h2>
            <p>Select any number</p>
            <p>Click on dice to roll</p>
            <p>
              If selected number is equal to dice number you will get points
              else you will lose points
            </p>
            <p>
              If you are going in negative three times 3 points will be deducted
            </p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
