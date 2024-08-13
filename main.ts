import { FilterCondition } from './FilterConditionEnum'
import { Product } from './Product'

//signature of the GetProductList function
const GetProductList = (): Product[] => {
    //ProductList is an array of objects of type Product
    const ProductList: Product[] = []

    //populating the array with hardcoded values
    //this block can be replaced with data coming from the database
    ProductList.push({ id: 1, name: 'product1', qty: 20, isAvailable: true })
    ProductList.push({ id: 2, name: 'product2', qty: 30, isAvailable: true })
    ProductList.push({ id: 3, name: 'product3', qty: 40, isAvailable: true })
    ProductList.push({ id: 4, name: 'product4', qty: 0, isAvailable: false })
    return ProductList
}

//Store All ProductList in variable
const AllProductList: Product[] = GetProductList()
console.log('-------All Products--------')
console.log(AllProductList)
console.log('---------------------------')

const FilterProducts = (qty: number, filterCondition: string): Product[] => {
    let FilteredData: Product[] = []
    if (filterCondition == FilterCondition.EqualTo) {
        FilteredData = AllProductList.filter((item: Product) => item.qty == qty)
    }
    else if (filterCondition == FilterCondition.GreaterThan) {
        FilteredData = AllProductList.filter((item: Product) => item.qty > qty)
    }
    else if (filterCondition == FilterCondition.LessThan) {
        FilteredData = AllProductList.filter((item: Product) => item.qty < qty)
    }
    return FilteredData
}

console.log('-------Filter Condition= EqualTo,  Qty=20--------')
console.log(FilterProducts(20, FilterCondition.EqualTo))
console.log('---------------------------')


console.log('-------Filter Condition= Greater Than, Qty>20--------')
console.log(FilterProducts(20, FilterCondition.GreaterThan))
console.log('---------------------------')


console.log('-------Filter Condition= Less Than, Qty<40--------')
console.log(FilterProducts(40, FilterCondition.LessThan))
console.log('---------------------------')

const IncreaseQtyBy = (qty: number): Product[] => {
    const FinalResult = AllProductList.map((item: Product) => ({
        ...item,
        qty: item.qty + qty,
        isAvailable: item.qty + qty > 0 ? true : false,
    }))
    return FinalResult
}

console.log('-------Increase All Product Qty By 50-------')
const IncreasedQtyProductList: Product[] = IncreaseQtyBy(50)
console.log(IncreasedQtyProductList)
console.log('---------------------------')

