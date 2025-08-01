function fetchPost() {
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(function (result) {
            if(!result.ok){
                throw new Error(`HTTP error! status: ${result.status}`)
            }
            return result.json()
        })
        .then(function(res){
            console.log("Post Data", res);
            return res
        })
        .catch(function(err){
            console.error(err);
        })
}

fetchPost()
