

var balance = 100;

function withdraw(a){
    if (balance < a)
   return ("overdraft")
   else if (balance > a) 
    return (balance - a)
   else if (balance==a)
    return (0)
}

function diposit(a){
 return (balance + a)
}
var money=diposit(10)
console.info (money)
var money1=withdraw(10)
console.info (money1)

    // var prodects = 3

// function buy(numberOfProdects){
//     if (prodects > numberOfProdects)
//         return (prodects - numberOfProdects)
//     else if (prodects < numberOfProdects)
//         return ("out of stock")
// }
// function make(numberOfProdects){
//     return (prodects + numberOfProdects)
// }
// var bizness = make(1)
// var bizness1 = buy(1)
// console.info (bizness,bizness1)


var productA = 5
var productB = 10
var productC = 20

function buyProduct1(numberOfProdects){
    if (productA > numberOfProdects)
        return (productA - numberOfProdects)
    else if (productA < numberOfProdects)
        return ("out of stock") }

//function mfgproduct1(numberOfProdects){
  //  return (productA + numberOfProdects)
//}

// var costemer1 = mfgproduct1 (2)
// console.info (costemer1)




function buyProduct2(numberOfProdects) {
    if (productB > numberOfProdects)
        return (productB - numberOfProdects)
    else if (productB < numberOfProdects)
        return ("out of stock") }

//function mfgproduct2(numberOfProdects){
       // return (productB+ numberOfProdects)
  //  }
    // var costemer2 = mfgproduct2 (7)
    // console.info (costemer2)



    
    function buyProduct3(numberOfProdects) {
        if (productC > numberOfProdects)
            return (productC - numberOfProdects)
        else if (productC < numberOfProdects)
            return ("out of stock") }

        // function mfgproduct3(numberOfProdects){
        //     return (productC + numberOfProdects)
        // }
      
        // var costemer3 = mfgproduct3 (18)
        // console.info (costemer3)
        

function buyProduct(prodectType,count){
  if (prodectType=="a")
   return buyProduct1(count)
  else if (prodectType=="b")
    return buyProduct2 (count)
  else if (prodectType =="c")
    return buyProduct3 (count)
}


console.info(buyProduct("c",1007))
