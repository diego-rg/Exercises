/* https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/ */

// Create one pokemon image by number
/*
const container = document.querySelector("#container"); // Creates the container
const newImg = document.createElement("img"); // Creates the empty img
newImg.src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png"; // Adds the src to the img
container.appendChild(newImg); // Adds the img to the document as a child of the container
*/

// Create the full list
/*
const container = document.querySelector("#container");
const newUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"; // The url of each img will be different, so we create delete the last part
for(let i=1; i<=151; i++) { // Loop to get all images
    const newImg = document.createElement("img");
    newImg.src= `${newUrl}${i}.png` // Template literal to add the last part to each url
    container.appendChild(newImg);
}
*/

// Create a custom full list
const container = document.querySelector("#container");
const newUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
for(let i=1; i<=151; i++) {
    const pokeHouse = document.createElement("div"); // Creates a div for the content
    const identifier = document.createElement("span"); // Creates a div for the number of each pokemon
    identifier.innerText = `pokemon ${i}`; // Creates the number for each pokemon
    const newImg = document.createElement("img");
    newImg.src= `${newUrl}${i}.png`
    pokeHouse.appendChild(newImg); // Adds the img to the div
    pokeHouse.appendChild(identifier); // Adds the identifier to the div
    container.appendChild(pokeHouse); // Adds pokehouse to the main container
}