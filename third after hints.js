function titleCase(str) {
	return str.toLowerCase()
	.split(" ")
	.map(x => x.replace(/^[a-z]/, l => l.toUpperCase()))
	.join(" ");
}
console.log(titleCase("I'm a little teA pot"));

