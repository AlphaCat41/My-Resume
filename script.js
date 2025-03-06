const myName = document.querySelector(".my-name")
const myNickname = document.querySelector(".my-nickname")
const myBirthday = document.querySelector(".my-birthday")
const address = document.querySelector(".address")
const btnTH = document.querySelector(".btn-th")
const btnEN = document.querySelector(".btn-en")

const dob = new Date("08/11/1998")
const currentDate = new Date()
let age
if (currentDate.getMonth() >= dob.getMonth()) {
    age = currentDate.getFullYear() - dob.getFullYear()
}
else {
    age = currentDate.getFullYear() - dob.getFullYear() - 1
}

btnEN.style.backgroundColor = "red"
myBirthday.innerHTML = `<strong>My birthday:</strong> 11 August 1998 (${age} years)`

function langTH() {
    myName.innerHTML = "ภักดี หนุนภักดี"
    myNickname.innerHTML = "<strong>ชื่อเล่น:</strong> ภัก"
    myBirthday.innerHTML = `<strong>วันเกิด:</strong> 11 สิงหาคม 2541 (${age} ปี)`
    address.innerHTML = "<strong>ที่อยู่:</strong> 63 ประชานิเวศน์ 3 ซ.25 ต.ท่าทราย อ.เมืองนนทบุรี จ.นนทบุรี 11000 ประเทศไทย"
    btnTH.style.backgroundColor = "red"
    btnEN.style.backgroundColor = "aqua"
}
function langEN() {
    myName.innerHTML = "Pakdee Hnoonpakdee"
    myNickname.innerHTML = "<strong>My nickname:</strong> Pak"
    myBirthday.innerHTML = `<strong>My birthday:</strong> 11 August 1998 (${age} years)`
    address.innerHTML = "<strong>Address:</strong> 63 Prachanivet 3 Rd, Soi 25, Thasai, Mueang Nonthaburi 11000 Thailand"
    btnTH.style.backgroundColor = "aqua"
    btnEN.style.backgroundColor = "red"
}

// myBirthday.innerHTML = `<strong>My birthday:</strong> 11 August 1998 (${age} years)`

// myName && myName.addEventListener("mouseover", () => {
//     myName.innerHTML = "ภักดี หนุนภักดี"
// })

// myName && myName.addEventListener("mouseout", () => {
//     myName.innerHTML = "Pakdee Hnoonpakdee"
// })

// myNickname && myNickname.addEventListener("mouseover", () => {
//     myNickname.innerHTML = "<strong>ชื่อเล่น:</strong> ภัก"
// })

// myNickname && myNickname.addEventListener("mouseout", () => {
//     myNickname.innerHTML = "<strong>My nickname:</strong> Pak"
// })

// myBirthday && myBirthday.addEventListener("mouseover", () => {
//     myBirthday.innerHTML = `<strong>วันเกิด:</strong> 11 สิงหาคม 2541 (${age} ปี)`
// })

// myBirthday && myBirthday.addEventListener("mouseout", () => {
//     myBirthday.innerHTML = `<strong>My birthday:</strong> 11 August 1998 (${age} years)`
// })

// address && address.addEventListener("mouseover", () => {
//     address.innerHTML = "<strong>ที่อยู่:</strong> 63 ประชานิเวศน์ 3 ซ.25 ต.ท่าทราย อ.เมืองนนทบุรี จ.นนทบุรี 11000 ประเทศไทย"
// })

// address && address.addEventListener("mouseout", () => {
//     address.innerHTML = "<strong>Address:</strong> 63 Prachanivet 3 Rd, Soi 25, Thasai, Mueang Nonthaburi 11000 Thailand"
// })
