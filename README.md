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

## Reccolta info

- il programma chiede all'utente il numero di km che vuole percorrere;
- il programma chiede all'utente l'età;

## Valori

- il prezzo del biglietto è di 0.21 € al km;
- va applicato uno sconto del 20% sotto i 18 anni;
- va applicato uno sconto del 40% dai 65 anni in su;

## Elaborazione

- totale biglietto = numero di km \* 0.21;
- totale biglietto under18 = totale biglietto - 20%;
- totale biglietto over65 = totale biglietto - 40%;
- SE (età < di 18 stampa totale biglietto under18);
  - ALTRIMENTI SE (età >= 65 stampa totale biglietto over65)
  - ALTRIMENTI (stampa totale biglietto)
