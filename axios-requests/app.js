// //axios con promesas
// axios.get('https://api.cryptonator.com/api/ticker/tel-usd')
// .then(res => {//Se éxito
//     console.log("Success!");
//     console.log(res.data.ticker.price);
// })
// .catch(err =>{//Se error
//     console.log("Error!");
//     console.log(err);
// })

// //axios con async await
// const getTelcoin = async() => {
//     try {
//         const res = await axios.get('https://api.cryptonator.com/api/ticker/tel-usd')
//         console.log(res.data.ticker.price);
//     }
//     catch (err) {
//         console.log("Error!", err);
//     }
// }

// getTelcoin();


//Jokes
const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI)
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    } catch (e) {
        return "NO JOKES AVAILABLE! SORRY :("
    }

}

button.addEventListener('click', addNewJoke)