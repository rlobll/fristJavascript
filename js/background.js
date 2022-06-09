const images = ["rmdla1.jpeg", "dlfma2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `/img/${chosenImage}`;

document.body.appendChild(bgImage);
