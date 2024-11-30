         const exchangeRate = 1.1; 
        let isEuro = true;

        function updatePrices() {
            const prices = document.querySelectorAll(".prijs");
            prices.forEach(priceElement => {
                let priceText = priceElement.textContent;
                let price = parseFloat(priceText.replace(/[€$]/g, ""));
                
                if (isEuro) {
                    // VAN EURO NAAR DOLLAR
                    price = (price * exchangeRate).toFixed(2);
                    priceElement.textContent = `$${price}`;
                } 
                else {
                    // VAN DOLLAR NAAR EURO
                    price = (price / exchangeRate).toFixed(2);
                    priceElement.textContent = `€${price}`;
                }
            });

            isEuro = !isEuro;
            const button = document.getElementById("changeCurrency");
            button.textContent = isEuro ? "Change to Dollar" : "Change to Euro";
        }

        document.getElementById("changeCurrency").addEventListener("click", updatePrices);
