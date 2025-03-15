osInfo= module.require('node:os');
console.log("---------------Información del sistema Operativo---------------");
console.log("Nombre del Sistema Operativo: " + osInfo.type());
console.log("Versión del Sistema Operativo: " + osInfo.version());
console.log("Arquitectura del Sistema Operativo: " + osInfo.arch());
console.log("Memoria total del Sistema Operativo: " + osInfo.totalmem()/1024/1024 + " GB");
console.log("Memoria libre del Sistema Operativo: " + osInfo.freemem()/1024/1024 + " GB");
console.log("Nombre del usuario del Sistema Operativo: " + osInfo.userInfo().username);
console.log("Tiempo de ejecución del Sistema Operativo: " + osInfo.uptime()/60/60 + "horas");