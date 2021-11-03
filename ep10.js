//push, pop, shift, unshift

const data = [10,20,30]
// data.push(500)
// data.push(1000)
// data.push(2000)
data.push(...[500,1000,2000])
data.pop()
data.pop()

data.shift()
data.shift()
console.log(data);
data.unshift(999)
data.unshift(5000)

console.log(data);