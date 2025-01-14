
import React, { useState } from "react";
import './pal.css'





function PalindromeChecker() {
  const [textInput, setTextInput] = useState("");
  const [result, setResult] = useState("");


  const checkPalindrome = () => {
    const cleanedInput = textInput.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    const reversedInput = cleanedInput.split("").reverse().join("");
    if (cleanedInput === reversedInput) {
      setResult("Yes, it's a palindrome!");
    } else {
      setResult("No, it's not a palindrome.");
    }
  };

  return (
    <div className="mainContainer">
      <h1>Palindrome Project</h1>
      <input 
        id="text-input"
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
      />
      <button id="check-btn" onClick={checkPalindrome}>
        Click here
      </button>
      <div id="result">{result}</div>
    </div>
  );
}

export default PalindromeChecker;