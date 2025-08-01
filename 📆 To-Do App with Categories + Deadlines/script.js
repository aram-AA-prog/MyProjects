let name = document.querySelector("#taskName")
let cat = document.querySelector("#category")
let jam = document.querySelector("#jamket")
let addBtn = document.querySelector("#addBtn")
let icon = document.querySelector("#icon")
let list = document.querySelector(".list")
let listP = document.querySelectorAll(".list p")


icon.addEventListener("click", function () {
    if (list.style.display == "none") {
        list.style.display = "block"
    } else {
        list.style.display = "none"
    }
})

listP.forEach(p => {
    p.addEventListener("click", function () {
        cat.value = p.textContent
        list.style.display = "none"
    })
})

let tasks = JSON.parse(localStorage.getItem("tasks")) || []


function update() {
    name.value = ""
    cat.value = ""
    jam.value = ""
    let taskDiv = document.querySelector(".tasks")
    taskDiv.innerHTML = ""
    for (let i = 0; i < tasks.length; i++) {
        let pat = document.createElement("div")
        pat.classList = "patDiv"
        let sett = document.createElement("div")
        sett.classList = "settings"
        let complete = document.createElement("p")
        let remove = document.createElement("p")
        complete.textContent = "Mark Complete"
        remove.textContent = "Remove Task"
        remove.style.color = "red"
        
        complete.addEventListener("click", function () {
            pat.style.opacity = "0.6"
            pat.style.backgroundColor = " rgba(0, 255, 0, 0.05)"
            pat.style.border = "1px solid rgba(0, 255, 0, 0.8)"
        })
        
        let pName = document.createElement("p")
        let pCat = document.createElement("p")
        let pJam = document.createElement("p")
        
        pName.textContent = tasks[i].taskname
        pCat.textContent = tasks[i].category
        pJam.textContent = tasks[i].jamket
        
        remove.addEventListener("click", function () {
            deleteFunc(i)
        })
        
        taskDiv.appendChild(pat)
        pat.appendChild(pName)
        pat.appendChild(pCat)
        pat.appendChild(pJam)
        pat.appendChild(sett)
        sett.appendChild(complete)
        sett.appendChild(remove)
    }
}

function deleteFunc(index) {
    tasks.splice(index, 1)
    localStorage.setItem("tasks", JSON.stringify(tasks))
    update()
}

function add() {
    tasks.push(
        {
            taskname: name.value,
            category: cat.value,
            jamket: jam.value
        }
    )
    localStorage.setItem("tasks", JSON.stringify(tasks))
    update()
}

update()

