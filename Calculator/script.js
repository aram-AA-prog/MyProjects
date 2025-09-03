let displayTxt = document.querySelector("#displayTxT")
let numDiv = document.querySelectorAll(".numbers button")
let clearBtn = document.querySelector("#clear")
let percentage = document.querySelector("#tokos")
let bajan = document.querySelector("#bajanac")
let angam = document.querySelector("#angam")
let res = document.querySelector("#havasar")
let plyus = document.querySelector("#plyus")
let minus = document.querySelector("#minus")
let story = document.querySelector("#story")
let secretDiv = document.querySelector(".secret")
let secretPtag = document.querySelector(".secretPtag")
let closeIcon = document.querySelector("#close")
let operators = document.querySelectorAll(".gorc button")
let display = ""


let save = JSON.parse(localStorage.getItem("story")) || []
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
    display = display.slice(0, -1)
});



operators.forEach(op => {
    op.addEventListener("click", function () {
        if (display === "" || display.slice(-1) === op.textContent) {
            return;
        }
        display += op.textContent
        displayTxt.textContent = op.textContent

    })
})


res.addEventListener("click", function () {
    save.push(`${displayTxt.textContent} = ${eval(display)}`)
    display = eval(display);
    displayTxt.textContent = display;
    localStorage.setItem("story", JSON.stringify(save))

    secretPtag.innerHTML = ""
    for (let i = 0; i < save.length; i++) {
        let pCont = document.createElement("p")
        pCont.style.backgroundColor = "rgba(226, 226, 226, 0.9"
        pCont.innerText = save[i]
        secretPtag.appendChild(pCont)
        secretDiv.appendChild(closeIcon)
        localStorage.removeItem("story")
    }
});

story.addEventListener("click", function () {
    secretDiv.style.display = "block"
    story.style.display = "none"
})


closeIcon.addEventListener("click", function () {
    secretDiv.style.display = "none"
    story.style.display = "block"
})


