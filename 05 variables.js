/*
for(var i=0;i<5;i++){
       
}
console.log(i);

//var : 5
//let : ReferenceError: i is not defined

//var keyword breaks the scope rules
// let keyword obeys the scope rule
 */



/*
//declare the variable
//initialize the variable
//print the variable
console.log(data);
let data = 100;
//var : undefined
//let : ReferenceError: Cannot access 'data' before initialization

//variable hoisting issue raised because od var keyword
//we can overcome variable hoisting by using let keyword
*/

/*
 //global variable
 let data = 100;
 console.log(data);
 {
    //local variable
    let data = 200;
    console.log(data);
 }
 console.log(data);     //let:100        var:200
//global polution inssue raised by var keyword
//we can overcome global polution issue by using let keyword
 */

/*
let data = 100;
let data = 200;
console.log(data);  //var:200  let:SyntaxError: Identifier 'data' has already been declared

//var keyword allows the duplicate variables
//let keyword wont allows the duplicate variables
*/

/*
                var                                                let

    var keyword introduced in ES1                   let keyword introduced in ES6
    var keyword allows theduplicate variable        let keywoed won't allows duplicate variables
    var hoisting issue raised in var keyword        we can overcome variable hoisting issue by using let keyword
    global poluting issue raised in var keyword     we can overcome global poluting issue by using let keyword
    scope rule break by var keyword                 scope rule obey by let keyword
    var members always called as global members     let members we can called as locaol members

*/

/*
var data = 100;
{
    let data = 200;
}
console.log(data);
*/

/* 
//const
//ES6
//reinitialization not possible 
const data = 100;
data = 200;
//TypeError: Assignment to constant variable.
*/

/* 
const arr = [10,20,30,10,50];
//arr = [];           //TypeError: Assignment to constant variable.
arr[0] = 100;
arr[1] = 200;
arr[5] = 600;
console.log(arr);       //[ 100, 200, 30, 10, 50, 600 ]

arr.pop();
arr.pop();
console.log(arr);       //[ 100, 200, 30, 10 ]
*/


const obj = {
    "sub_one"  : "ReactJS",
    "sub_two"  : "NodeJS",
    "sub_three" : "MongoDB"
}
//obj ={};        //TypeError: Assignment to constant variable.
obj.sub_one = "Angular13";
obj.sub_two = "Deno";
obj.sub_three = "CassandraDB";
console.log(obj);       //{ sub_one: 'Angular13', sub_two: 'Deno', sub_three: 'CassandraDB' }
