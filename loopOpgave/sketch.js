function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(100)
  text("Tjek Console",20,windowHeight / 2)

  //Lav et program, der tæller nedad fra 10 til 1.
  console.log("opgave 1 while løkken")
  let i = 10
  while(i > 0){
    console.log(i);
    i--;
  }

  console.log("opgave 1 for løkken")
  for(let i = 10; i > 0; i--){
    console.log(i);
  }

   //Lav et program, der udregner værdien af 1+2+3+ ... +20 med en løkke.
  console.log("opgave 2")
  let xSum = 0
  for(let x = 1;x<=20;x++){
  xSum += x
  }
  console.log(xSum)

  //Lav et program, der udskriver 2-tabellen, 3-tabellen, .. op til 10-tabellen.
console.log("opgave 3")
for(let i = 2; i <= 10; i++){  
  console.log(i + "-tabellen")
for(let n = 1; n <= 10; n++){
  let result = i * n
console.log(result)}
}

  //Skriv et program, som for ligningen y=3*x*x+6*x+9 udskriver værdierne af y for x=0,
  //x=1,x= 2, x=3 ... x=10. Ret det derefter til at skrive ud for x=0,x=10,x=20,x=30...x=100.
  console.log("opgave 4")

  console.log("del 1")
  for(let i = 0; i <= 10; i++){
    let x = i
    let y =3*x*x+6*x+9
    console.log(x, y)
  }

  console.log("del 2")
  for(let i = 0; i <= 10; i++){
  let x = i*10
  let y =3*x*x+6*x+9
  console.log(x, y)
  
}}
