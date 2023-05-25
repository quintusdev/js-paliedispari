//INSERIMENTO INPUT UTENTE E CONTROLLI

//faccio inserire in input pari o dispari
let scelta = prompt('Scegli PARI o DISPARI.').toLowerCase();

while (!(scelta == "pari" || scelta == "dispari")){
  scelta = prompt('reinserisci la tua scelta. Grazie.');
}

console.log('Scelta utente: '+ scelta);

//faccio inserire in input un numero da 1 a 5 (compresi)
let num_utente = parseInt(prompt('Inserisci un numero compreso tra 1 e 5.'));

//Controllo che l'utente inserisca effettivamente dei numeri
while (isNaN(num_utente) || (num_utente < 1 || num_utente > 5)){
    num_utente = parseInt(prompt('Inserisci un numero compreso tra 1 e 5. Grazie.'));
}

//DEFINISCO LE FUNZIONI

//creo la funzione che genera un numero random da assegnare al computer
function generateNumberComputer (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//creo la funzione che definisce se la somma generi un numero pari o dispari
function PariDispari (somma) {
    if (somma % 2 === 0) {
        return "pari";
    } else {
        return "dispari";
    }
}

//EFFETTUO LE OPERAZIONI PER STABILIRE IL VINICITORE

//inserisco il numero casuale per il computer un una variabile
let num_pc = generateNumberComputer(1, 5);
console.log('Numero Computer: ' + num_pc);
console.log('Numero Utente: ' + num_utente);

//sommo i due numeri ottenuti
let somma = (num_pc + num_utente);
console.log('Totale dei due numeri: ' + somma);


//visualizzo chi ha vinto.
if (scelta === PariDispari(somma)) {
    console.log('Hai vinto! Complimenti.');

} else {

    console.log('Mi dispiace! Hai Perso!.');
}



