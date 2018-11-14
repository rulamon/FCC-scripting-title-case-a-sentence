function titleCase(str) {
  let wordArr = str.toLowerCase().split(" ");
  let capWordArr = [];
  for (i = 0; i < wordArr.length; i++) {

    capWordArr.push(wordArr[i].replace(wordArr[i][0], wordArr[i][0].toUpperCase())); 
  }
  return capWordArr.join(" ");
}
console.log(titleCase("I'm a little teA pot"));

