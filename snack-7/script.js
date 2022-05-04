// generiamo una lista di nomi e cognomi 
let firstname = ["luca", "mario", "paolo", "fede"]
let surname = ["rossi", "giallo", "pinco", "bianchi"]
console.log(firstname, surname);

// creiamo lista vuoto dove aggiungeremo i nomi e cognomi uniti 
let list= [];

// mischiamo random i nomi e cognomi 
for( i=0; i<4; i++){
    let firstnamerandom = firstname [Math.floor(Math.random() * firstname.length)];
    let surnamerandom = surname [Math.floor(Math.random() * surname.length)];
    // uniamoli 
    list.push(firstnamerandom + surnamerandom);
}
// stampiamo i nomi e cognomi all'intreno dell'array vuoto 
console.log(list);