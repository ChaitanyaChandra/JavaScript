// var, let, const

for(var i = 0; i < 10; i++){

}
// i can be accessable every where from code
console.log(i) // 10


for(let l = 0; l < 10; l++){

}
// l cant be accessable every where from code only with in for loop.
console.log(l) // error

const c = 0;
c = 11; //error const cannot be changed.