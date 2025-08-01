function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve("Done")
        }, ms)
    })
}

delay(2000).then(result => console.log(result)); 