// creo un array vuoto 
let list = [];

for (let i=0; i<=6; i++){
    let number = Number(prompt("inserisci un numero"))
    if (number % 2 === 1){
        list.push(number)
    } else{
        console.log("e' un numero pari")
    }
}
// stampo array 
console.log(list);