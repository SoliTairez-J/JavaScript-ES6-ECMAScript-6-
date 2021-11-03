//การ Loop Array
// For Loop, ForEach, Forof

const data = [10,20,30,40,50]

// for (let i = 0 ; i < data.length ; i++){
//     if (data[i]>=30) break
//     console.log(`ลำดับที่ ${i+1} = ${data[i]}`);
// }

// let sum = 0
// data.forEach(e => {
//     sum+=e
//     console.log(`ผลบวก = ${sum}`);
// });

for ( const element of data){
    if (element>=30) break
    console.log(`สมาชิค Array Data = ${element}`);
}