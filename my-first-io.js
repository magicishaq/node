const fs = require('fs'); 
const buf = fs.readFileSync(process.argv[2]);
const string = buf.toString(); 

const arr = string.split('\n'); 

console.log(arr.length - 1 )