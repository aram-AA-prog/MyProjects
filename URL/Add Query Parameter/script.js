function setNewParams(url,key,value){
    let newURL = new URL(url)
    newURL.searchParams.set(key,value)
    return newURL.toString()
}
let originalURL = "https://example.com/products?category=books";
let updatedURL = setNewParams(originalURL, "page", "3");

console.log(updatedURL);

