let bookNowBtn = document.getElementById("bookNow")
bookNowBtn.addEventListener("click", function () {

    let userDate = document.getElementById("userDate")
    let userDateVal = userDate.value

    let userTime = document.getElementById("userTime")
    let userTimeVal = userTime.value

    let userService = document.getElementById("userService")
    let userServiceVal = userService.value

    let userName = document.getElementById("userName")
    let userNameVal = userName.value

    let userEmail = document.getElementById("userEmail")
    let userEmailVal = userEmail.value

    let userPhone = document.getElementById("userPhone")
    let userPhoneVal = userPhone.value

    BookNow(userDateVal, userTimeVal, userServiceVal, userNameVal,userEmailVal,userPhoneVal)
})

function BookNow(userDate, userTime, userService, userName,userEmail,userPhone) {
    let url = 'https://api.sheety.co/41fc605865c2b3b90427c390bc428207/fitnessApp/sheet1';
    let body = {
        sheet1: {
            date: userDate,
            time: userTime,
            service: userService,
            name: userName,
            email: userEmail,
            phoneNum: userPhone
        }
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => response.json())
        .then(json => {
            // Do something with object
            console.log(json.sheet1);
            alert(json.sheet1.name + " added in the list!")

        });
}