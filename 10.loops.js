for (let i = 1 ; i <= 5 ; i++){
    console.log(`${i}.chaitanya`);
}
const l =['chaitanya', 'chandra','hari', 'suguna', 'somanaidu', 'mac', 'iphone' ];
// for loop one
for(let a = 0 ; a < l.length ; a ++){
    if(l[a] === 'mac'){
        break;
    }
    else if (l[a] === 'chandra') {
        continue;
    }
    console.log(l[a]);
}

console.log("\n*****\n")

// for of loop, iterate list
for(let x of l){
    if(x === 'mac'){
        break;
    }
    else if (x === 'chandra') {
        continue;
    }
    console.log(x)
}

console.log("\n*****\n")

/*
for(let y in l){
    console.debug(l[y]);
}
*/

const obj = {
    firstName : "chaitanya",
    lastName  : "chandra"
}

for (let y in obj){
    console.log(y + " is " + obj[y]);
}