/*
//slice()
let arr = [10,20,30,40,50,60,70,80,90,100];
console.log(arr.slice(2,4));    //[ 30, 40 ]
console.log(arr.slice(5,8));    //[ 60, 70, 80 ]
console.log(arr.slice(-10,-8)); //[ 10, 20 ]
console.log(arr.slice(-2));     //[ 90, 100 ]
*/

//spread operator
//concat
//immutable
//...
let arr1 = [10,20,30];
let arr2 = [40,50,60];
console.log([...arr1,...arr2]);     //[ 10, 20, 30, 40, 50, 60 ]

let grand = ["1ac","2ac","1ac","1ac"];
let father = [...grand,"2aac"];
console.log(father);        //[ '1ac', '2ac', '1ac', '1ac', '2aac' ]

let arr3 = [10,20,30];
let xerox = [...arr3];
console.log(arr3);
cons