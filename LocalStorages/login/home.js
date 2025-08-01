// home.js
let cont = document.querySelector("#homecontent")
let h1 = document.createElement("h1")
let logout = document.createElement("button")
logout.textContent = "Logout"
logout.style.width = "200px"
h1.textContent =`Hello ${localStorage.getItem("Username")} Jan`
cont.appendChild(h1)
cont.appendChild(logout)


logout.addEventListener("click", function(){
    localStorage.clear()
    window.location = "login.html"
})
