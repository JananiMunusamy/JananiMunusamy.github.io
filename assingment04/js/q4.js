function checkPalindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {

        if (str[i] !== str[len - 1 - i]) {
            alert("It is not a palindrome word");
            return;
        }
    }
    alert("It is a palindrome word ");
}
let palBtn = document.getElementById("getPalindrome")
palBtn.addEventListener("click", function(){
    let getString = document.getElementById("getString")
    checkPalindrome(getString.value)
           
})