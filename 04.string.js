const a = "ChaitanyA";
console.log(a.toLowerCase());       // chaitanya
console.log(a.toLocaleLowerCase()); // chaitanya
console.log(a.toUpperCase());       // CHAITANYA
console.log(a.toLocaleUpperCase()); // CHAITANYA
console.log(a.length); // 9

b = a.substring(0,5).toLocaleUpperCase();
b += "U"
console.log(b); // CHAITU
const c = "chaitanya,prasad"
console.log(c.split(",").length) // chaitanya , prasad 2