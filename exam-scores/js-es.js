const testScores = {
    pepe: 65,
    pedro: 91,
    paula: 77,
    paco: 88
}

//Sacar os values do object literal para un array
let scores = Object.values(testScores);

//Sumar ese array para obter o total
let totalScore = 0;
for (let score of scores) {
    totalScore += score;
}

//facer media usando o tamaño do array
let averageScore = totalScore / scores.length;
alert(`The average score of the test in this group was ${averageScore}`);