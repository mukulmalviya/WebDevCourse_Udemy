const bcrypt = require('bcrypt');
let hashvar = '';

const hashPassword = async (pw) => {
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(pw, salt);
    console.log(salt);
    console.log(hash);
    hashvar = hash;
}

// const hashPassword = async (pw) => {
//     //Pass in the plain text password and the number of rounds:
//     const hash = await bcrypt.hash(pw, 12);
//     console.log(hash);
// }

const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw);
    if (result) {
        console.log("LOGGED YOU IN! SUCCESSFUL MATCH!")
    } else {
        console.log("INCORRECT!")
    }
}


async function a(){
    await hashPassword('monkey')
    await login('monkey', hashvar)
} 

a(); 
