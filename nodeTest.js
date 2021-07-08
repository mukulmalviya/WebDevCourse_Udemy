// const fs = require('fs');
// const folderName = process.argv[2] || 'Project'

const { range } = require('balanced-match');


// try {
//     fs.mkdirSync(folderName);
//     fs.writeFileSync(`${folderName}/indexasd.html`);
//     fs.writeFileSync(`${folderName}/ifsafa.css`);
//     fs.writeFileSync(`${folderName}/insd.js`);

// }

// catch (e) {
//     console.log("gone south!!");
// }

const prompt = require('prompt-sync')();
const n = prompt("Enter n")
let dp = []
for(let i=0; i<=n; i++)
    console.log(fib(i))

function fib(n){
    if(n==0 || n==1){
        return n
    }
    if(dp[n] !== null){
        return dp[n]
    }
    dp[n] = fib(n-1)+fib(n-2)
    return dp[n]
}





