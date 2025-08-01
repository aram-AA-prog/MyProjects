let name = document.querySelector("#name")
let pas = document.querySelector("#pas")

function login() {
    if (pas.value.length >= 8) {
        window.location = "home.html"
        localStorage.setItem("Username", name.value)
        localStorage.setItem("Passwor", pas.value)
    } else {
        alert("password was wrong Enter 8 or more symbol")
    }
    name.value = ""
    pas.value = ""
}