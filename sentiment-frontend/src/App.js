import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [sentiment, setSentiment] = useState(null);
  const [error, setError] = useState("");

  const analyzeSentiment = async () => {
    setError(""); // Reset error before making request
    setSentiment(null); // Reset previous result
    try {
      const response = await axios.post("http://localhost:3000/analyze-sentiment", { text });
      setSentiment(response.data.sentiment);
    } catch (err) {
      setError("Error analyzing sentiment. Please try again.");
      console.error("Error:", err);
    }
  };

  return (
    <div className="App">
      <h1>Sentiment Analysis</h1>
      <p>Enter a sentence and analyze its sentiment!</p>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your text here..."
        className="input-box"
      />
      
      <button className="analyze-button" onClick={analyzeSentiment}>
        Analyze Sentiment
      </button>

      {/* Show Sentiment Result */}
      {sentiment && (
        <div className={`sentiment-box ${sentiment}`}>
          Sentiment: <strong>{sentiment.toUpperCase()}</strong>
        </div>
      )}

      {/* Show Error Message */}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default App;
