// creo lista invitati alla festa 
const list = ["luca, marco, pippo, gino"]

// chiedo all'utente il suo nome
const userName = prompt("inserisci il tuo nome")

// gli comunico se puo partecipare o no 
for (let i=1; i<list.length; i++){
    if (list[i]==(userName)){
        console.log("puoi partecipare")
    } else{
        console.log("non puoi partecipare")
    }
}