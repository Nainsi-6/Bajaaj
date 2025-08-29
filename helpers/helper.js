function getDdmmyyyyFromTimestamp() {
  const now = new Date(Date.now());
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();

  return `${day}${month}${year}`;
}
const processData = (data) => {
  const oddNumbers = [];
  const evenNumbers = [];
  const alphabets = [];
  const specialCharacters = [];
  let sum = 0;
  let alphabetString = '';

  for (const item of data) {
    if (typeof item !== 'string') {
      continue;
    }

    const trimmedItem = item.trim();

    if (/^[A-Za-z]+$/.test(trimmedItem)) {
      alphabets.push(trimmedItem.toUpperCase());
      alphabetString += trimmedItem.toLowerCase();
    } else if (/^-?\d+$/.test(trimmedItem)) {
      const number = parseInt(trimmedItem, 10);
      sum += number;
      if (number % 2 === 0) {
        evenNumbers.push(trimmedItem);
      } else {
        oddNumbers.push(trimmedItem);
      }
    } else if (trimmedItem) {
      specialCharacters.push(trimmedItem);
    }
  }

  // Build the alternating-case reversed string
  let concatString = '';
  for (let i = alphabetString.length - 1; i >= 0; i--) {
    const char = alphabetString[i];
    if ((alphabetString.length - 1 - i) % 2 === 0) {
      concatString += char.toUpperCase();
    } else {
      concatString += char.toLowerCase();
    }
  }

  return { oddNumbers, evenNumbers, alphabets, specialCharacters, sum, concatString };
};
module.exports={getDdmmyyyyFromTimestamp, processData}
