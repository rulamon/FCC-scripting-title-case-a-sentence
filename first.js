function titleCase(str) {
  let wordArr = str.split(" ");
  for (let i = 0; i < wordArr.length; i++){
  	let letterArr = wordArr[i].split("");
  	letterArr[0] = letterArr[0].toUpperCase();
  	for(let j = 1; j < letterArr.length; j++){
  		letterArr[j] = letterArr[j].toLowerCase();
  	}
  	wordArr[i] = letterArr.join("");
  }
  return wordArr.join(" ");
}
console.log(titleCase("I'm a little teA pot"));

