"use strict";
var Aufgabe07Neu;
(function (Aufgabe07Neu) {
    let length = parseFloat(localStorage.getItem("anzahlArtikel"));
    let preis = 0;
    let gesamtpreis = document.createElement("p");
    for (let index = 0; index <= length - 1; index++) {
        //Div erstellen
        let newDiv = document.createElement("div");
        document.getElementById("flexWarenkorb").appendChild(newDiv);
        newDiv.id = "div" + index;
        console.log("div" + index);
        //IMG
        let imgElement = document.createElement("img");
        imgElement.src = localStorage.getItem("artikel_bild" + index);
        newDiv.appendChild(imgElement);
        console.log(imgElement);
        //NAME
        let name = document.createElement("p");
        name.innerHTML = localStorage.getItem("artikel_name" + index);
        newDiv.appendChild(name);
        console.log(name);
        //BESCHREIBUNG
        let beschreibung = document.createElement("p");
        beschreibung.innerHTML = localStorage.getItem("artikel_description" + index);
        newDiv.appendChild(beschreibung);
        console.log(beschreibung);
        //FARBE
        let farbe = document.createElement("p");
        farbe.innerHTML = localStorage.getItem("artikel_farbe" + index);
        newDiv.appendChild(farbe);
        console.log(farbe);
        //PREIS
        let price = document.createElement("p");
        price.innerHTML = localStorage.getItem("artikel_preis" + index) + "€";
        newDiv.setAttribute("preis", price.innerHTML);
        newDiv.appendChild(price);
        console.log(price);
        //BUTTON
        let kaufen = document.createElement("button");
        kaufen.innerHTML = "Aus dem Warenkorb entfernen";
        newDiv.appendChild(kaufen);
        kaufen.addEventListener("click", handleDelete);
        //Gesamtpreis berechnen
        preis = preis + parseFloat(price.innerHTML);
        gesamtpreis.innerHTML = "Gesamtwert: " + preis.toFixed(0) + "€";
        document.getElementById("warenkorbWert")?.appendChild(gesamtpreis);
    }
    let delButton = document.getElementById("delButton");
    delButton.addEventListener("click", handleDeleteAll);
    function handleDelete(_event) {
        let preisString = _event.currentTarget.parentElement.getAttribute("preis");
        preis = preis - parseFloat(preisString);
        gesamtpreis.innerHTML = "Gesamtwert: " + preis.toFixed(0) + "€";
        (_event.currentTarget.parentElement).remove();
    }
    function handleDeleteAll(_event) {
        for (let index = 0; index <= length; index++) {
            document.getElementById("div" + index).remove();
            gesamtpreis.innerHTML = "Gesamtwert: " + 0 + "€";
            localStorage.clear();
        }
    }
})(Aufgabe07Neu || (Aufgabe07Neu = {}));
//# sourceMappingURL=waren.js.map