let displayTxt = document.querySelector("#displayTxT")
let numDiv = document.querySelectorAll(".numbers button")
let clearBtn = document.querySelector("#clear")
let  percentage = document.querySelector("#tokos")
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



 percentage.addEventListener("click", function () {
    if (display === "" || display.slice(-1) ===  percentage.textContent) {
        return;
    }
    display += tokos.textContent
    displayTxt.textContent = tokos.textContent
})

bajan.addEventListener("click", function () {
    if (display === "" || display.slice(-1) === bajan.textContent) {
        return;
    }
    display += bajan.textContent
    displayTxt.textContent = bajan.textContent
})

angam.addEventListener("click", function () {
    if (display === "" || display.slice(-1) === angam.textContent) {
        return;
    }
    display += angam.textContent
    displayTxt.textContent = angam.textContent
})

plyus.addEventListener("click", function () {
    if (display === "" || display.slice(-1) === plyus.textContent) {
        return;
    }
    display += plyus.textContent
    displayTxt.textContent = plyus.textContent
})

minus.addEventListener("click", function () {
    if (display === "" || display.slice(-1) === minus.textContent) {
        return;
    }
    display += minus.textContent
    displayTxt.textContent = minus.textContent
})



res.addEventListener("click", function () {

    let numbers = /\d+/g;
    let operator = /[+\-*/%]/g;
    let hasOp = display.match(operator)
    let hasNum = display.match(numbers).map(Number)
    let result = Number(hasNum[0])

    for (let i = 0; i < hasOp.length; i++) {
        let nextNum = hasNum[i + 1]

        if (!hasOp || !hasNum) return

        if (hasOp[i] === "+") {
            result += nextNum
        } else if (hasOp[i] === "-") {
            result -= nextNum
        } else if (hasOp[i] === "*") {
            result *= nextNum
        } else if (hasOp[i] === "/") {
            result /= nextNum
        } else if (hasOp[i] === "%") {
            result = (hasNum[i] * hasNum[i + 1]) / 100
        }
    }

    display = result
    displayTxt.textContent = result
})



