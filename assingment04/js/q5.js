const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
    let count = 0;

    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    return count
}
let vowBtn = document.getElementById("getVowels")
vowBtn.addEventListener("click", function(){
    let getString = document.getElementById("getString")
    let a = countVowel(getString.value)
    
    alert("Total vowels that in the word is: "+ a + " vowels")
           
})