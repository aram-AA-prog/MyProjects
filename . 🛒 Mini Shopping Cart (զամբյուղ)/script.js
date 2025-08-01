window.addEventListener("DOMContentLoaded", function () {
    let add = document.querySelector(".addBtn")
    let productCont = document.querySelector(".product")
    let inp = document.querySelector("#search")



    add.addEventListener("click", function () {
        let prod = document.createElement("p")
        prod.classList.add("prod")
        prod.textContent = `${inp.value} 200$`
        productCont.appendChild(prod)
        inp.value = ""
    }
    )
})

function refresh() {
    window.location.reload()
}