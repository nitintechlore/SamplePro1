"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FilterConditionEnum_1 = require("./FilterConditionEnum");
//signature of the GetProductList function
const getProductList = () => {
    //ProductList is an array of objects of type Product
    const productList = [];
    //populating the array with hardcoded values
    //this block can be replaced with data coming from the database
    productList.push({ id: 1, name: 'product1', qty: 20, isAvailable: true });
    productList.push({ id: 2, name: 'product2', qty: 30, isAvailable: true });
    productList.push({ id: 3, name: 'product3', qty: 40, isAvailable: true });
    productList.push({ id: 4, name: 'product4', qty: 0, isAvailable: false });
    return productList;
};
//Store All ProductList in variable
const allProductList = getProductList();
console.log('-------All Products--------');
console.log(allProductList);
console.log('---------------------------');
const filterProducts = (qty, filterCondition) => {
    let filteredData = [];
    if (filterCondition == FilterConditionEnum_1.FilterCondition.EqualTo) {
        filteredData = allProductList.filter((item) => item.qty == qty);
    }
    else if (filterCondition == FilterConditionEnum_1.FilterCondition.GreaterThan) {
        filteredData = allProductList.filter((item) => item.qty > qty);
    }
    else if (filterCondition == FilterConditionEnum_1.FilterCondition.LessThan) {
        filteredData = allProductList.filter((item) => item.qty < qty);
    }
    return filteredData;
};
console.log('-------Filter Condition= EqualTo,  Qty=20--------');
console.log(filterProducts(20, FilterConditionEnum_1.FilterCondition.EqualTo));
console.log('---------------------------');
console.log('-------Filter Condition= Greater Than, Qty>20--------');
console.log(filterProducts(20, FilterConditionEnum_1.FilterCondition.GreaterThan));
console.log('---------------------------');
console.log('-------Filter Condition= Less Than, Qty<40--------');
console.log(filterProducts(40, FilterConditionEnum_1.FilterCondition.LessThan));
console.log('---------------------------');
const increaseQtyBy = (qty) => {
    const finalResult = allProductList.map((item) => ({
        ...item,
        qty: item.qty + qty,
        isAvailable: item.qty + qty > 0 ? true : false,
    }));
    return finalResult;
};
console.log('-------Increase All Product Qty By 50-------');
const increasedQtyProductList = increaseQtyBy(50);
console.log(increasedQtyProductList);
console.log('---------------------------');
//# sourceMappingURL=main.js.map