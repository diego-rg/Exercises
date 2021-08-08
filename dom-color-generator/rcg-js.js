const colorsButton = document.querySelector("#colorsButton");
const rgbText = document.querySelector("h1");
colorsButton.addEventListener("click", function() {
    const bgColor = document.querySelector("body");
    const rgb1 = Math.floor(Math.random() * (255 - 0)) + 0;
    const rgb2 = Math.floor(Math.random() * (255 - 0)) + 0;
    const rgb3 = Math.floor(Math.random() * (255 - 0)) + 0;
    const randromColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
    bgColor.style.backgroundColor = randromColor;
    rgbText.innerText = randromColor;
})