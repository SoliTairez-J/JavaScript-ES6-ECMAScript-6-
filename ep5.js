//Spread Operator

const newArr = [100,200,300]
const data = [10,20,...newArr]

console.log(data);

const colors = ['green','blue','white']
const allColors = ['red','yellow',...colors]

const newColors = ['black','gray']
allColors.push(...newColors)
console.log(allColors);