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
let closeIcon = document.querySelector("#close")
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



percentage.addEventListener("click", function () {
    if (display === "" || display.slice(-1) === percentage.textContent) {
        return;
    }
    display += percentage.textContent
    displayTxt.textContent = percentage.textContent
    
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
    save.push(`${displayTxt.textContent} = ${eval(display)}`)
    display = eval(display);
    displayTxt.textContent = display;
    localStorage.setItem("story", JSON.stringify(save))

    secretDiv.innerHTML = ""
    for (let i = 0; i < save.length; i++) {
        let pCont = document.createElement("p")
        pCont.innerText = save[i]
        secretDiv.appendChild(pCont)
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


