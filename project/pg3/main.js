





// dom
var email = document.getElementById('email')
var password = document.getElementById('password')
var ten = document.getElementById('name')
var tuoi = document.getElementById('age')
var dt = document.getElementById('phone')
var gen = document.getElementById('gen')
var btn = document.getElementById('btn')







var email2 = document.getElementById('email2')
var password2 = document.getElementById('password2')
var btn2 = document.getElementById('btn2')

// 

btn.addEventListener('click', function () {
    console.log(ten.value)
    console.log(tuoi.value)
    console.log(dt.value)
    console.log(gen.value)
    console.log(email.value)
    console.log(password.value)
    if (ten.value == "") {
        alert('Ten khong duoc de trong')
    }
    else if (tuoi.value == "") {
        alert('tuoi khong duoc de trong')
    }
    else if (dt.value == "") {
        alert('dien thoai khong duoc de trong')
    }
    else if (gen.value == "") {
        alert('gioi tinh khong duoc de trong')
    }
    else if (email.value == "") {
        alert('email khong duoc de trong')
    }
    else if (password.value == "") {
        alert('mat khau khong duoc de trong')
    }
    else {
        alert('ban da hoan thanh')
    }

})



btn2.addEventListener('click', function () {
    console.log(email2.value)
    console.log(password2.value)


    if (email2.value == "") {
        alert('email khong duoc de trong')
    }
    else if (password2.value == "") {
        alert('mat khau khong duoc de trong')
    }
    else {
        alert('ban da hoan thanh')
    }

})