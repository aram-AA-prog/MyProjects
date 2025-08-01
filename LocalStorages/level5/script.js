let questions = [
    {
        harc: "ին՞չ կվերադարձնի typeof null_ը",
        tarberakner: ["object", "null", "undefiand", "number"],
        patasxan: "object"
    },

    {
        harc: "Ինչ է JavaScript-ում `let` փոփոխականը։",
        tarberakner: ["Պայմանական օպերատոր", "Տարր", "Փոփոխական", "Ֆունկցիա"],
        patasxan: "փոփոխական"
    },

    {
        harc: "Ինչ է անում 1++ ը",
        tarberakner: ["2", "1", "undefined", "NaN"],
        patasxan: "2"
    }
]
let level = 0
let score = 0
let h1 = document.createElement("h1")
let h1Div = document.createElement("div")
document.body.appendChild(h1Div)

function showQuestion(i) {
    let content = document.querySelector(".content")
    let quest = document.createElement("h1")
    quest.textContent = questions[i].harc
    content.appendChild(quest)
    h1.textContent = ""

    for (let j = 0; j < questions[i].tarberakner.length; j++) {
        let patasxan = document.createElement("button")
        patasxan.textContent = questions[i].tarberakner[j]
        content.appendChild(patasxan)

        patasxan.addEventListener("click", function () {
            if (patasxan.textContent.toLowerCase() === questions[i].patasxan.toLowerCase()) {
                setTimeout(() => {
                    h1.textContent = "Ճիշտ է"
                    h1.style.color = "green"
                    h1Div.appendChild(h1)
                }, 500)
                score++
                h1.textContent = ""

            } else {
                setTimeout(() => {
                    h1.textContent = "Սխալ է"
                    h1.style.color = "red"
                    h1Div.appendChild(h1)
                }, 500)
            }
            content.innerHTML = ""
            level++
            if (level < questions.length) {
                setTimeout(() => {
                    showQuestion(level)
                }, 1000)

            } else {
                setTimeout(() => {
                    h1Div.style.display = "none"
                }, 1500)

                // localStorage
                localStorage.setItem("user-score", score)
            }
        })
    }
}

if(localStorage.getItem("user-score")) alert(localStorage.getItem("user-score"));

showQuestion(level)
