function calculateSum() {
  const value = document.getElementById("input-value").value;
  if (!value) return;
  const { text, isHebrew } = convertToRTL(value);
  const outputDiv = document.getElementById("output-value");
  outputDiv.innerHTML = "";
  text.forEach((item) => {
    const div = document.createElement("div");
    div.textContent = item;
    outputDiv.appendChild(div);
  });

  const isHebrewDiv = document.getElementById("is-hebrew");
  isHebrewDiv.innerHTML = isHebrew ? "Yes" : "No";
}

function convertToRTL(str) {
  // Split the string into an array of characters
  const chars = str.split("");

  // Find groups of consecutive numbers and reverse them
  let result = "";
  let numberBuffer = "";
  let isHebrew = false;
  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];
    if (!isNaN(char) && char !== " ") {
      // Check if the character is a number
      numberBuffer += char;
    } else {
      if (numberBuffer) {
        // Reverse and add the number to the result
        result = numberBuffer + result;
        numberBuffer = "";
      }
      result = char + result;
      if (char.match(/[\u0590-\u05FF]/)) {
        isHebrew = true;
      }
    }
  }

  // Add any remaining number to the result
  if (numberBuffer) {
    result = numberBuffer + result;
  }

  return {
    text: isHebrew ? result.split("") : str.split(""),
    isHebrew,
  };
}
