const images = ["rmfla1.png", "dlfma2.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `/img/${chosenImage}`;

//얘는 못하겠당~
