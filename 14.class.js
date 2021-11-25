class myMethod{
    constructor(firstNameV, LastNameV, isPresentV){
        this.firstName = firstNameV,
        this.LastName  = LastNameV,
        this.ispresent = isPresentV
    }
    thanks(){
        return console.log(` hello ${this.firstName}`)
    }

}



const std1   = new myMethod("chaitanya","chandra",false);
const std2   = new myMethod("hari","chandra",false);
const std3   = new myMethod("somanaidu","chandra",true);
const std4   = new myMethod("suguna","chandra",true);

// get with object name
console.debug(std1);
std1.thanks();