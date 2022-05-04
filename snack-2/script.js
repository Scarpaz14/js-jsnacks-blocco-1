
const firstWord = prompt("inserisci la prima parola")
const secondWord = prompt("inserisci la seconda parola")

// se la prima parola e' piu lunga stampa prima la piu corta 
if (firstWord.length > secondWord.length){
    console.log(secondWord, firstWord);
    //altrimenti  se la seconda parola e' piu lunga stampa prima la piu corta
} else if (secondWord.length > firstWord.length){
    console.log(firstWord, secondWord);
}
// altrimenti risulta pareggio 
else{
    console.log("pareggio, riscrivi")
}