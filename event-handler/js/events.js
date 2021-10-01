function transformUppercase(_val){
    return _val.toUpperCase();
}

let elNamaPengguna = document.getElementById("namaPengguna")
elNamaPengguna.addEventListener("keyup",function(){
    elNamaPengguna.value=transformUppercase(elNamaPengguna.value)
})

function checkPassword(){
    let elKatalaluan = document.getElementById("katalaluan")
    let pass_val = elKatalaluan.value

    if(pass_val.length > 5){
        alert("Password check..Ok!")
    }else{
        alert("Password too short!")
    }
}

//traditional DOM event handler
let elkl = document.getElementById("katalaluan")
elkl.onblur = checkPassword