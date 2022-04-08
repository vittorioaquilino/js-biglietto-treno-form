// Chiedere all'utente i km da percorrere
const travelKm = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
console.log(travelKm);

// Chiedere all'utente l'età
const userAge = parseInt(prompt("Quanti anni hai?"));
console.log(userAge);

// Calcolare il prezzo totale del viaggio
    // -prezzo del biglietto 0.21€ al km
let priceTiket = travelKm * 0.21;
console.log(`prezzo base: ${priceTiket}`);

// Calcolare lo sconto in base al passeggero
let discount;
let finalPrice;

if (userAge < 18) {
    discount = (priceTiket * 20 / 100);  
} else if (userAge > 65) {
    discount = (priceTiket * 45 / 100);
} else {
    discount = 0
}
console.log(`sconto: ${discount}`);
 
// Sottrare lo sconto al prezzo pieno
finalPrice = priceTiket - discount;
console.log(finalPrice);

// Creare il messaggio da visualizzare
const message = `Il prezzo del biglietto è di: €${finalPrice.toFixed(2)}`;
console.log(`prezzo finale: ${finalPrice}`);

// Stampare il prezzo finale in html
document.getElementById('price').innerHTML = message;



