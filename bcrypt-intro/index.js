const bcrypt = require("bcrypt");

const hashPassword = async (pw) => {
    const salt = await bcrypt.genSalt(12);   //Pódese usar directamente const hash = await bcrypt.hash(pw, 12);
    const hash = await bcrypt.hash(pw, salt);//Pódese usar directamente const hash = await bcrypt.hash(pw, 12);
    console.log(salt);
    console.log(hash);
}

const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw);
    if(result) {
        console.log("Loged in")
    } else {
        console.log("Wrong password")
    }
}

// hashPassword("monkey");//Fai a pass co hash
login("monkey", "$2b$12$Auanq/s3U2.4ZLaBGS8hGuMe4PaxUMK7Ak6Cp2j/Gs8rJRaSw/wp.")//cCompara a pass coa que lle poñamos. Se poñemos a da función anterior aceptará