let name = document.querySelector("#name")
let price = document.querySelector("#price")
let vijak = document.querySelector("#vijak")
let btn = document.querySelector("#addBtn")
let select = document.querySelector(".selTxT")
let selTxT = document.querySelectorAll(".selTxT p")
let icon = document.querySelector("#icon")
let display = document.querySelector(".display")
let shah = document.querySelector("#shah")
let caxs = document.querySelector("#caxs")
let mnac = document.querySelector("#mnacord")
let delBtn = document.querySelector("#deletBtn")

icon.addEventListener("click", function () {
    if (select.style.display == "none") {
        select.style.display = "block"
    } else {
        select.style.display = "none"
    }
})

selTxT.forEach(function (el) {
    el.addEventListener("click", function () {
        vijak.value = el.textContent
        select.style.display = "none"
    })
})




let ctx = document.querySelector("#myCanvas").getContext("2d")
let chart;
let tracker = document.querySelector(".tracker")
let ul = document.createElement("ul")
tracker.appendChild(ul)

let elementsArray = JSON.parse(localStorage.getItem("element")) || []

function addArr() {
    elementsArray.push({
        Name: name.value,
        Price: +price.value,
        Vijak: vijak.value
    })
    localStorage.setItem("element", JSON.stringify(elementsArray))
}

delBtn.addEventListener("click", function () {
    localStorage.removeItem("element")
    if(chart){
        chart.destroy()
    }
    shah.textContent = `Շահույթ: 0 ֏`
    caxs.textContent = `Ծախս: 0 ֏`
    mnac.textContent = `Մնացորդ: 0 ֏`
    ul.innerHTML = ""
})
function updateDisplay() {
    let plyus = 0
    let minus = 0;
    if (name.value == "" || price.value == "" || vijak.value == "") {
        return
    }
    addArr()
    let color;

    for (let i = 0; i < elementsArray.length; i++) {
        let li = document.createElement("li")
        let label = elementsArray[i].Name
        let value = elementsArray[i].Price
        let v = elementsArray[i].Vijak


        if (v == "Շահույթ") {
            color = "rgba(0, 255, 0, 0.3)"
            shah.textContent = `Շահույթ:${value}֏`
            plyus += value
            li.textContent = `${label} — ${v}֏ (${v})`
            ul.appendChild(li)
        } else {
            color = "rgba(255, 0, 0, 0.3)"
            caxs.textContent = `Ծախս:-${value}֏`
            minus += value
            li.textContent = `${label} — ${value}֏ (${v})`
            ul.appendChild(li)
        }

        if (chart) {
            chart.destroy();
        }

        chart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: [label],
                datasets: [{
                    label: [label],
                    data: [value],
                    backgroundColor: color,
                    borderColor: color,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        })
    }
    let balance = plyus - minus
    mnac.textContent = `Մնացորդ։ ${balance}`

    name.value = ""
    price.value = ""
    vijak.value = ""


}

btn.addEventListener("click", updateDisplay)

window.addEventListener("load", function () {
    if (name.value !== "" || price.value !== "" || vijak.value !== "") {
        addArr()
    }
})