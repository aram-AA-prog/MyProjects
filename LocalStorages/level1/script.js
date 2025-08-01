let btn = document.querySelector("#saveBtn")
let name = document.querySelector("#name")
function save() {
    localStorage.setItem("Username", name.value)
    name.value = ""
}
alert(localStorage.getItem("Username"))