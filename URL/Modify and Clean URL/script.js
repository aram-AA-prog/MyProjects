function cleanURl(Url, protocol, hostname, key="", value ="", hash="") {
    let url = new URL(Url)
    url.protocol = protocol
    url.hostname = hostname
    url.search = ""
    url.hash = hash
    return url.toString()
}

let originalURL = "https://example.com/products?category=books"
let protocol = "https:"
let hostname = "example.org"

console.log(cleanURl(originalURL, protocol, hostname));
