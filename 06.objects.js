const a = {
    firstname : "chaitanya",
    LastName  : "chandra",
    ispresent : true,
    absentdays: [1,2,3,30,31]
}
console.log(a.firstname);
console.log(Object.entries(a));  // all data in  array (list) form 
console.log(Object.keys(a));     // all keys in array
console.log(Object.values(a));   // all values in array
console.log(a["LastName"]);      // chandra

delete a.ispresent;
delete a.LastName;
console.debug(Object.entries(a));

const b = [a, {
    firstname : "hari",
    LastName  : "chandra",
    ispresent : true,
    absentdays: [11,22,23,30,31]}
] // array with objects

console.log(" first name of b is " + JSON.stringify(b[1].firstname));
const str = (JSON.stringify(b[1].firstname)).replace(/['"]+/g, '');
console.debug(`this is ${str} chowdary`);