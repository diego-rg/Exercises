// //Request con XML, non usar, antiguo
// const firstRequest =new XMLHttpRequest();//crea request

// firstRequest.onload = function() {//función se carga
//     console.log("Done!");
//     console.log(this);
// }

// firstRequest.onerror = function() {//función se error
//     console.log("Error!");
//     console.log(this);
// }

// firstRequest.open("GET", "https://api.cryptonator.com/api/ticker/ada-usd");//abrir e enviar
// firstRequest.send();


// //sacar datos concretos
// const secondRequest =new XMLHttpRequest();

// const adaHeader = document.querySelector(".header__coin-value");

// secondRequest.onload = function() {
//     console.log("Done!");
//     const adaData = JSON.parse(this.responseText);//Pasar JSON a objeto
//     adaHeader.innerText = `The ADA price today is ${adaData.ticker.price}$`;//Sacar  valor ddo precio do objeto
// }

// secondRequest.onerror = function() {
//     console.log("Error!");
//     console.log(this);
// }

// secondRequest.open("GET", "https://api.cryptonator.com/api/ticker/ada-usd");
// secondRequest.send();


// //Request con fetch api usando promises
// fetch("https://api.cryptonator.com/api/ticker/btc-usd")
//     .then(resolve =>{
//         console.log("Waiting to parse...", resolve);
//         return resolve.json();
//     })
//     .then(data => {
//         console.log("Data parsed!", data);
//         console.log(data.ticker.price);
//     })
//     .catch(error => {
//         console.log("We found an error!", error);
//     })


//  //Request con fetch api usando async await
// const ethereumPrice = async() => {
//     const res = await fetch("https://api.cryptonator.com/api/ticker/btc-usd");
//     const data = await res.json();
//     console.log(data.ticker.price);
// }

const fetchBitcoinPrice = async () => {
    try {
        const res = await fetch("https://api.cryptonator.com/api/ticker/btc-usd");
        const data = await res.json();
        console.log(data.ticker.price)
    } catch (e) {
        console.log("SOMETHING WENT WRONG!!!", e)
    }
}