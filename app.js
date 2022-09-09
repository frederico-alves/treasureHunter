$ =(queryString) => document.querySelector(queryString);

$('body').style.backgroundImage = 'url(map.jpg)';
$('body').style.backgroundRepeat = 'no-repeat';


// Returns a random integer from 0 to 10:
// let randomNumber = Math.floor(Math.random() * 11);

// A function that returns a random number between min and max 
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Add coins randomly in the map
for (let i = 0; i < getRandomNumber(2, 30); i++) {
    let leftMargin = Math.floor(Math.random() * (Math.floor(650) - Math.ceil(10) + 1)) + Math.ceil(10);
    let topMargin = Math.floor(Math.random() * (Math.floor(400) - Math.ceil(10) + 1)) + Math.ceil(10);
    let div = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute('src', 'coin.png');
    img.setAttribute('height', '50px');
    div.appendChild(img);
    div.style.position = 'absolute';
    div.style.left = leftMargin;
    div.style.top = topMargin;
    $('body').appendChild(div);
}







