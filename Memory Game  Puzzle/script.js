window.addEventListener("DOMContentLoaded", function () {
    const emojis = ["🍎", "🍌", "🍇", "🍓", "🍒", "🍉", "🍍", "🥝"];
    const cards = [...emojis, ...emojis.reverse()];

    let content = document.querySelector(".content")

    let arr = []

    for (let i = 0; i < cards.length; i++) {
        let box = document.createElement("div")
        let p = this.document.createElement("p")
        content.appendChild(box)
        box.appendChild(p)
        p.classList.add("txt")
        box.classList.add("boxes")

        box.addEventListener("click", function () {
            if (p.innerHTML !== "") return;
            p.textContent = cards[i]
            arr.push(p)
            if (arr[0].textContent == arr[1].textContent) {
                arr = []
            } else {
                setTimeout(() => {
                    arr[0].textContent = "";
                    arr[1].textContent = "";
                    arr = [];
                }, 400);
            }
        })
    }

})

function refresh(){
    window.location.reload();
}