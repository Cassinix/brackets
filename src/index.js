module.exports = function check(str, bracketsConfig) {
  let roundBracketsCount = 0;
  let curlyBracketsCount = 0;
  let squareBracketsCount = 0;
  let verticalLineCount = 0;
  for (let i = 0; i < str.length; i++){
         if (str[i] === '(') roundBracketsCount++;
    else if (str[i] === ')') roundBracketsCount--;
    else if (str[i] === '[') squareBracketsCount++;
    else if (str[i] === ']') squareBracketsCount--;
    else if (str[i] === '{') curlyBracketsCount++;
    else if (str[i] === '}') curlyBracketsCount--;
    else if (str[i] === '|') roundBracketsCount++;
    else if (str[i] === '|') roundBracketsCount--;
  
   const result = 
    roundBracketsCount === 0 && 
    squareBracketsCount === 0 &&
    curlyBracketsCount === 0 &&
    verticalLineCount === 0;
  return result;
}
}
