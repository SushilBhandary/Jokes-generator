 


const joke = document.querySelector('#joke') 
const jokeBtn = document.querySelector('#jokeBtn')

getapi()

async function getapi() {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    var data = await response.json();
    joke.innerHTML = data.value;
}

jokeBtn.addEventListener('click', getapi)
