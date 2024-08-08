//Primitive Types example.
//Explicit Type
let str:string="String";
let num:number=1450.45;
let decnum: bigint = 45656454n; // Note the 'n' at the end to denote a bigint literal
let flag:boolean=true;


//Implicit Type - guess type from data
let firstName="Nitin";
console.log(typeof(firstName));

//Union Types
let unionType: string | number = 10;
console.log(typeof(unionType));

//Objet Types
let obj:{param1:string,param2:number}={param1:"s1",param2:10};
console.log(obj);

let arr:string[]=["s1","s2","s3"];
console.log(arr);

//tuple
//array with fixed types for each index value
let tuple:[string,number,string]=["name",25,"address"];


//any
let data:any=JSON.parse('{"name":"Nitin", "city":"Pune"}');
console.log(typeof data);

//string interpolation
let str1:string="String1";
let str2:string='String2';

//string interpolation to include variables in the string - using backticks
let str3:string=`Concate both the string
                  ${str1}${str2}`;
console.log("string interpolation using backticks : "+str3);                  



//Utility Types

//1. Partial
interface Point {
    x: number;
    y: number;
}
  
let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;
console.log(pointPart);

//2. Required
interface Car {
    make: string;
    model: string;
    mileage?: number;
}
  
let myCar: Required<Car> = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
};
console.log(myCar);


//3. keys are strings (names) and the values are numbers (ages).
const nameAgeMap: Record<string, number> = {
    'Alice': 21,
    'Bob': 25
};
  
console.log(nameAgeMap);