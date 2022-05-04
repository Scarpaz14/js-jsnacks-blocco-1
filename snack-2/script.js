
const firstWord = prompt("inserisci la prima parola")
const secondWord = prompt("inserisci la seconda parola")

// se la prima parola e piu lunga stampa la prima 
if (firstWord.length > secondWord.length){
    console.log(firstWord);
    //altrimenti  se la seconda parola e piu lunga stampa la seconda
} else if (firstWord.length < secondWord.length){
    console.log(secondWord);
}
// altrimenti risulta pareggio 
else{
    console.log("pareggio, riscrivi")
}