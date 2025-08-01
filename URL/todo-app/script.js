let name = document.querySelector("#taskName")
let cat = document.querySelector("#category")
let jam = document.querySelector("#jamket")
let btn = document.querySelector("#addBtn")
let iconBtn = document.querySelector("#icon")
let list = document.querySelector(".list")
let listP = document.querySelectorAll(".list p")

iconBtn.addEventListener("click", function () {
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

let url = new URL(window.location.href)

let tasks = []

if (url.searchParams.has("tasks")) {
  try {
    tasks = JSON.parse(url.searchParams.get("tasks"))
  } catch (e) {
    e
  }
}

function addtask() {
  tasks.push({
    taskName: name.value,
    category: cat.value,
    jamket: jam.value
  })
}


function updateURL() {
  let str = JSON.stringify(tasks)
  url.searchParams.set("tasks", str)
  window.history.replaceState({}, "", url.toString());
}

function add() {
  let taskDiv = document.querySelector(".tasks")
  let parse = JSON.parse(url.searchParams.get("tasks")) || []
  taskDiv.innerHTML = ""
  for (let i = 0; i < parse.length; i++) {
    let taskDisplay = document.createElement("div")
    taskDisplay.className = "patDiv"
    let pName = document.createElement("p")
    let pCat = document.createElement("p")
    let pJam = document.createElement("p")
    let del = document.createElement("button")

    del.textContent = "delete"
    del.addEventListener("click", function () {
      tasks.splice(i, 1)
      updateURL()
      add()
    })

    pName.textContent = parse[i].taskName
    pCat.textContent = parse[i].category
    pJam.textContent = parse[i].jamket


    taskDiv.appendChild(taskDisplay)
    taskDisplay.appendChild(pName)
    taskDisplay.appendChild(pCat)
    taskDisplay.appendChild(pJam)
    taskDisplay.appendChild(del)
  }

}


btn.addEventListener("click", function () {
  addtask()
  updateURL()
  add()
  name.value = ""
  cat.value = ""
  jam.value = ""
})

window.addEventListener("load", function () {
  add()
})

let searchInp = document.querySelector("#searchInp")
searchInp.addEventListener("input", function () {
  let disp = document.querySelectorAll(".patDiv")
  let value = this.value.toLowerCase()

  disp.forEach(el => {
    let p = el.querySelectorAll("p")
    let flag = false
    p.forEach(e => {
      e.style.display = "none"
    })
    p.forEach(e => {
      if (e.textContent.toLowerCase().includes(value)) {
        flag = true
        e.style.display = "block"
      }
    })
    if (flag) {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  })
})