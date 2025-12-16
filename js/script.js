// ## Reccolta info

// - il programma chiede all'utente il numero di km che vuole percorrere;
let userKm = 300; //prompt("Quanti km devi percorrere?");
console.log("User km:", parseInt(userKm));

// - il programma chiede all'utente l'età;
let userAge = 20; //prompt("Quanti anni hai?");
console.log("User Age:", parseInt(userAge));

// ## Valori

// - il prezzo del biglietto è di 0.21 € al km;
const pricePerKm = 0.21;
console.log(pricePerKm);

let ticketPrice = pricePerKm * userKm;
console.log(ticketPrice);

// - va applicato uno sconto del 20% sotto i 18 anni;
let ticketUnder18 = ticketPrice - (20 / 100) * ticketPrice;
console.log(ticketUnder18);

// - va applicato uno sconto del 40% dai 65 anni in su;
let ticketOver65 = ticketPrice - (40 / 100) * ticketPrice;
console.log(ticketOver65);

// ## Elaborazione

// - SE (età < di 18 stampa totale biglietto under18);
//   - ALTRIMENTI SE (età >= 65 stampa totale biglietto over65)
//   - ALTRIMENTI (stampa totale biglietto)
