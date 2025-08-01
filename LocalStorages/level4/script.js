let name = document.querySelector("#name")
let sBtn = document.querySelector("#savebtn")
let dBtn = document.querySelector("#delet")

function  save() {
    localStorage.setItem("name", name.value)
    name.value = ""
}

if(localStorage.getItem("name")){
    alert(`Բարև ${localStorage.getItem("name")}`)
}

function del(){
    localStorage.removeItem("name")
    alert("Elements was deleted!")
}