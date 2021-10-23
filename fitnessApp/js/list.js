let refreshNowBtn = document.getElementById("refreshNow")
refreshNowBtn.addEventListener("click", function () {
    GetBooking()
})

function GetBooking(){
    let url='https://api.sheety.co/41fc605865c2b3b90427c390bc428207/fitnessApp/sheet1';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // Do something with the data
            console.log(json.bookings);

            let bookingNameList = document.getElementById("bookingNameList")
            let bookingIds = []

            //delete all rows in the table
            for (let k = bookingNameList.rows.length - 1; k > 0; k--) {
                bookingNameList.deleteRow(k)
            }
            //load all rows from Sheety API
            for (let i = 0; i < json.sheet1.length; i++) {
                let gDate = json.sheet1[i].date;
                let gTime = json.sheet1[i].time;
                let gService = json.sheet1[i].service;
                let gName = json.sheet1[i].name;
                let gEmail = json.sheet1[i].email;
                let gPhoneno = json.sheet1[i].phoneNum;
                let gId = json.sheet1[i].id;
                let btnId = "delete" + gId;

                let row = bookingNameList.insertRow(bookingNameList.rows.length)
                row.insertCell(0).innerHTML = gId
                row.insertCell(1).innerHTML = gDate
                row.insertCell(2).innerHTML = gTime
                row.insertCell(3).innerHTML = gService
                row.insertCell(4).innerHTML = gName
                row.insertCell(5).innerHTML = gEmail
                row.insertCell(6).innerHTML = gPhoneno
                row.insertCell(7).innerHTML = "<button id= '" + btnId + "' type='button' class='btn btn-danger'>Delete</button>"

                bookingIds.push(btnId)

            }
            for (let j = 0; j < bookingIds.length; j++) {
                let el = document.getElementById(bookingIds[j])
                el.addEventListener("click", function () {
                    let theId = el.id.replace("delete", "")
                    Deletesheet1(theId)
                })
            }
        });
}

function Deletesheet1(id) {
    let url = 'https://api.sheety.co/41fc605865c2b3b90427c390bc428207/fitnessApp/sheet1/' + id;
    fetch(url, {
        method: 'DELETE',
    })
        .then(() => {
            alert("Record id " + id + "deleted!")
            GetBooking()
        });
}
