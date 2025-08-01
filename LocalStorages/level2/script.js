let body = document.body
let selCol = document.querySelector("#color")
let btn = document.querySelector("#btn")

function select(){
    localStorage.setItem("color", selCol.value)
}
body.style.backgroundColor = localStorage.getItem("color")
 