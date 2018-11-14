function titleCase(str) {
  let strArr = str.split(" ");
  for (let i = 0; i < strArr.length; i++){
  	let strNestArr = strArr[i].split("");
  	strNestArr[0] = strNestArr[0].toUpperCase();
  	for(let j = 1; j < strNestArr.length; j++){
  		strNestArr[j] = strNestArr[j].toLowerCase();
  	}
  	strArr[i] = strNestArr.join("");
  }
  return strArr.join(" ");
}
console.log(titleCase("I'm a little teA pot"));

