const toDoList = ["First activity", "Second activity"];

let userActivity = undefined;

while (userActivity !== "quit" && userActivity !== "q") {
    userActivity = prompt("What do you want to do?");
        if(userActivity === "new" || userActivity === "n" ) {
            let newToDo = prompt("What do you want to add to the list?");
            toDoList.push(newToDo);
            console.log(`${newToDo} was added to the list.`);
        }
        else if (userActivity === "list" || userActivity === "l") {
            for(let i = 0; i < toDoList.length; i++) {
                console.log(`${i}: ${toDoList[i]}`);
            }
        }

        //Se introduces un array ---> parseInt convirteo en NaN ---> O splice elimina o index 0 cada vez que introduce texto o usuario!
        //Arreglase con Number.isNaN(deleteToDo) dentro de un bucle if/else para volver a preguntar decindo q non e valido:
        // if (!Number.isNaN(deleteToDo)) {
        //     const deleted = todos.splice(deleteToDo, 1);
        //     console.log(`Ok, deleted ${deleted[0]}`);
        // } else {
        //     console.log('Wrond index. Enter a valid number.')
        // }
        else if (userActivity === "delete" || userActivity === "d") {
            let deleteToDo = parseInt(prompt("Enter the index of the item you want to delete."));
            let deleted = toDoList.splice(deleteToDo, 1);
                console.log(`${deleted} was deleted.`);
        }
}
console.log("You quit the APP");
alert("Goodbye!");