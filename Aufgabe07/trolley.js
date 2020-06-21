"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    let lenght = parseInt(localStorage.getItem("anzahlArtikel"));
    let preis = 0;
    let gesamtpreis = document.createElement("p");
    for (let index = 0; index <= lenght - 1; index++) {
        //CreateDiv
        let newDiv = document.createElement("div");
        document.getElementById("flexWarenkorb").appendChild(newDiv);
        newDiv.id = "div" + index;
        console.log("div" + index);
        //Bild
        let imgElement = document.createElement("img");
        imgElement.src = localStorage.getItem("artikel_bild" + index);
        newDiv.appendChild(imgElement);
        console.log(imgElement);
        //Name
        let name = document.createElement("h1");
        name.innerHTML = localStorage.getItem("artikel_name" + index);
        newDiv.appendChild(name);
        console.log(name);
        //Beschreibung
        let beschreibung = document.createElement("p");
        beschreibung.innerHTML = localStorage.getItem("artikel_beschreibung" + index);
        newDiv.appendChild(beschreibung);
        console.log(beschreibung);
        //Farbe
        let farbe = document.createElement("p");
        farbe.innerHTML = localStorage.getItem("artikel_farbe" + index);
        newDiv.appendChild(farbe);
        console.log(farbe);
        //Länge
        let länge = document.createElement("p");
        länge.innerHTML = localStorage.getItem("artikel_länge" + index);
        newDiv.appendChild(länge);
        console.log(länge);
        //Wifi
        let wifi = document.createElement("p");
        wifi.innerHTML = localStorage.getItem("artikel_wifi" + index);
        newDiv.appendChild(wifi);
        console.log(wifi);
        //programmierbar
        let programmierbar = document.createElement("p");
        programmierbar.innerHTML = localStorage.getItem("artikel_programmierbar" + index);
        newDiv.appendChild(programmierbar);
        console.log(programmierbar);
        //wasserdicht
        let wasserdicht = document.createElement("p");
        wasserdicht.innerHTML = localStorage.getItem("artikel_wasserdicht" + index);
        newDiv.appendChild(wasserdicht);
        console.log(wasserdicht);
        //smarthome
        let smarthome = document.createElement("p");
        smarthome.innerHTML = localStorage.getItem("artikel_smarthome" + index);
        newDiv.appendChild(smarthome);
        console.log(smarthome);
        //Preis
        let price = document.createElement("h2");
        price.innerHTML = localStorage.getItem("artikel_preis" + index) + "€";
        newDiv.setAttribute("preis", price.innerHTML);
        newDiv.appendChild(price);
        console.log(price);
        //Button
        let kaufen = document.createElement("button");
        kaufen.innerHTML = "Löschen";
        newDiv.appendChild(kaufen);
        kaufen.addEventListener("click", handleDelete);
        //Preisgesamt
        preis = preis + parseFloat(price.innerHTML);
        gesamtpreis.innerHTML = "Gesamtpreis: " + preis.toFixed(0) + "€";
        document.getElementById("warenkorbWert")?.appendChild(gesamtpreis);
    }
    let delButton = document.getElementById("delButton");
    delButton.addEventListener("click", handleDeleteAll);
    function handleDelete(_event) {
        let preisString = _event.currentTarget.parentElement.getAttribute("preis");
        preis = preis - parseFloat(preisString);
        gesamtpreis.innerHTML = "Gesamtpreis: " + preis.toFixed(0) + "€";
        (_event.currentTarget.parentElement).remove();
    }
    function handleDeleteAll(_event) {
        for (let index = 0; index <= lenght; index++) {
            document.getElementById("div" + index).remove();
            gesamtpreis.innerHTML = "Gesamtpreis: " + 0 + "€";
            localStorage.clear();
        }
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=trolley.js.map