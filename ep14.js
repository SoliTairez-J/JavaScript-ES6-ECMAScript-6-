// Array Map

const numbers = [10,20,30,40,50]
console.log(`number = ${numbers}`);
// const result = numbers.map(e=>{
//     const a = e*2
//     return a
// })
const result = numbers.map(e=>e*e)
console.log(`Array Map = ${result}`);
// console.log('\n');
const data = ['ฝนตก','แดดร้อน','ฝนฟ้าคะนอง','แดดร้อน','ฝนตก','อากาศดี','หมอก']

const newData = data.map((e,i)=>{
    return `วันที่ ${i} , สภาพอากาศ = ${e}`
})

console.log(newData);

const data1 = [
    {dar:"01/06/2564",weather:"แดดร้อน",temp:27},
    {dar:"03/06/2564",weather:"ฝนตก",temp:23},
    {dar:"04/06/2564",weather:"หมอก",temp:18},
]

const result1 = data1.map(e=>{
    return e.weather
})
console.log(result1);