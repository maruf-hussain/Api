// function loadData2()  {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => console.log(data))
// }

// function loadComment() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => displayComment(data))
// }

// function displayComment(data){
// console.log(data);
// }

// function loadComment2(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => displayComment2(data)) 
// }

// function displayComment2(data){
   
//     const ul = document.getElementById('user-list');
//     for(const user of data){
//         const li = document.createElement('li');
//         li.innerText = user.name;
//         ul.appendChild(li);
//     }
// }

function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
};

// function displayPost(data){
//     const post = document.getElementById('user-container')
//     for(user of data ){
//         const h4 = document.createElement('h4');
//         h4.innerText = user.body;
//         post.appendChild(h4);
//     }
// }

function displayPost(posts){
    const postContainer = document.getElementById('post-container')
    for(const post of posts){
        const postDiv = document.createElement('div');
        postDiv.classList.add('post')
        postDiv.innerHTML =`
        <h3>User-${post.userId}</h3>
        <h4>${post.title}</h4>
        <h5>${post.body}</h5>

        `;

postContainer.appendChild(postDiv);

    }
};
loadPost()