# Traccia

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori (massimo due decimali per indicare centesimi).

Verifiche:
100km, 10 anni => prezzo corretto: €16.80
100km, 70 anni => prezzo corretto: €12.60

# Pseudo-Codice

## Raccolta info

- il programma chiede all'utente il numero di km che vuole percorrere;
- il programma chiede all'utente l'età;

## Valori

- il prezzo del biglietto è di 0.21 € al km;

## Elaborazione

- SE (l'utente è under 18) applica sconto del 20%;
  - ALTRIMENTI SE (l'utente è over 65) applica sconto del 40%;
  - ALTRIMENTI applica il prezzo pieno;

## Output

- viene mostrato il prezzo del biglietto
