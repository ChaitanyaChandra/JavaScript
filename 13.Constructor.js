/*
const l = []
function myMethod(firstNameV, LastNameV, isPresentV){
    const a = {
        firstName: firstNameV,
        LastName:  LastNameV,
        ispresent: isPresentV
    };
    l.push(a);
}

myMethod("chaitanya","chandra",false);
myMethod("hari","chandra",false);
myMethod("somanaidu","chandra",true);
myMethod("suguna","chandra",true);

for(let x of l){
    console.log(x.firstName);
}
*/

function myMethod(firstNameV, LastNameV, isPresentV){
        this.firstName = firstNameV,
        this.LastName  = LastNameV,
        this.ispresent = isPresentV
        // this.thanks = function (){
        //     return console.log(` hello ${this.firstName}`)
        // }
    };
    myMethod.prototype.thanks=function (){
        return console.log(` hello ${this.firstName}`)
    }

const std1   = new myMethod("chaitanya","chandra",false);
const std2   = new myMethod("hari","chandra",false);
const std3   = new myMethod("somanaidu","chandra",true);
const std4   = new myMethod("suguna","chandra",true);

// get with object name
console.debug(std1);
std1.thanks();