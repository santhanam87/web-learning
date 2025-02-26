
function calculator(number1,number2,number3){
    if (number1=='add')
        return(number2+number3)
    if (number1=='subtract')
        return(number2-number3)
    if (number1=='multiply')
        return(number2*number3)
    if (number1=='divied')
        return(number2/number3)
}

    
var math = calculator ("multiply",90,100)
var math1 = calculator("subtract",89,78)
console.info (math1,math)
