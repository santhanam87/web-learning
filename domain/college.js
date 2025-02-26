function gender(a){
    if (a=="male")
        return "boy"
    else if (a=="female")
        return "girl"
}
function dorms(a,b){
    if (a=="male")
        return b + "boy uniform"
    else if (a=="female")
        return b + "girl uniform"
}
function games(a,b){
    if (a=="male")
        return b + "boy game"
    else if (a=="female")
        return b + "girl game"
}
function collage(a){
     var gender1 = gender(a)
    var dorms1 = dorms(a,gender1)
return games (a,dorms1)
}
console.info (collage("male"))