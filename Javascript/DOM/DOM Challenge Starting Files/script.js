document.querySelector('ul').lastElementChild.innerHTML = '3310';

document.querySelector('#title').classList.add("huge");


document.querySelector('h1').innerHTML = "<em>Welcome</em>";

document.querySelector('ul em').textContent = '2nd';

console.log(document.querySelector('a').attributes);

let google = document.querySelector('a').getAttribute('href');
console.log(google);


document.querySelector('a').textContent = 'ChatGPT';
document.querySelector('a').setAttribute('href', 'https://www.chatgpt.com');