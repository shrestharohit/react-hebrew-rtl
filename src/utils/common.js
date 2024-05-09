export const isHebrew = (string) => {
  return !!string?.split("").some((x) => x.match(/[\u0590-\u05FF]/));
};

export const convertToRTL = (str) => {
  // Split the string into an array of characters
  const chars = str.split("");

  // Find groups of consecutive numbers and reverse them
  let result = "";
  let numberBuffer = "";
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
    }
  }

  // Add any remaining number to the result
  if (numberBuffer) {
    result = numberBuffer + result;
  }

  return result.split("");
};
