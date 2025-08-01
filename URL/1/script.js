// // ex1
// function findeURLSearchParms(url){
//     let fullURL = new URL(url)
//     let search = new URLSearchParams(fullURL.search)
//     let result = {}
//     for(let [key,value] of search){
//         result[key] = value
//     }
//     return result
// }

// let url = "https://example.com/page?name=John&age=25"
// let params = findeURLSearchParms(url)
// console.log(params);


// // ex2
// function buildURL(baseURL, params) {
//     let url = new URL(baseURL)
//     let parms = new URLSearchParams(params)
//     url.search = parms.toString()
//     return url.toString()
// }


// const baseURL = "https://example.com/page";
// const params = { name: "John", age: "25" };
// const finalURL = buildURL(baseURL, params);
// console.log(finalURL); 


// // ex3
// function isHTTPS(url) {
//     try {
//         let newURL = new URL(url)
//         return newURL.protocol === "https:"
//     } catch {
//         return false
//     }
// }


// const url1 = "https://example.com";
// const url2 = "http://example.com";
// console.log(isHTTPS(url1)); 
// console.log(isHTTPS(url2)); 

// ex4
// let btn = document.createElement("button")
// btn.textContent = "GO TO new Page"

// btn.style.padding = "10px 20px";
// btn.style.fontSize = "16px";
// btn.style.margin = "20px";

// function redirectToPage(url) {
//     window.open(url)
// }
// document.body.appendChild(btn)


// const newURL = "https://example.com/new-page";
// btn.addEventListener("click", function () {
//     redirectToPage(newURL)
// })