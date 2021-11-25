const a = "method";

// 1
function Method1(name){
    console.log(`${a} ${name}`);
}
Method1("one");

// 2
const Method2 = function(name) {
    console.log(a + " " + name);
}
Method2("two");

// 3
const Method3 = (name)=> {
    console.log(`${a} ${name}`);
}
Method3("three");

/*
const sum = (x, y) => {
    return (x+y);
}
*/
const sum = (x, y) => (x+y); // single line with return function. 
console.log(sum(50,20));