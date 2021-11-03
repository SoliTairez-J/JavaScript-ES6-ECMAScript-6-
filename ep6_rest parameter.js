//Rest Parameter
summation = (...numberArr)=> {
    let total=0
    for(let number of numberArr) total += number
    return total
}

console.log(summation(500,1000));
console.log(summation(500,1000,800));
console.log(summation(500,1000,800,500));
console.log(summation(500,1000,800,500,1000));