let inp = document.querySelector("#timerInput")
let timerDisplay = document.querySelector("#timer")
let stop = document.querySelector("#stopBtn")
let reset = document.querySelector("#resetBtn")
let start = document.querySelector("#startBtn")

let interval
let totalSecond = 0

function updateDisplay(second) {
    let hour = Math.floor(second / 3600).toString().padStart(2, "0")
    let min = Math.floor((second % 3600) / 60).toString().padStart(2, "0")
    let sec = Math.floor(second % 60).toString().padStart(2, "0")
    timerDisplay.textContent = `${hour}:${min}:${sec}`
}

start.addEventListener("click", function () {
    if (interval) return
    let minute = Math.floor(+inp.value * 60)
    totalSecond = minute
    interval =
        setInterval(function () {
            inp.value = ""
            totalSecond--
            updateDisplay(totalSecond)
            if (totalSecond <= 0) {
                clearInterval(interval)
                interval = undefined
                timerDisplay.textContent = "Ժամանակը լրացավ"
            }
        }, 1000)
})

reset.addEventListener("click", function () {
    clearInterval(interval)
    interval = undefined
    timerDisplay.textContent = "00:00:00"
})

stop.addEventListener("click", function () {
    if (!interval) {
        interval = setInterval(function () {
            inp.value = ""
            totalSecond--
            updateDisplay(totalSecond)
            if (totalSecond <= 0) {
                clearInterval(interval)
                interval = undefined
                timerDisplay.textContent = "Ժամանակը լրացավ"
            }
        }, 1000)
        stop.textContent = "Stop"
    }else{
        clearInterval(interval)
        interval = undefined
        stop.textContent = "Start"
    }
})