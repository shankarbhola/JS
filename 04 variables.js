// variables are used to store the data
// EX. string, number, boolean, arrays, objects,..........
//we can declare variables by using "var", "let", or "const" keyword
//"let" and "const" keywords introduced in ES6
// variables should contain a-z, A-Z, 0-9, $ and _
//variables should not start with digits


//string
//collection of characters called as string
//""(double quotes), ''(single quotes) and ``(backtick) operator
//``(backtick) operator called as template literal
//``(backtick) operator introduced in ES6 version
//``(backtick) operatorused to define the paragraphs



var msg = "javascript";
var wish = `welcome to ${msg}`;
console.log(wish);                  //welcome to javascript


var sub_one = "Angular13";
var sub_two = "NodeJS";
var sub_three = "MongoDB";
var mean_stack = `${sub_one}....${sub_two}....${sub_three}`;
console.log(mean_stack);            //Angular13....NodeJS....MongoDB


var tbl_name = "employee";
var sal = 50000;
var sql_query = `select * from ${tbl_name} where esal>${sal}`;
console.log(sql_query);             //select * from employee where esal>50000


//DATATYPES
//number
//decimal       hexadecimal         octal           binary          double
//hexadecimal number starts with "0x"
//octal number starts with "0o"
//binaty number stars with "0b"
var decimal_num = 100;
var double_num = 100.12345;
var hexadecimal_num = 0x123ABC;
var octal_num = 0o123;
var binary_num = 0b1010;
console.log(decimal_num, double_num, hexadecimal_num, octal_num, binary_num);           //100 100.12345 1194684 83 10


//boolean
//true      ---1
//false     ---0
var flag = true;
console.log( flag );            //true


//bigint
//large numbers
//suffix with "n"
var large_num = 123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789n;
console.log(large_num);


//Symbol datatype
var secured_data = Symbol(100);
console.log(secured_data);             //Symbol(100)


var tcs_hired;
console.log(tcs_hired);                 //undefined

tcs_hired = null;
console.log(tcs_hired);                 //null


//arrays 
//cololection of eolements as array
//[]
//string array
var str_arr1 = ["Angular13","ReactJS","VueJS","NodeJS","MongoDB"]

//for loop
for (var i = 0; i < str_arr1.length; i++) {
    console.log(str_arr1[i]);
    
}


var num_arr = [10,20,30,40,50];
//while loop
var i=num_arr.length;
while (i >=0) {
    console.log(num_arr[i]);
    i--;
}


//forEach()
//for....of
//for....in


//JSON
//javascript object notation
//javascript objects
//used to transfer date over the network
//objects ---{}, arrays ---[], data---key & value pairs
var obj = {
    "sub_one"  : "ReactJS",
    "sub_two"  : "NodeJS",
    "sub_three" : "MongoDB"
};
console.log(obj.sub_one,obj.sub_two,obj.sub_three);         //ReactJS NodeJS MongoDB