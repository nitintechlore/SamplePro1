//Primitive Types example.
//Explicit Type
const str = 'String';
const num = 1450.45;
const decnum = 45656454n; // Note the 'n' at the end to denote a bigint literal
const flag = true;
//Implicit Type - guess type from data
const firstName = 'Nitin';
console.log(typeof (firstName));
//Union Types
const unionType = 10;
console.log(typeof (unionType));
//Objet Types
const obj = { param1: 's1', param2: 10 };
console.log(obj);
const arr = ['s1', 's2', 's3'];
console.log(arr);
//tuple
//array with fixed types for each index value
const tuple = ['name', 25, 'address'];
//any
const data = JSON.parse('{"name":"Nitin", "city":"Pune"}');
console.log(typeof data);
//string interpolation
const str1 = 'String1';
const str2 = 'String2';
//string interpolation to include variables in the string - using backticks
const str3 = `Concate both the string
                  ${str1}${str2}`;
console.log('string interpolation using backticks : ' + str3);
const pointPart = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;
console.log(pointPart);
const myCar = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000, // `Required` forces mileage to be defined
};
console.log(myCar);
//3. keys are strings (names) and the values are numbers (ages).
const nameAgeMap = {
    'Alice': 21,
    'Bob': 25,
};
console.log(nameAgeMap);
//# sourceMappingURL=variables.js.map