function calculate(num) {
    return new Promise((resolve, reject) => {
        resolve(num)
    }).then(function (result) {
        return (result + 10) * 2
    })
}

calculate(5).then(result => console.log(result));