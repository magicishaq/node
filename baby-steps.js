'use strict'; 
var temp = 0
for (var i = 2 ; i < process.argv.length ; i++){ 
    temp += Number(process.argv[i]); 
}
//console.log('hello'); 
console.log(temp); 