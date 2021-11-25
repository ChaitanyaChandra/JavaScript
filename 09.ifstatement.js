const a = 20;
const b = 30;

if(a === 29 && b === 30){
    console.log("if block");
}
else if (a === 10 || b === 30) {
    console.log("elseif block");
}
else{
    console.log("else block");
}


const x = 10;
const y = 20;

// ternary oprator (if, else)
(x !== y)? console.log("!= yes it is true"): console.log(" yes it is false");

// ternary operator (if, else if , else )
(x === 1)? console.log("1 is true(if statement)")
: (x === 5)? console.log("5 is true (else  if statement) 1")
: (x === 10)? console.log("10 is true (else if statement 2 )")
: console.log("else");