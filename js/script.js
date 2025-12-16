// // ## Raccolta info

// - il programma chiede all'utente il numero di km che vuole percorrere;
let userKm = 100; //prompt("Quanti km devi percorrere?");
console.log("User km:", parseInt(userKm));

// - il programma chiede all'utente l'età;
let userAge = 65; //prompt("Quanti anni hai?");
console.log("User Age:", parseInt(userAge));

// ## Valori

// - il prezzo del biglietto è di 0.21 € al km;
const pricePerKm = 0.21;

// ## Elaborazione

// - SE (l'utente è under 18) applica sconto del 20%;
//   - ALTRIMENTI SE (l'utente è over 65) applica sconto del 40%;
//   - ALTRIMENTI applica il prezzo pieno;

let ticketPrice;

if (userAge < 18) {
  ticketPrice = userKm * pricePerKm - (20 / 100) * (userKm * pricePerKm);
} else if (userAge >= 65) {
  ticketPrice = userKm * pricePerKm - (40 / 100) * (userKm * pricePerKm);
} else {
  ticketPrice = userKm * pricePerKm;
}

// ## Output

// - viene mostrato il prezzo del biglietto
console.log("Ticket Price: €", ticketPrice.toFixed(2));

alert(ticketPrice.toFixed(2));
