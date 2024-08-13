import { FilterCondition } from './FilterConditionEnum'
import { Product } from './Product'

//signature of the GetProductList function
const getProductList = (): Product[] => {
    //ProductList is an array of objects of type Product
    const productList: Product[] = []

    //populating the array with hardcoded values
    //this block can be replaced with data coming from the database
    productList.push({ id: 1, name: 'product1', qty: 20, isAvailable: true })
    productList.push({ id: 2, name: 'product2', qty: 30, isAvailable: true })
    productList.push({ id: 3, name: 'product3', qty: 40, isAvailable: true })
    productList.push({ id: 4, name: 'product4', qty: 0, isAvailable: false })
    return productList
}

//Store All ProductList in variable
const allProductList: Product[] = getProductList()
console.log('-------All Products--------')
console.log(allProductList)
console.log('---------------------------')

const filterProducts = (qty: number, filterCondition: string): Product[] => {
    let filteredData: Product[] = []
    if (filterCondition == FilterCondition.EqualTo) {
        filteredData = allProductList.filter((item: Product) => item.qty == qty)
    }
    else if (filterCondition == FilterCondition.GreaterThan) {
        filteredData = allProductList.filter((item: Product) => item.qty > qty)
    }
    else if (filterCondition == FilterCondition.LessThan) {
        filteredData = allProductList.filter((item: Product) => item.qty < qty)
    }
    return filteredData
}

console.log('-------Filter Condition= EqualTo,  Qty=20--------')
console.log(filterProducts(20, FilterCondition.EqualTo))
console.log('---------------------------')


console.log('-------Filter Condition= Greater Than, Qty>20--------')
console.log(filterProducts(20, FilterCondition.GreaterThan))
console.log('---------------------------')


console.log('-------Filter Condition= Less Than, Qty<40--------')
console.log(filterProducts(40, FilterCondition.LessThan))
console.log('---------------------------')

const increaseQtyBy = (qty: number): Product[] => {
    const finalResult = allProductList.map((item: Product) => ({
        ...item,
        qty: item.qty + qty,
        isAvailable: item.qty + qty > 0 ? true : false,
    }))
    return finalResult
}

console.log('-------Increase All Product Qty By 50-------')
const increasedQtyProductList: Product[] = increaseQtyBy(50)
console.log(increasedQtyProductList)
console.log('---------------------------')

