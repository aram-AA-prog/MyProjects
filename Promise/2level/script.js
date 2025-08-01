function getUserData(id) {
    return new Promise((resolve, reject) => {
        if (id > 0) {
            resolve(id)
        } else {
            reject("Invalid ID")
        }
    })
}

let p = getUserData(5)
let p2 = getUserData(-6)

p.then(function (result) {
    console.log(result);
}).catch(function (result) {
    console.log(result);
})

p2.then(function (result) {
    console.log(result);
}).catch(function (result) {
    console.log(result);
})
