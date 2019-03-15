module.exports = function check(str, bracketsConfig) {
  const universalCheck = (openBracket, closeBracket) => {
    let openBracketCount = 0;
    let closeBracketCount = 0;
    //let otherBracketCount = 0;
    const positionCheck = () => {
      return openBracketCount >= closeBracketCount;
    }

    for (let i = 0; i < str.length && positionCheck(); i++) {
      if (str[i] === openBracket) {
        openBracketCount++;
      }
      else if (str[i] === closeBracket) {
        closeBracketCount++;
      }
     // else otherBracketCount++;
    }

    if (openBracket === closeBracket && openBracketCount % 2 === 0) {
      return true;
    }
    else if (openBracketCount === closeBracketCount) {
      return true;
    }
    else return false;
  }

  return bracketsConfig.every(element => {
    return universalCheck(element[0], element[1]);
  });
}
