const a ={
    firstName: "chaitanya",
    LastName: "chandra",
    ispresent: false
};
console.log(typeof a); // object

// object to json(string)
const b = JSON.stringify(a);
console.log(typeof b); // string
console.log(b);

// strng to object
const c = JSON.parse(b);
console.log(typeof c); // object
console.log(c);
