
// // // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// let a = {}
//  a["users"] = [
//      {name:"sam", age:20, locations:["usa","india"], }, 
//      {name:"shravan", age:11, locations:["usa","india"]},
//      {name:"shravan", age:11, locations:["usa"]}
//  ]

// let count  = 0

// for(let i = 0; i < a.users.length; i++){
//     const user = a.users[i];
//     const locations = user.locations;
//     count ++
//     for(let locationIndex = 0; locationIndex < locations.length; locationIndex++ ){
//         console.info(locations[locationIndex])
//         count ++
//     }
//     console.info("----")
//}
// // Problem 1: Construct a data strucutre for a restaurant table booking.
// // name{firstName, lastName}, hotelLocation {street, city, state, zip},  age, numberOfGuest, coupon [{couponNumber, couponExpiry}]
// // 3 customer
// // print each customer -> firstName
// // print each customer each coupon -> couponNumber
// // done comment custemer value is not incresing.Why? 
    var hotel = 
    [{name:[{firstname:"Lavanay" ,lastname:"Manohran"}], hotelLocation :[{street:"holly street", city:"Denver", state:"CO", zip:"325545"}],  age:"38", numberOfGuest:"3", coupon : [{couponNumber:"1", couponExpiry:"8/19"} ] }, 
     {name:[{firstname:"Santhanam" ,lastname:"Eilumali"}], hotelLocation :[{street:"holly street", city:"Denver", state:"CO", zip:"325545"}],  age:"38", numberOfGuest:"3", coupon : [{couponNumber:"2", couponExpiry:"6/7"} ] },
     {name:[{firstname:"Shakunth" ,lastname:"Santhanam"}], hotelLocation :[{street:"holly street", city:"Denver", state:"CO", zip:"234345"}],  age:"5", numberOfGuest:"3", coupon : [{couponNumber:"3", couponExpiry:"2/9"} ] }];
    
     for(var hotelBooking = 0;hotelBooking < hotel.length; hotelBooking++ ){
        var hotelCostemerInfo = hotel[hotelBooking]
        for(var customer = 0;customer<hotel[hotelBooking].name.length;customer=customer+1){
            console.info(hotel[hotelBooking].name[0].firstname,
                hotel[hotelBooking].coupon[0].couponNumber
            )
            
        }
        console.info("---------")
     }