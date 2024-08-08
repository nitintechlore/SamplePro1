//Union Types
type AlphaNumbers= (number | string);

let AddConcatNumStr:(x:AlphaNumbers,y:AlphaNumbers)=>AlphaNumbers;

AddConcatNumStr=(x:AlphaNumbers,y:AlphaNumbers)=>
{
   let result:AlphaNumbers="";

   if(typeof x=="string" && typeof y=="string")
   {
       result=x+"-"+y;
   }
   else if(typeof x=="number" && typeof y=="number")
   {
    result=x+y;
   }

   return result;
}

console.log("---Add Numbers : 20 and 30 -----");
console.log(AddConcatNumStr(20,30));
console.log("--------------------------------");

console.log("---Concat String by - : Str1 and Str2 -----");
console.log(AddConcatNumStr("Str1","Str2"));
console.log("--------------------------------");
