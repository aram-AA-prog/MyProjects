let displayTxt = document.querySelector("#displayTxT")
let numDiv = document.querySelectorAll(".numbers button")
let clearBtn = document.querySelector("#clear")
let tokos = document.querySelector("#tokos")
let bajan = document.querySelector("#bajanac")
let angam = document.querySelector("#angam")
let res = document.querySelector("#havasar")
let plyus = document.querySelector("#plyus")
let minus = document.querySelector("#minus")
let display = ""


numDiv.forEach(btn => {
    btn.addEventListener("click", function () {
        if (btn.textContent !== "=") {
            display += btn.textContent
        }
        displayTxt.textContent = display
    })

});


clearBtn.addEventListener("click", function () {
    displayTxt.textContent = displayTxt.textContent.slice(0, -1);
    display = ""
});



tokos.addEventListener("click", function () {
    display += tokos.textContent
    displayTxt.textContent = tokos.textContent
})

bajan.addEventListener("click", function () {
    display += bajan.textContent
    displayTxt.textContent = bajan.textContent
})

angam.addEventListener("click", function () {
    display += angam.textContent
    displayTxt.textContent = angam.textContent
})

plyus.addEventListener("click", function () {
    display += plyus.textContent
    displayTxt.textContent = plyus.textContent
})

minus.addEventListener("click", function () {
    display += minus.textContent
    displayTxt.textContent = minus.textContent
})

let mas1;
let mas2;

res.addEventListener("click", function () {
    for (let i = 0; i < display.length; i++) {
        let tokosSearch = tokos.textContent
        let tokosI = display.indexOf(tokosSearch)

        let bajanSearch = bajan.textContent
        let bajanI = display.indexOf(bajanSearch)

        let angamSearch = angam.textContent
        let angamI = display.indexOf(angamSearch)

        let plyusSearch = plyus.textContent
        let plyusI = display.indexOf(plyusSearch)

        let minusSearch = minus.textContent
        let minusI = display.indexOf(minusSearch)

        if (display[i] == "%") {
            mas1 = display.slice(0, tokosI)
            mas2 = display.slice(tokosI + 1, display.length)
            display = (Number(mas1) * Number(mas2)) / 100
            displayTxt.textContent = (Number(mas1) * Number(mas2)) / 100

        } else if (display[i] == "/") {
            mas1 = display.slice(0, bajanI)
            mas2 = display.slice(bajanI + 1, display.length)
            display = Number(mas1) / Number(mas2)
            displayTxt.textContent = Number(mas1) / Number(mas2)

        } else if (display[i] == "*") {
            mas1 = display.slice(0, angamI)
            mas2 = display.slice(angamI + 1, display.length)
            display = Number(mas1) * Number(mas2)
            displayTxt.textContent = Number(mas1) * Number(mas2)
        } else if (display[i] == "+") {
            mas1 = display.slice(0, plyusI)
            mas2 = display.slice(plyusI + 1, display.length)
            display = Number(mas1) + Number(mas2)
            displayTxt.textContent = Number(mas1) + Number(mas2)
        } else if (display[i] == "-") {
            mas1 = display.slice(0, minusI)
            mas2 = display.slice(minusI + 1, display.length)
            display = Number(mas1) - Number(mas2)
            displayTxt.textContent = Number(mas1) - Number(mas2)
        }

    }
})






