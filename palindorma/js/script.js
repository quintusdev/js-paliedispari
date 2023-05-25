//RICHIESTA INSERIMENTO PAROLA ALL'UTENTE
let parola = prompt('Inserisci una parola qualsiasi').toLowerCase();

//CREO LA PAROLA PALINDROMA

//Funzione split
let arrayParola = parola.split('');
console.log(arrayParola);

//Funzione reverse
let arrayReverse = arrayParola.reverse();
console.log(arrayReverse);

//Funzione Join
let reverse = arrayReverse.join('');
console.log(reverse);

if (reverse === parola) {
    console.log('La parola inserita è PALINDROMA.');
} else {
    console.log('La parola inserita NON è palindroma.');
}
