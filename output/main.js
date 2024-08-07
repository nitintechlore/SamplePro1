"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FilterConditionEnum_1 = require("./FilterConditionEnum");
//signature of the GetProductList function
let GetProductList;
GetProductList = () => {
    //ProductList is an array of objects of type Product
    let ProductList = [];
    //populating the array with hardcoded values
    //this block can be replaced with data coming from the database
    ProductList.push({ id: 1, name: "product1", qty: 20, isAvailable: true });
    ProductList.push({ id: 2, name: "product2", qty: 30, isAvailable: true });
    ProductList.push({ id: 3, name: "product3", qty: 40, isAvailable: true });
    ProductList.push({ id: 4, name: "product4", qty: 0, isAvailable: false });
    return ProductList;
};
//Store All ProductList in variable
let AllProductList;
AllProductList = GetProductList();
console.log("-------All Products--------");
console.log(AllProductList);
console.log("---------------------------");
let FilterProducts;
FilterProducts = (qty, filterCondition) => {
    let FilteredData = [];
    if (filterCondition == FilterConditionEnum_1.FilterCondition.EqualTo) {
        FilteredData = AllProductList.filter((item) => item.qty == qty);
    }
    else if (filterCondition == FilterConditionEnum_1.FilterCondition.GreaterThan) {
        FilteredData = AllProductList.filter((item) => item.qty > qty);
    }
    else if (filterCondition == FilterConditionEnum_1.FilterCondition.LessThan) {
        FilteredData = AllProductList.filter((item) => item.qty < qty);
    }
    return FilteredData;
};
console.log("-------Filter Condition= EqualTo,  Qty=20--------");
console.log(FilterProducts(20, FilterConditionEnum_1.FilterCondition.EqualTo));
console.log("---------------------------");
console.log("-------Filter Condition= Greater Than, Qty>20--------");
console.log(FilterProducts(20, FilterConditionEnum_1.FilterCondition.GreaterThan));
console.log("---------------------------");
console.log("-------Filter Condition= Less Than, Qty<40--------");
console.log(FilterProducts(40, FilterConditionEnum_1.FilterCondition.LessThan));
console.log("---------------------------");
let IncreaseQtyBy;
IncreaseQtyBy = (qty) => {
    let FinalResult;
    FinalResult = AllProductList.map((item) => ({
        ...item,
        qty: item.qty + qty,
        isAvailable: item.qty + qty > 0 ? true : false
    }));
    return FinalResult;
};
console.log("-------Increase All Product Qty By 50-------");
let IncreasedQtyProductList = IncreaseQtyBy(50);
console.log(IncreasedQtyProductList);
console.log("---------------------------");
//# sourceMappingURL=main.js.map