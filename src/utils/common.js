export const isHebrew = (string) => {
  return !!string?.split("").some((x) => x.match(/[\u0590-\u05FF]/));
};

export const convertToRTL = (str) => {
  // Split the string into an array of characters
  const chars = str.split("");
  const specialCharacters = [":", ",", "."];
  const englishLetters = /[a-zA-Z]/;

  // Mapping for characters that need to be swapped
  const swapMap = {
    "(": ")",
    ")": "(",
    "<": ">",
    ">": "<",
    "{": "}",
    "}": "{",
    "[": "]",
    "]": "[",
    "/": "\\", //Note: In JavaScript, a backslash (\) is an escape character. To represent an actual backslash in a string, you need to escape it with another backslash.
    "\\": "/",
  };

  // Initialize buffers and result
  let result = "";
  let buffer = "";

  for (let i = 0; i < chars.length; i++) {
    const char = chars[i];

    if (
      (!isNaN(char) && char !== " ") ||
      specialCharacters.includes(char) ||
      englishLetters.test(char)
    ) {
      // Add numbers, special characters, or English letters to the buffer
      buffer += char;
    } else {
      if (buffer) {
        // Reverse and add the buffer to the result
        result = buffer + result;
        buffer = "";
      }
      // Swap character if it's in the swapMap
      result = (swapMap[char] || char) + result;
    }
  }

  // Add any remaining buffer to the result
  if (buffer) {
    result = buffer + result;
  }

  return result.split("");
};
