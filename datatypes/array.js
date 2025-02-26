// var a = ['a','b','c']
// console.info(a.length)
// // console.info(a[1])
// // a.push(4)
// // a[1] = 10
// // console.info(a.length)
// // console.info(a)
// // a.pop()
// // console.info(a)
// console.info('--------------------')
// for( var i = 5; i > 0; i = i-1){
//     console.info(i)
// }
// a.push('d')
// console.info('--------------------')
// for( var i = 0; i < 4; i=i+2){
//     console.info('executed i = ', i, a[i])

// }
// console.info('--------------------')

// for(var i = 0; i < 4; i=i+1){
//     if (a[i]=="b"||a[i]=="c")
//         console.info('executed i = ', i, a[i])
// }

//  Create a array 1,2,... 10
//  Creat a loop to get array element
//  If the array element is even print "even: arrayElement"
//  If the array element is odd print "odd" : arrayElement"
// var even = 0
// var odd = 0
// var experamentalArray=[1,2,3,4,5,6,7,8,9,10,11];
// for (var arrayOddOrEven = 0; arrayOddOrEven < (experamentalArray.length); arrayOddOrEven=arrayOddOrEven+1){
//     var value  = experamentalArray[arrayOddOrEven];
//     var reminder = value %2;
//     if (reminder == 0){
//         even=even+1
//         //console.info("even",value)
//     }
//     else if (reminder == 1){
//         odd=odd+1
//         //console.info("odd",value,)
//     }
//}
// console.info(odd,even)

function typeOfnumber(numberList,numbertype){
    var even = [] 
    var odd = []
    for ( var listindex = 0 ; listindex < (numberList.length);listindex++){
        var value = numberList[listindex];
        var reminder = value %2;
        if (reminder==0)
            even.push(value)
        else if (reminder ==1)
            odd.push(value)
    }
    if (numbertype=="even")
        return even
    else if (numbertype== "odd")
        return odd
}

console.info(typeOfnumber([2,2,3],"even"))

