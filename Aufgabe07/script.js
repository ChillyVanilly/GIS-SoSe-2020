"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    getProducts("json_data.json");
    async function getProducts(_url) {
        let response = await fetch(_url);
        let jsonProducts = await response.json();
        Aufgabe07.allProducts = await JSON.parse(JSON.stringify(jsonProducts));
        let priceAll = 0;
        priceAll = parseFloat(localStorage.getItem("gesamtPreis"));
        let artikelZaehler = 0;
        artikelZaehler = parseInt(localStorage.getItem("artikelCount"));
        let buttondelete = document.createElement("button");
        buttondelete.innerHTML = "Warenkorb leeren";
        buttondelete.setAttribute("id", "Delete-Button");
        document.getElementById("Preis-Delete")?.appendChild(buttondelete);
        buttondelete.addEventListener("click", handleDelete);
        function handleDelete(_click) {
            localStorage.clear();
            location.reload();
            priceAll = 0;
            localStorage.removeItem("Summe");
            localStorage.setItem("Summe", priceAll.toString());
            artikelZaehler = 0;
            localStorage.removeItem("artikelCount");
            localStorage.setItem("artikelCount", artikelZaehler.toString());
        }
        if (parseInt(localStorage.getItem("artikelCount")) == 0) {
            let emptyCartH = document.createElement("h1");
            emptyCartH.innerHTML = "Der Warenkorb ist leer";
            document.getElementById("Price-Delete")?.appendChild(emptyCartH);
        }
        else {
            let priceParagraph = document.createElement("h3");
            priceParagraph.setAttribute("id", "Preis-Cart");
            priceParagraph.innerHTML = "Preis: " + priceAll.toFixed(2) + "€";
            document.getElementById("Price-Delete")?.appendChild(priceParagraph);
            buttondelete.style.display = "leinline-block";
        }
        //Function to identify
        for (let i = 1; i <= artikelZaehler; i++) {
            //Div
            let divElement = document.createElement("div");
            divElement.setAttribute("class", "Produkt");
            divElement.id = "Produkt" + i;
            document.getElementById("flex-cart")?.appendChild(divElement);
            //Name
            let nameElement = document.createElement("h1");
            nameElement.innerHTML = localStorage.getItem("name" + i);
            divElement.appendChild(nameElement);
            //Bild
            let imgElement = document.createElement("img");
            imgElement.setAttribute("src", localStorage.getItem("img" + i));
            imgElement.setAttribute("alt", localStorage.getItem("title" + i));
            divElement.appendChild(imgElement);
            //Beschreibung
            let descElement = document.createElement("p");
            descElement.innerHTML = localStorage.getItem("beschreibung" + i);
            divElement.appendChild(descElement);
            //Farbe
            let farbeElement = document.createElement("p");
            farbeElement.innerHTML = localStorage.getItem("farbe" + i);
            divElement.appendChild(farbeElement);
            //Programmierbar
            let programmierbarElement = document.createElement("p");
            programmierbarElement.innerHTML = localStorage.getItem("programmierbar" + i);
            divElement.appendChild(programmierbarElement);
            //länge
            let laengeElement = document.createElement("p");
            laengeElement.innerHTML = localStorage.getItem("länge" + i);
            divElement.appendChild(laengeElement);
            //wifi
            let wifiElement = document.createElement("p");
            wifiElement.innerHTML = localStorage.getItem("wifi" + i);
            divElement.appendChild(wifiElement);
            //wasserdicht
            let wasserdichtElement = document.createElement("p");
            wasserdichtElement.innerHTML = localStorage.getItem("wasserdicht" + i);
            divElement.appendChild(wasserdichtElement);
            //smarthome
            let smarthomeElement = document.createElement("p");
            smarthomeElement.innerHTML = localStorage.getItem("smarthome" + i);
            divElement.appendChild(smarthomeElement);
            //Preis
            let preisElement = document.createElement("p");
            let p = "Preis: " + localStorage.getItem("preis" + i) + "€";
            preisElement.innerHTML = p.italics();
            divElement.appendChild(preisElement);
            //Button
            let buttonElement = document.createElement("button");
            buttonElement.innerHTML = "Löschen";
            buttonElement.setAttribute("identifier", "" + i);
            buttonElement.addEventListener("click", handleDeleteArticle);
            divElement.appendChild(buttonElement);
        }
        //Funktion, um Artikel aus Einkaufswagen zu entfernen
        function handleDeleteArticle(_click) {
            //Identifizieren, um welchen Artikel es sich handelt
            let button = _click.currentTarget;
            let idButton = button.getAttribute("identifier");
            //Preis neu berechnen
            priceAll = priceAll - parseFloat(localStorage.getItem("preis" + idButton));
            localStorage.removeItem("gesamtPreis");
            localStorage.setItem("gesamtPreis", priceAll.toString());
            //Artikel entfernen
            localStorage.removeItem("name" + idButton);
            localStorage.removeItem("bild" + idButton);
            localStorage.removeItem("beschreibung" + idButton);
            localStorage.removeItem("farbe" + idButton);
            localStorage.removeItem("programmierbar" + idButton);
            localStorage.removeItem("länge" + idButton);
            localStorage.removeItem("wifi" + idButton);
            localStorage.removeItem("wasserdicht" + idButton);
            localStorage.removeItem("smarthome" + idButton);
            localStorage.removeItem("preis" + idButton);
            let removeDiv = document.getElementById("Artikel" + idButton);
            removeDiv.remove();
            //neu anordnen
            for (let i = parseInt(idButton); i <= artikelZaehler; i++) {
                localStorage.setItem("name" + i, localStorage.getItem("name" + (i + 1)));
                localStorage.setItem("bild" + i, localStorage.getItem("bild" + (i + 1)));
                localStorage.setItem("beschreibung" + i, localStorage.getItem("beschreibung" + (i + 1)));
                localStorage.setItem("farbe" + i, localStorage.getItem("farbe" + (i + 1)));
                localStorage.setItem("programmierbar" + i, localStorage.getItem("programmierbar" + (i + 1)));
                localStorage.setItem("länge" + i, localStorage.getItem("länge" + (i + 1)));
                localStorage.setItem("wifi" + i, localStorage.getItem("wifi" + (i + 1)));
                localStorage.setItem("wasserdicht" + i, localStorage.getItem("wasserdicht" + (i + 1)));
                localStorage.setItem("smarthome" + i, localStorage.getItem("smarthome") + (i + 1));
                localStorage.setItem("preis" + i, localStorage.getItem("price" + (i + 1)));
                localStorage.removeItem("name" + (i + 1));
                localStorage.removeItem("bild" + (i + 1));
                localStorage.removeItem("beschreibung" + (i + 1));
                localStorage.removeItem("farbe" + (i + 1));
                localStorage.removeItem("programmierbar" + (i + 1));
                localStorage.removeItem("länge" + (i + 1));
                localStorage.removeItem("wifi" + (i + 1));
                localStorage.removeItem("wasserdicht" + (i + 1));
                localStorage.removeItem("smarthome" + (i + 1));
                localStorage.removeItem("preis" + (i + 1));
            }
            //neu zählen
            artikelZaehler--;
            localStorage.removeItem("artikelCount");
            localStorage.setItem("artikelCount", artikelZaehler.toString());
            document.location.reload();
        }
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=script.js.map