
// /**function shravan(obj, obj1, obj2){
//     // input
//    // return "value"
// //}

// //var auything = shravan('pencil', 'pencil', 'rulers')


// function op(a){
//     return a+2*3/4
// }


// function resalt(a){
//     return a*10
    
// }


// var done = op(10)

// console.info (done)

// var done2 = resalt(done)

// console.info (done2)

// function factory(a){
//     if(a=="car")
//         console.info("honk","4","5")
//     else if(a=="bike")
//         console.info("beep","2","2")
// }

// var build = factory("car")
// */

// // function factorySound(a){
// //     if(a=="car")
// //         console.info("honk")
// //     else if(a=="bike")
// //         console.info("beep")
// // }

// // function factorywheels(a){
// //     if(a=="car")
// //         console.info("4")
// //     else if(a=="bike")
// //         console.info("2")
// // }
// // function factoryPeople(a){
// //         if(a=="car")
// //             console.info("5")
// //         else if(a=="bike")
// //             console.info("2")
// //     }


// // function factory(a){

// //         factorywheels(a)
// //         factorySound(a)
// //         factoryPeople(a)

// // }
// // factory("bike")






// // function b(binput){
// //     binput = binput + 'something'
// //     return binput
// // }

// // var output = b("nothing")

// // // console.info(ouput)

function factoryTiers (a){
    if(a=="car")
        return a + "4 tiers"
    else if (a=="bike")
        return a + "2 tiers"
}
function factoryControl(a, b){
    if(a=="car")
        return b + "1 control systum"
    else if(a=="bike")
        return b + "1 control systum"
}
function factoryseats(a, b){
    if(a=="car")
        return b + "5 seats"
    else if(a=="bike")
        return b + "2 seats"
}
function factoryall(a){
    var tiers = factoryTiers(a)
   var control = factoryControl(a, tiers)
    return factoryseats(a, control)
}
var factory = factoryall("car")
console.info(factory)