const quiz = [
    {
        question: "Ի՞նչ կվերադարձնի `typeof null`-ը JavaScript-ում։",
        answers: ["Object", "null", "undefiand", "number"],
        correct: "object"
    },
    {
        question: "Ինչ է JavaScript-ում `let` փոփոխականը։",
        answers: ["Պայմանական օպերատոր", "Տարր", "Փոփոխական", "Ֆունկցիա"],
        correct: "փոփոխական"
    },

    {
        question: "Ինչ է անում 1++ ը",
        answers: ["2", "1", "undefined", "NaN"],
        correct: "1"
    }
];
window.addEventListener("DOMContentLoaded", function () {
    let questions = document.querySelector(".question")
    let answer = document.querySelector(".answer")
    let score = 0
    let level = 0


    function showQuestion(i) {
        questions.innerHTML = ""
        answer.innerHTML = ""

        let questionTex = document.createElement("p")
        questionTex.innerHTML = quiz[i].question
        questions.appendChild(questionTex)
        for (let j = 0; j < quiz[i].answers.length; j++) {
            let btn = document.createElement("button")
            btn.innerHTML = quiz[i].answers[j]
            answer.appendChild(btn)

            // addEventListener
            btn.addEventListener("click", function () {
                if (patasxan    .textContent.toLowerCase() === quiz[i].correct.toLowerCase()) {
                    btn.style.backgroundColor = "green"
                    score++
                    
                    questions.innerHTML = ""
                    answer.innerHTML = ""
                } else {
                    btn.style.backgroundColor = "gray"
                    questions.innerHTML = ""
                    answer.innerHTML = ""
                }
                level++
                if(level < quiz.length){
                    setTimeout(() => {
                        showQuestion(level)
                    },1000)
                }else{
                    questions.innerHTML = `Քո միավորը՝ ${score} / ${quiz.length}`;
                    questions.style.backgroundColor = "red"
                    questions.style.color = "white"
                    questions.style.width = "600px";
                    questions.style.height = "100px";
                    questions.style.textAlign = "center"
                    answer.innerHTML = "";
                }
            })
        }

        
    }
    showQuestion(level)
})

