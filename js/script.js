// ## Reccolta info

// - il programma chiede all'utente il numero di km che vuole percorrere;
let userKm = prompt("Quanti km devi percorrere?");
console.log("User km:", parseInt(userKm));

// - il programma chiede all'utente l'età;
let userAge = prompt("Quanti anni hai?");
console.log("User Age:", parseInt(userAge));

// ## Valori

// - il prezzo del biglietto è di 0.21 € al km;
// - va applicato uno sconto del 20% sotto i 18 anni;
// - va applicato uno sconto del 40% dai 65 anni in su;

// ## Elaborazione

// - totale biglietto = numero di km \* 0.21;
// - totale biglietto under18 = totale biglietto - 20%;
// - totale biglietto over65 = totale biglietto - 40%;
// - SE (età < di 18 stampa totale biglietto under18);
//   - ALTRIMENTI SE (età >= 65 stampa totale biglietto over65)
//   - ALTRIMENTI (stampa totale biglietto)
