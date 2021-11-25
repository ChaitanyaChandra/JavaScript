const a = [
    {
        firstName: "chaitanya",
        LastName: "chandra",
        ispresent: false
    },
    {
        firstName: "somanaidu",
        LastName: "chandra",
        ispresent: true
    },
    {
        firstName: "suguna",
        LastName: "chandra",
        ispresent: true,
    },
    {
        firstName: "Hari",
        LastName: "chandra",
        ispresent: false
    }
]; // array with objects(key value pair)

// call only first name
const b = a.map((c) => c.firstName);
console.debug(b);
/* can be also
const b = a.map(function (c){
    return(c.firstName)
});
console.debug(b)
*/

// filter 
const d = a.filter((e) => e.ispresent = true);
console.debug(d);
/* can be also
const d = a.filter(function (e){
    return e.ispresent = true
})
console.debug(d);
*/

// map and filter
const f = a.filter((g) => g.ispresent = true).map((h) => h.firstName);
console.debug(f);