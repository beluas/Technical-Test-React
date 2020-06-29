# Progetto
Sviluppa una mini web app in React che gestisca la logistica di alcuni magazzini, con l’obiettivo
di poter effettuare il ristoccaggio di determinati articoli nei vari magazzini.
La web app è composta da 3 step:
● Pagina di ricerca dei prodotti
● Pagina di selezione del magazzino
● Thank you page
Trovi tutti i template in allegato.

Per il primo step hai a disposizione un elenco di prodotti in un file JSON (file items.json, che
trovi in allegato) che dovrai utilizzare come database di sola lettura. Al caricamento della pagina
dovrai mostrare tutti i prodotti ordinati alfabeticamente per nome. Per ogni prodotto dovrai
inserire un box con nome, descrizione e CTA (il bottone sulla destra), seguendo le indicazioni
grafiche e di layout del template.

Per il layout di questo step puoi fare riferimento al file step1.png che trovi in allegato.
Digitando un testo nella barra di ricerca dovrai filtrare dinamicamente i risultati, mostrando solo
quelli il cui testo o la cui descrizione contengono il testo digitato.
Al click sulla CTA del prodotto si passa al secondo step.

In questo step, partendo dal database JSON contenente l’elenco dei magazzini (file stores.json,
che trovi in allegato), dovrai implementare un algoritmo per mostrare tutti i magazzini che hanno
una quantità di quel prodotto al di sotto della soglia minima ammessa, ovvero
store.items[i].qty &lt; store.items[i].minQty.

Sempre nel medesimo algoritmo, l’elenco dei magazzini dovrà essere ordinato per distanza
(store.distance) in maniera crescente; a parità di distanza dovrà essere ordinato per
quantità residua dell’oggetto selezionato (store.items[i].qty).
Per il layout di questo step puoi fare riferimento al file step2.png che trovi in allegato.
Al click sulla CTA del magazzino si passa al terzo step, da realizzare in overlay.

In questo step dovrai mostrare, nel messaggio di conferma, il numero di articoli inviati al
magazzino selezionato. Tale numero è calcolato come la differenza tra la quantità disponibile e
la soglia minima (store.items[i].minQty - store.items[i].qty).
Per il layout di questo step puoi fare riferimento al file step3.png che trovi in allegato.

# Indicazioni sul progetto
Il progetto può essere sviluppato utilizzando qualunque libreria aggiuntiva sia ritenuta utile o
necessaria.

Il progetto è stato mantenuto volutamente semplice a livello di specifiche, in modo che ci si
possa concentrare sul renderlo “production ready”. Valuteremo, quindi, anche il modo il codice è
stato organizzato e gestito, tenendo conto di come sono stati separati i vari moduli.

Pertanto, pur trattandosi di un prodotto minuscolo, applica tutte le best practices appropriate,
anche a costo di sovra ingegnerizzare (con le giuste proporzioni) il tutto.
