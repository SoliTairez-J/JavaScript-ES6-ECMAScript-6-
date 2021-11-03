//Destructuring

//Array

const colors = ['green','red','yellow']
// const green = colors[0]
// const red = colors[1]
// const yellow = colors[2]

// const [green,red,yellow] = colors
const [green,,yellow] = colors

console.log(green);
// console.log(red);
console.log(yellow);
//Object
const product = {
    productName : "Computer",
    price:30000,
    stock:10
}

// const productname = product.productName
// const price = product.price
// const stock = product.stock

const {productName,price,stock} = product

console.log(productName);
console.log(price);
console.log(stock);