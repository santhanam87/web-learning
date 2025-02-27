
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
let a = {}

/*
    key
    value
    access
    add/remove/update
    datastructure
    methods
*/

b = [1,2,3]


a["users"] = [
    {name:"sam", age:20, locations:["usa","india"], }, 
    {name:"shravan", age:11, locations:["usa","india"]},
    {name:"shravan", age:11, locations:["usa"]}
]


//console.info(a)
// access users
// console.info(a["users"])
// console.info(a["users"][0])
// console.info(a["users"][0]["name"])
// console.info(a.users[0].name)
// console.info(a.users[0].locations[1])
// console.info("----")

let count  = 0

for(let i = 0; i < a.users.length; i++){
    const user = a.users[i];
    const locations = user.locations;
    count ++
    for(let locationIndex = 0; locationIndex < locations.length; locationIndex++ ){
        console.info(locations[locationIndex])
        count ++
    }
    console.info("----")
}

console.info(count)

var employees = [{name:"", age:38, location:[{city:"", state:"", zip}]}]

// Banking system data structure;
// Bank has customers, customer -> name : (firstName, lastName), age, location:{city, state, zip}, address: {street, homenumber} (multiple)

const customers = [{name:{firstName:"", lastName:""}, age:10, location:{city:"", state:"", zip:100}, address:[{street:"", houseNumer:""}]}]

// Problem 1: Construct a data strucutre for a restaurant table booking.
// name{firstName, lastName}, hotelLocation {street, city, state, zip},  age, numberOfGuest, coupon [{couponNumber, couponExpiry}]
// 3 customer
// print each customer firstName
// print each customer each coupon -> couponNumber



