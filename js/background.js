const images = ["0.jpg", "1.jpg", "2.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

// document.body.style.backgroundImage = `url('/image/${chosenImage}')`;
// document.body.style.background =
//   "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8))";

document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/image/${chosenImage}')`;
