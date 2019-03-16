module.exports = function check(str, bracketsConfig) {
  const hasPairbracket = (str) => bracketsConfig.every(element =>
    !(str.includes(element[0].concat(element[1]))));

  const bracketTransform = (str) => {
    bracketsConfig.forEach(element => {
      if (str.includes(element[0].concat(element[1]))) {
       str = str.replace((element[0].concat(element[1])), '');
      }
    })
    return str;
  };

  if (str === '') {
    return true;
  }
  else if (str !== '' && hasPairbracket(str)) {
    return false;
  }
  else return check(bracketTransform(str), bracketsConfig);
}

