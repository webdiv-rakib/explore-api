function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}

/**
 * 1. get the container element where you want to add the new elements
 * 2. create child element
 * 3. set innerText or innerHTMl
 * 4. appendChild
 */

function displayPost(posts) {
    const postContainer = document.getElementById('posts-container');
    for (const post of posts) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <h4>User-${post.userId}</h4>
            <h5>Post:${post.title}</h5>
            <p>${post.body}</p>
        `
        postContainer.appendChild(postDiv);

    }
}
loadPost();