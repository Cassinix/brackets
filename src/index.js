module.exports = function check(str, bracketsConfig) {
  const universalCheck = (openBracket, closeBracket) => {
    let openBracketCount = 0;
    let closeBracketCount = 0;

    function positionCheck() {
      return openBracketCount >= closeBracketCount;
    }

    for (let i = 0; i < str.length && positionCheck(); i++) {
      if (str[i] === openBracket) {
        openBracketCount++;
      }
      else if (str[i] === closeBracket) {
        closeBracketCount++;
      }
    }

    function isOk() {
     return openBracket === closeBracket && openBracketCount % 2 === 0 || (openBracketCount === closeBracketCount);
    }
    return isOk();
  }

  return bracketsConfig.every(element => {
    return universalCheck(element[0], element[1]);
  });
}
