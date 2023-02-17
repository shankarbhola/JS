/*
function fun_one(arg1?:string,arg2?:string,arg3?:string){
    console.log(arg1,arg2,arg3);
}

fun_one();  //undefined undefined undefined
fun_one("hello_1");     //hello_1 undefined undefined
fun_one(undefined,undefined,undefined);     //undefined undefined undefined
fun_one(null,null,null);    //null null null
*/

/*
function fun_one(arg1:string,arg2?:string){
    console.log(arg1,arg2);
}
//fun_one();      //Expected 1-2 arguments, but got 0.
fun_one("hello_1"); //hello_1 undefined
fun_one(undefined,undefined);       //undefined undefined
fun_one(null,null);     //null null
*/

/*
function fun_one(arg1?:string,arg2:string){

}

//in combination of regular with optional, optional should have second priority
*/

/*
function fun_one(arg1:string,arg2:string="hello_2",arg3?:string,...arg4:any):void{
    console.log(arg1,arg2,arg3,arg4);
}
//fun_one();      //Expected at least 1 arguments, but got 0.
fun_one("hello_1"); //hello_1 hello_2 undefined []
fun_one("hello_1",undefined,"hello_3","hello_4");       //hello_1 hello_2 hello_3 [ 'hello_4' ]
fun_one(undefined,undefined,undefined,undefined);   //undefined hello_2 undefined [ undefined ]
fun_one(null,null,null,null)        //null null null [ null ]
*/