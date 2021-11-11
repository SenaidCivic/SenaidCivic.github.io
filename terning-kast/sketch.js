//Lav et program, der simulerer kast med 6 terninger. 
//Der udføres f.eks. 100 kast. Optæl i et array hyppigheden af summen af øjenantallene.

let arr = []

for(let j = i = 0; i < 100; i++){
//slå med terninger 100 gange
let sum = 0
for (let i = 0; i< 6; i++){
  let value = Math.floor(Math.random() * 6) + 1
  sum = sum + value
  console.log(value, sum)
}

console.log('sum:', sum)
arr.push(sum)
}