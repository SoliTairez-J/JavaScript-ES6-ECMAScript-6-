// splice & slice
// splice(ตำแหน่งที่ต้องการจะลบ,จำนวนที่จะลบ,สมาชิคที่ต้องการแทรกเข้าไป)
// slice(ตำแหน่งเริ่มต้น,ตำแหน่งสุดท้าย -1)

const data = [10,20,30,40,50]

// data.splice(1,2,999)

console.log(data);

const newData = data.slice(1,3)

console.log(data);

console.log(newData);