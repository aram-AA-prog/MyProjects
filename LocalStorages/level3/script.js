let tbody = document.getElementsByTagName("tbody")[0]
let btn = document.querySelector("#saveBtn")
let task = document.querySelector("#name")

let tasks = JSON.parse(localStorage.getItem("Taskname")) || []


function cucak() {
    tbody.innerHTML = ""
    for (let i = 0; i < tasks.length; i++) {
        let tr = document.createElement("tr")
        let td = document.createElement("td")
        
        tr.textContent = `Task ${i}`
        td.innerHTML = tasks[i]

        tbody.appendChild(tr)
        tr.appendChild(td)
    }
}


function add() {
    if (task.value !== "") {
        tasks.push(task.value)
        localStorage.setItem("Taskname", JSON.stringify(tasks))
        task.value = ""
        cucak()
    } else {
        alert("Enter Task")
    }
}

btn.addEventListener("click", cucak)

cucak()