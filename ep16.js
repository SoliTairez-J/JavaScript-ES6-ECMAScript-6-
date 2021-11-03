// Array Reduce

const data = [10,20,30,40,50]

const mapData = data.map(e=>100)
const filterData = data.filter(e=>e>20)

console.log(mapData);
console.log(filterData);

// array.reduce((ค่าที่ถูกประมวลผล,element)=>,ค่าเริ่มต้น)  // value = 0

const result = data.reduce((value,e)=>e+value,0)

console.log(result);

const cart = [
    {name:'bag',price:500},
    {name:'book',price:900},
    {name:'camera',price:5000}
]

const summation = cart.reduce((value,e)=>e.price+value,0)

console.log(`ลูกค้าต้องชำระเงิน = ${summation}`);