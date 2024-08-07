let AddConcatNumStr;
AddConcatNumStr = (x, y) => {
    let result = "";
    if (typeof x == "string" && typeof y == "string") {
        result = x + "-" + y;
    }
    else if (typeof x == "number" && typeof y == "number") {
        result = x + y;
    }
    return result;
};
console.log("---Add Numbers : 20 and 30 -----");
console.log(AddConcatNumStr(20, 30));
console.log("--------------------------------");
console.log("---Concat String by - : Str1 and Str2 -----");
console.log(AddConcatNumStr("Str1", "Str2"));
console.log("--------------------------------");
//# sourceMappingURL=MathCalc.js.map