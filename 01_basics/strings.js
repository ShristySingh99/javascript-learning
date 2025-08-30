const name = "siri";
const age = 19;

console.log(`my name if ${name} ans my age id ${age}`);

console.log(name[2]);

const newName = new String('    siri-here');
// console.log(newName);
// console.log(newName[2]);
// console.log(newName.length);
// console.log(newName.indexOf('h'));
// console.log(newName.trim());



const url = "https://hitesh.com/siri%20singh";
console.log(url.replace('%20', '-'))
console.log(url.includes('siri'))
console.log(url.split('-'));