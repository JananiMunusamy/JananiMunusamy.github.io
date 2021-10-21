function factor5(_inp){
    _inp = parseFloat(_inp)
    if (isNaN(_inp)){
        alert ("Please enter a number !")
        return;
    }
    
    let total = _inp
    let next = _inp
   
    for (let i=1; i<=4; i++){
        next = _inp - i
        total = total * next
    }
    alert("The factorial of 5 is: " + total)
}

let getBtn = document.getElementById("getFactorial")
getBtn.addEventListener("click", function(){
    let getNumber = document.getElementById("getNumber")
    factor5(getNumber.value)
})