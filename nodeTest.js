const fs = require('fs');
const folderName = process.argv[2] || 'Project'


try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/indexasd.html`);
    fs.writeFileSync(`${folderName}/ifsafa.css`);
    fs.writeFileSync(`${folderName}/insd.js`);

}

catch (e) {
    console.log("gone south!!");
}