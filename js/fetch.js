// from JSON website

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => console.log(response)) //.json in not similar but close toJSON.parse
// .then(json => console.log(json))

// fetching by self
// fetch(url)
//     .then(response => response.json())
//     .then(json => console.log(json))

function loadData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1'
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
}
