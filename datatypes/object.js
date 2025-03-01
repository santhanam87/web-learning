
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
    [{name:{firstname:"Lavanay" ,lastname:"Manohran"}, hotelLocation :{street:"holly street", city:"Denver", state:"CO", zip:"325545"},  age:"38", numberOfGuest:"3", coupon : [{couponNumber:"1", couponExpiry:"8/19", offers:[{offerName:"offer1.1"},{offerName:"offer1.2"}]} ] }, 
     {name:{firstname:"Santhanam" ,lastname:"Eilumali"}, hotelLocation :{street:"holly street", city:"Denver", state:"CO", zip:"325545"},  age:"38", numberOfGuest:"3", coupon : [{couponNumber:"2", couponExpiry:"6/7", offers:[{offerName:"offer2.1"}]}, ] },
     {name:{firstname:"Shakunth" ,lastname:"Santhanam"}, hotelLocation :{street:"holly street", city:"Denver", state:"CO", zip:"234345"},  age:"5", numberOfGuest:"3", coupon : [{couponNumber:"3", couponExpiry:"2/9", offers:[]} ] }];
    
    //  for(var hotelBooking = 0;hotelBooking < hotel.length; hotelBooking++ ){
    //     var hotelCostemerInfo = hotel[hotelBooking]
    //         console.info(hotel[hotelBooking].name.firstname,)
    //             console.info("---------")    

    //     }
    //      for(var couponinfo = 0;couponinfo < hotel.coupon; couponinfo++){
    //         console.info(hotel[couponinfo].coupon[couponinfo].couponNumber)
    //      }
        // console.info(couponinfo)

    hotel[0].coupon[0].couponNumber
    for(var hotelIndex = 0;hotelIndex<hotel.length;hotelIndex++){
        const coupons = hotel[hotelIndex].coupon;
        console.info(hotel[hotelIndex].name.firstname)
        for(var couponIndex = 0;couponIndex<coupons.length;couponIndex++){
            console.info(coupons[couponIndex].couponNumber);
            const offers = hotel[hotelIndex].coupon[couponIndex].offers;
            for(var offerIndex = 0; offerIndex< offers.length;offerIndex++){
                console.info(offers[offerIndex].offerName)
            }
        }
        
    }