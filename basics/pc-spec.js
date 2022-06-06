
const os = require('os');


console.log("free memory",os.freemem()/1024/1024/1024);
console.log("total memory",os.totalmem()/1024/1024/1024);
console.log("processor",os.cpus());
console.log("version",os.version());



