let eldisplay = document.getElementById("display")
let arr2 = []

function savevalue(_inp){
    

    _inp = parseFloat(_inp)
    if (isNaN(_inp)){
        alert ("Please enter a number only!")
        return;
    }
    arr2.push(_inp)
    eldisplay.innerHTML = "Values entered are: " + arr2
    alert("The value you entered: " + _inp + " saved succesfully!")
}

let elButton = document.getElementById("btnGetValue")
elButton.addEventListener("click",function(){
    let elGetValue = document.getElementById("getvalue")
    savevalue(elGetValue.value)
})

function minMaxAvg(arr){
    min = arr[0]
    max = arr[0]
    let arr3 = []
    
    let sum = 0
    for(let i=0; i<arr.length;i++){
      sum += arr[i]
      if (min > arr[i]) {
        min = arr[i]
      }
      if (max < arr[i]){
        max = arr[i]
      }
      
    }
    avg = sum / arr.length
    arr3.push(min, max, avg)
    return arr3
  
    }


let elButton2 = document.getElementById("btnExecute")
elButton2.addEventListener("click",function(){
    elResult = minMaxAvg(arr2)
    let elMin = document.getElementById("onthefly");
    let elMax = document.getElementById("onthefly2");
    let elAvg = document.getElementById("onthefly3");
    if (typeof(elMin) != 'undefined' && elMin != null){
        elMin.remove();
    }
    if (typeof(elMax) != 'undefined' && elMax != null){
        elMax.remove();
    }
    if (typeof(elAvg) != 'undefined' && elAvg != null){
        elAvg.remove();
    }
    
    
    elMin = document.createElement("div");
    elMin.id = "onthefly";
    elMax = document.createElement("div");
    elMax.id = "onthefly2";    
    elAvg = document.createElement("div");
    elAvg.id = "onthefly3";               
    elMin.innerText = "The Min is: " + elResult[0];
    document.body.appendChild(elMin);
    elMax.innerText = "The Max is: " + elResult[1];
    document.body.appendChild(elMax);  
    elAvg.innerText = "The Avg is: " + elResult[2];   
    document.body.appendChild(elAvg); 

})