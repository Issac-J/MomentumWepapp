const images = ["0.jpg", "1.jpg", "2.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const backgroundImageElement = document.createElement("img");

backgroundImageElement.src = `image/${chosenImage}`;

document.body.appendChild(backgroundImageElement);
