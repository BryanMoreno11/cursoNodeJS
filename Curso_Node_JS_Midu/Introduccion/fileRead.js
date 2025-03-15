const fs = require('node:fs');
const {promisify} = require('util');
const readFileAsync = promisify(fs.readFile);


readFileAsync('./texto1', 'utf8').then((text)=>{
    console.log(text);
});
console.log("Realizando otras operaciones")
readFileAsync('./texto2', 'utf8').then((text)=>{
    console.log(text);
});
