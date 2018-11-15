function titleCase(str) {
	return str.toLowerCase()
	.split(" ")
	.map(x => x.replace(x.charAt(0), x.charAt(0).toUpperCase()))
	.join(" ");
}
console.log(titleCase("I'm a little teA pot"));

