const fileSystem= module.require('node:fs');
const archivo= fileSystem.statSync("./texto1");
console.log("Tamaño del archivo: " + archivo.size + " bytes");
