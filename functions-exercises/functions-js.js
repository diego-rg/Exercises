//Comprobar si un número es par

//let number = parseInt(prompt("Introduce un número para comprobar si es par."));
//Non fai falta prompt, simplemente defines a función e logo chámala cambiando number polo valor

function isEven (number) {
    if (number % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

// Versión reducida:
// function isEven (number) {
//     return number % 2 === 0;
// }




//**********************************************************************************************************************************************************************
//Operación factorial (ej: 3! = 3 * 2* 1 = 6)

//let numberF = parseInt(prompt("Introduce un número para calcular su factorial"));

/*
let i = numberF - 1;

function factorial (numberF) {
    do {
        numberF = numberF * i;
        i--;
    } while (i>0);
    console.log(numberF);//Colócase aquí xa que: arriba=>saca un log por cada operación; abaixo=>queda fora da función e saca o numberF inicail
}

factorial(numberF);
*/

//Forma correcta de facelo xa que FACTORIAL DE 0 É IGUAL A 1 POR DEFINICIÓN. Parte de 1 
function factorial(num){
    let result = 1;
    for(var i = 2; i <= num; i++){
        result *= i;
    }
    return result;
  }




//**********************************************************************************************************************************************************************
//KebabToSnake: transforma os "-" por "_"

/*
let msg = prompt("Enter your message with - to fix it!");

function KebabToSnake (msg) {
    msg.replace("-", "_");
}

alert(KebabToSnake(msg));
*/


//replace non crea outro string, polo que hai que gardalo nuncha nova variable para sacalo
function kebabToSnake (msg) {
        let newMsg= msg.replace(/-/g , "_");
    return newMsg;
}