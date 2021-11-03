// Array Filter

const data = [10,20,30,40,50]

const result = data.filter(e=>{
    return e>20
})

console.log(result);


const data1 = [
    {name:'jay',salary:20000,department:'programmer'},
    {name:'jojo',salary:30000,department:'marketing'},
    {name:'nut',salary:10000,department:'trainee'},
    {name:'bell',salary:50000,department:'marketing'},
    {name:'joy',salary:10000,department:'trainee'}
]

const result1 = data1.filter(e=>e.salary>10000).filter(e=>e.department==='marketing')

console.log(result1);