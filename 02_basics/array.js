
const myarr= [1,2,3,true,"siri",4];

const newarr = new Array(1,4,"siri", "hey",2.45);
// console.log(myarr);
// console.log(newarr);

// newarr.push("data pushed");
// console.log(newarr);

// myarr.unshift(1);
// myarr.shift();
// console.log(myarr);


//slice(start to end-1)
// console.log("A", myarr)
// const arr1 = myarr.slice(1,3);
// console.log(arr1);

//splice(start to end), actual me original array ko manipulate kr deta h
const arr2 = myarr.splice(1,3);
// console.log(arr2);
// console.log(myarr);

// myarr.push(newarr);
// console.log(myarr);

//console.log(myarr);

//concat works on new arr, push on existing array
const concat_data = myarr.concat(newarr);
// console.log(concat_data);


//spread fun
const spread_data = [...myarr, ...newarr];
//console.log(spread_data)

//flat



// console.log(Array.isArray("siri"));
// console.log(Array.from("siri"));
// console.log(Array.from({name : "siri"}))// obj ya kisi ko v cheej ko array ni bna payega isiliye empty arr dega

let num1=2, num2=44, num3 =345;
console.log(Array.of(num1,num2,num3))