//Classes
//Collection of variables & functions called as class
//"class" is the keyword, used to defined the "classes"
//"class" keyword introduced in ES6
//we can create object to the class by using "new" keyword
//we will define constructors by using "construct" keyword
//we will refer current class members by using "this" keyword

// class class_one{
//     var_one = "Hello_1";
//     var_two = "Hello_2";
//     var_three = "Hello_3";
// };
// let obj = new class_one();
// console.log(obj.var_one,obj.var_two,obj.var_three);


// class class_one{
//     #var_one = "Hello_1";
// };
// let obj = new class_one();
// console.log(obj.var_one);   //undefined

// class class_one{
//     var1;
//     var2;
//     constructor(param1,param2){
//         this.var1 = param1;
//         this.var2 = param2;
//     }
// };
// let obj = new class_one("Hello_1","Hello_2");
// console.log(obj.var1,obj.var2);
// let obj2 = new class_one("welcome1","welcome2");
// console.log(obj2.var1,obj2.var2);



// class class_one{
//     fun_one(){
//         return "Hello_1";
//     }

//     fun_two(){
//         return "Hello_2";
//     }

//     fun_three(){
//         return "Hello_3";
//     }
// }

// let obj = new class_one();
// console.log(obj.fun_one(),obj.fun_two(),obj.fun_three());



// class class_one{
//     static var_one = "Hello_1";

//     static fun_one(){
//         return "Hello_2";
//     }
// }
// console.log(class_one.var_one, class_one.fun_one());
// //Hello_1 Hello_2
// let obj = new class_one();
// console.log(obj.var_one,obj.fun_one());
// //static members we can't access by using class objects



// class class_one{
//     static var_one = "Hello_1";

//     static fun_one(){
//         return this.var_one;
//     }

//     fun_two(){
//         return this.var_one;
//     }

//     fun_three(){
//         return var_one;
//     }
// }

// console.log(class_one.fun_one());

// let obj =  new class_one();
// console.log(obj.fun_two(),obj.fun_three());
// //static members not allowed to non static area


