let p1 =  new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve("Hello")
        }, 1000)
    })

let p2 = new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve("Aram")
        }, 2000)
    })

let p3 = new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve("Jan")
        }, 3000)
    })


Promise.all([p1, p2, p3])
    .then(results => console.log(results))
    .catch(err => console.error(err));
