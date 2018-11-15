function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, l => l.toUpperCase());
}
console.log(titleCase("I'm a little teA pot"));

