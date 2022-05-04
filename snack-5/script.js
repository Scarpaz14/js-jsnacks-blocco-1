// creo un array vuoto 

list = [""];

for (let i=0; i<=6; i++){
    let number = Number(prompt("inserisci un numero"))
    if (number % 2 === 1){
        console.log(list.push(number))
    } else{
        console.log("e' un numero pari")
    }
}