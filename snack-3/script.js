 
//  Chiedo all'utente di inserire per 10 volte un numero
 let somma= 0;

 for (let i=1; i<=10; i++){
     const number = Number(prompt("inserisci un numero"))
     somma += number;
 }
// stampo la somma di tutti i numeri inseriti 
 console.log(somma);