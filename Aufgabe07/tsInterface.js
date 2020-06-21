"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    //Interface
    function createArtikel() {
        for (let i = 0; i < Aufgabe07.artikel.length; i++) {
            if (Aufgabe07.artikel[i].category == 1) {
                let newDiv = document.createElement("div");
                newDiv.id = "div" + i;
                document.getElementById("flex1")?.appendChild(newDiv);
                newDiv.setAttribute("index", i.toString());
            }
            if (Aufgabe07.artikel[i].category == 2) {
                let newDiv = document.createElement("div");
                newDiv.id = "div" + i;
                document.getElementById("flex2")?.appendChild(newDiv);
                newDiv.setAttribute("index", i.toString());
            }
            if (Aufgabe07.artikel[i].category == 3) {
                let newDiv = document.createElement("div");
                newDiv.id = "div" + i;
                document.getElementById("flex3")?.appendChild(newDiv);
                newDiv.setAttribute("index", i.toString());
            }
            if (Aufgabe07.artikel[i].category == 4) {
                let newDiv = document.createElement("div");
                newDiv.id = "div" + i;
                document.getElementById("flex4")?.appendChild(newDiv);
                newDiv.setAttribute("index", i.toString());
            }
            //Bild
            let imgElement = document.createElement("img");
            imgElement.src = Aufgabe07.artikel[i].bild;
            document.getElementById("div" + i)?.appendChild(imgElement);
            //Name
            let name = document.createElement("h1");
            name.innerHTML = Aufgabe07.artikel[i].name;
            document.getElementById("div" + i)?.appendChild(name);
            //Beschreibung
            let beschreibung = document.createElement("p");
            beschreibung.innerHTML = Aufgabe07.artikel[i].beschreibung;
            document.getElementById("div" + i)?.appendChild(beschreibung);
            //Farbe
            let farbe = document.createElement("p");
            farbe.innerHTML = Aufgabe07.artikel[i].farbe;
            document.getElementById("div" + i)?.appendChild(farbe);
            //Programmierbar
            let programmierbar = document.createElement("p");
            programmierbar.innerHTML = Aufgabe07.artikel[i].farbe;
            document.getElementById("div" + i)?.appendChild(farbe);
            //wasserdicht
            let wasserdicht = document.createElement("p");
            wasserdicht.innerHTML = Aufgabe07.artikel[i].wasserdicht;
            document.getElementById("div" + i)?.appendChild(wasserdicht);
            //Wifi
            let wifi = document.createElement("p");
            wifi.innerHTML = Aufgabe07.artikel[i].wifi;
            document.getElementById("div" + i)?.appendChild(wifi);
            //Länge
            let länge = document.createElement("p");
            länge.innerHTML = Aufgabe07.artikel[i].länge;
            document.getElementById("div" + i)?.appendChild(länge);
            //Smarthome
            let smarthome = document.createElement("p");
            smarthome.innerHTML = Aufgabe07.artikel[i].smarthome;
            document.getElementById("div" + i)?.appendChild(smarthome);
            //Preis
            let price = document.createElement("h2");
            price.innerHTML = Aufgabe07.artikel[i].preis + "€";
            document.getElementById("div" + i)?.appendChild(price);
            //Kaufen
            let kaufen = document.createElement("button");
            kaufen.innerHTML = "Buy";
            kaufen.addEventListener("click", handleWaren);
            document.getElementById("div" + i)?.appendChild(kaufen);
            kaufen.setAttribute("preis", Aufgabe07.artikel[i].preis.toString());
        }
    }
    Aufgabe07.createArtikel = createArtikel;
    //Warenkorb
    let summe = 0;
    let count = 0;
    let artikelCounter = 0;
    let blasenDiv = document.createElement("div");
    let cartArtikel = [];
    function handleWaren(_event) {
        if (artikelCounter >= 0) {
            document.getElementById("warencounter")?.appendChild(blasenDiv);
        }
        artikelCounter++;
        blasenDiv.innerHTML = artikelCounter + "";
        if (_event.currentTarget?.getAttribute("preis")) {
            summe = count + parseFloat(_event.currentTarget?.getAttribute("preis"));
            count = summe;
        }
        console.log(summe.toFixed(0));
        let indexButton = _event.currentTarget.parentElement.getAttribute("index");
        let indexNr = parseInt(indexButton);
        cartArtikel.push(Aufgabe07.artikel[indexNr]);
        localStorage.setItem("artikel_bild" + (cartArtikel.length - 1), Aufgabe07.artikel[indexNr].bild);
        localStorage.setItem("artikel_name" + (cartArtikel.length - 1), Aufgabe07.artikel[indexNr].name);
        localStorage.setItem("artikel_beschreibung" + (cartArtikel.length - 1), Aufgabe07.artikel[indexNr].beschreibung);
        localStorage.setItem("artikel_farbe" + (cartArtikel.length - 1), Aufgabe07.artikel[indexNr].farbe);
        localStorage.setItem("artikel_länge" + (cartArtikel.length - 1), Aufgabe07.artikel[indexNr].länge);
        localStorage.setItem("artikel_programmierbar" + (cartArtikel.length - 1), Aufgabe07.artikel[indexNr].programmierbar);
        localStorage.setItem("artikel_wasserdicht" + (cartArtikel.length - 1), Aufgabe07.artikel[indexNr].wasserdicht);
        localStorage.setItem("artikel_wifi" + (cartArtikel.length - 1), Aufgabe07.artikel[indexNr].wifi);
        localStorage.setItem("artikel_smarthome" + (cartArtikel.length - 1), Aufgabe07.artikel[indexNr].smarthome);
        localStorage.setItem("artikel_preis" + (cartArtikel.length - 1), Aufgabe07.artikel[indexNr].preis.toString());
        localStorage.setItem("anzahlArtikel", cartArtikel.length.toString());
    }
    Aufgabe07.handleWaren = handleWaren;
    let allCategory = document.createElement("a");
    allCategory.id = "all";
    allCategory.innerHTML = "All";
    allCategory.addEventListener("click", handleKategorie);
    document.getElementById("allButton")?.appendChild(allCategory);
    let figurCategory = document.createElement("a");
    figurCategory.id = "figur";
    figurCategory.innerHTML = "Figur";
    figurCategory.addEventListener("click", handleKategorie);
    document.getElementById("figurButton")?.appendChild(figurCategory);
    let textCategory = document.createElement("a");
    textCategory.id = "text";
    textCategory.innerHTML = "Text";
    textCategory.addEventListener("click", handleKategorie);
    document.getElementById("textButton")?.appendChild(textCategory);
    let schildCategory = document.createElement("a");
    schildCategory.id = "schild";
    schildCategory.innerHTML = "Schild";
    schildCategory.addEventListener("click", handleKategorie);
    document.getElementById("schildButton")?.appendChild(schildCategory);
    let streifenCategory = document.createElement("a");
    streifenCategory.id = "streifen";
    streifenCategory.innerHTML = "Streifen";
    streifenCategory.addEventListener("click", handleKategorie);
    document.getElementById("streifenButton")?.appendChild(streifenCategory);
    function handleKategorie(_event) {
        if (_event.currentTarget.getAttribute("id") == "all") {
            document.getElementById("textBlock").style.display = "block";
            document.getElementById("figurBlock").style.display = "block";
            document.getElementById("schildBlock").style.display = "block";
            document.getElementById("streifenBlock").style.display = "block";
        }
        else if (_event.currentTarget.getAttribute("id") == "figur") {
            document.getElementById("textBlock").style.display = "none";
            document.getElementById("figurBlock").style.display = "block";
            document.getElementById("schildBlock").style.display = "none";
            document.getElementById("streifenBlock").style.display = "none";
        }
        else if (_event.currentTarget.getAttribute("id") == "text") {
            document.getElementById("textBlock").style.display = "block";
            document.getElementById("figurBlock").style.display = "none";
            document.getElementById("schildBlock").style.display = "none";
            document.getElementById("streifenBlock").style.display = "none";
        }
        else if (_event.currentTarget.getAttribute("id") == "schild") {
            document.getElementById("textBlock").style.display = "none";
            document.getElementById("figurBlock").style.display = "none";
            document.getElementById("schildBlock").style.display = "block";
            document.getElementById("streifenBlock").style.display = "none";
        }
        else if (_event.currentTarget.getAttribute("id") == "streifen") {
            document.getElementById("textBlock").style.display = "none";
            document.getElementById("figurBlock").style.display = "none";
            document.getElementById("schildBlock").style.display = "none";
            document.getElementById("streifenBlock").style.display = "block";
        }
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=tsInterface.js.map