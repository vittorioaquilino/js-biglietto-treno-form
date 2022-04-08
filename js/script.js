// Creo il form per chiedere all'utente i km da percorrere e l'età
const formBtn = document.getElementById("form-btn");
const userName = document.getElementById("user-name");
const userKm = document.getElementById("user-km");
const userAge = document.getElementById("user-age");

formBtn.addEventListener("click", 
    function() {
        // Prelevo gli input dell'utente
        const name = userName.value;
        console.log(name);

        const age = userAge.value;
        console.log(age);

        const km = userKm.value;

        let priceTicket = km * 0.21;
        // Calcolare lo sconto in base al passeggero
        let discount;
        let finalPrice;

        if (age === 'minorenne') {
            discount = (priceTicket * 20 / 100);  
        } else if (age === 'over-65') {
            discount = (priceTicket * 45 / 100);
        } else {
            discount = 0
        }
        
        // Sottrare lo sconto al prezzo pieno
        finalPrice = priceTicket - discount;
        console.log('prezzo finale', finalPrice);

        // Visualizzo nella pagina le risposte dell'utente
        // - inserire le risposte negli elementi corrispondenti
        const userResponse = document.querySelector(".result p");
        console.log(userResponse);
        userResponse.innerHTML = `${name}`;

        
        // // // DA RIFARE USANDO GLI ID SUGLI LI
        const offering = document.getElementById("offerta");
        console.log(offering);
        offering.innerHTML = "standard tiket";

        const carriage = document.getElementById("carrozza");
        console.log(carriage);
        carriage.innerHTML = Math.floor((Math.random() * 10) + 1);
        
        const code = document.getElementById("codice");
        console.log(code);
        code.innerHTML = Math.floor((Math.random() * 100000) + 90000);
        
        const price =document.getElementById("costo");
        console.log(price);
        price.innerHTML = `${finalPrice}`;
         
        //  resultContainer.classList.remove("d-none");
        
    }
);
