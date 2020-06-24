"use strict";
var Aufgabe07Neu;
(function (Aufgabe07Neu) {
    //Interface
    function createArtikel() {
        for (let i = 0; i < Aufgabe07Neu.artikel.length; i++) {
            if (Aufgabe07Neu.artikel[i].category == 1) {
                let newDiv = document.createElement("div");
                newDiv.id = "div" + i;
                document.getElementById("flex1")?.appendChild(newDiv);
                newDiv.setAttribute("index", i.toString());
            }
            if (Aufgabe07Neu.artikel[i].category == 2) {
                let newDiv = document.createElement("div");
                newDiv.id = "div" + i;
                document.getElementById("flex2")?.appendChild(newDiv);
                newDiv.setAttribute("index", i.toString());
            }
            if (Aufgabe07Neu.artikel[i].category == 3) {
                let newDiv = document.createElement("div");
                newDiv.id = "div" + i;
                document.getElementById("flex3")?.appendChild(newDiv);
                newDiv.setAttribute("index", i.toString());
            }
            if (Aufgabe07Neu.artikel[i].category == 4) {
                let newDiv = document.createElement("div");
                newDiv.id = "div" + i;
                document.getElementById("flex4")?.appendChild(newDiv);
                newDiv.setAttribute("index", i.toString());
            }
            //IMG
            let imgElement = document.createElement("img");
            imgElement.src = Aufgabe07Neu.artikel[i].bild;
            document.getElementById("div" + i)?.appendChild(imgElement);
            //NAME
            let name = document.createElement("p");
            name.innerHTML = Aufgabe07Neu.artikel[i].name;
            document.getElementById("div" + i)?.appendChild(name);
            //DESCRIPTION
            let beschreibung = document.createElement("p");
            beschreibung.innerHTML = Aufgabe07Neu.artikel[i].beschreibung;
            document.getElementById("div" + i)?.appendChild(beschreibung);
            //FARBE
            let farbe = document.createElement("p");
            farbe.innerHTML = Aufgabe07Neu.artikel[i].farbe;
            document.getElementById("div" + i)?.appendChild(farbe);
            //PREIS
            let price = document.createElement("p");
            price.innerHTML = Aufgabe07Neu.artikel[i].preis + "€";
            document.getElementById("div" + i)?.appendChild(price);
            //BUY
            let kaufen = document.createElement("button");
            kaufen.innerHTML = "In den Warenkorb";
            kaufen.addEventListener("click", handleTrolley);
            document.getElementById("div" + i)?.appendChild(kaufen);
            kaufen.setAttribute("preis", Aufgabe07Neu.artikel[i].preis.toString());
        }
    }
    Aufgabe07Neu.createArtikel = createArtikel;
    //Einkaufswagen
    let summe = 0;
    let count = 0;
    let artikelCounter = 0;
    let blasenDiv = document.createElement("div");
    let cartArtikel = [];
    function handleTrolley(_event) {
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
        cartArtikel.push(Aufgabe07Neu.artikel[indexNr]);
        localStorage.setItem("artikel_bild" + (cartArtikel.length - 1), Aufgabe07Neu.artikel[indexNr].bild);
        localStorage.setItem("artikel_name" + (cartArtikel.length - 1), Aufgabe07Neu.artikel[indexNr].name);
        localStorage.setItem("artikel_description" + (cartArtikel.length - 1), Aufgabe07Neu.artikel[indexNr].beschreibung);
        localStorage.setItem("artikel_farbe" + (cartArtikel.length - 1), Aufgabe07Neu.artikel[indexNr].farbe);
        localStorage.setItem("artikel_preis" + (cartArtikel.length - 1), Aufgabe07Neu.artikel[indexNr].preis.toString());
        localStorage.setItem("anzahlArtikel", cartArtikel.length.toString());
    }
    Aufgabe07Neu.handleTrolley = handleTrolley;
    let allCategory = document.createElement("a");
    allCategory.id = "all";
    allCategory.innerHTML = "Alle Kategorien";
    allCategory.addEventListener("click", handleKategorie);
    document.getElementById("allButton")?.appendChild(allCategory);
    let menCategory = document.createElement("a");
    menCategory.id = "figur";
    menCategory.innerHTML = "Figuren";
    menCategory.addEventListener("click", handleKategorie);
    document.getElementById("figurButton")?.appendChild(menCategory);
    let womenCategory = document.createElement("a");
    womenCategory.id = "schild";
    womenCategory.innerHTML = "Schilder";
    womenCategory.addEventListener("click", handleKategorie);
    document.getElementById("schildButton")?.appendChild(womenCategory);
    let textCategory = document.createElement("a");
    textCategory.id = "text";
    textCategory.innerHTML = "Texte";
    textCategory.addEventListener("click", handleKategorie);
    document.getElementById("textButton")?.appendChild(textCategory);
    let streifenCategory = document.createElement("a");
    streifenCategory.id = "streifen";
    streifenCategory.innerHTML = "Streifen";
    streifenCategory.addEventListener("click", handleKategorie);
    document.getElementById("streifenButton")?.appendChild(streifenCategory);
    function handleKategorie(_event) {
        if (_event.currentTarget.getAttribute("id") == "all") {
            document.getElementById("figurBlock").style.display = "block";
            document.getElementById("schildBlock").style.display = "block";
            document.getElementById("textBlock").style.display = "block";
            document.getElementById("streifenBlock").style.display = "block";
        }
        else if (_event.currentTarget.getAttribute("id") == "figur") {
            document.getElementById("figurBlock").style.display = "block";
            document.getElementById("schildBlock").style.display = "none";
            document.getElementById("textBlock").style.display = "none";
            document.getElementById("streifenBlock").style.display = "none";
        }
        else if (_event.currentTarget.getAttribute("id") == "schild") {
            document.getElementById("figurBlock").style.display = "none";
            document.getElementById("schildBlock").style.display = "block";
            document.getElementById("textBlock").style.display = "none";
            document.getElementById("streifenBlock").style.display = "none";
        }
        else if (_event.currentTarget.getAttribute("id") == "text") {
            document.getElementById("figurBlock").style.display = "none";
            document.getElementById("schildBlock").style.display = "none";
            document.getElementById("textBlock").style.display = "block";
            document.getElementById("streifenBlock").style.display = "none";
        }
        else if (_event.currentTarget.getAttribute("id") == "streifen") {
            document.getElementById("figurBlock").style.display = "none";
            document.getElementById("schildBlock").style.display = "none";
            document.getElementById("textBlock").style.display = "none";
            document.getElementById("streifenBlock").style.display = "block";
        }
    }
})(Aufgabe07Neu || (Aufgabe07Neu = {}));
//# sourceMappingURL=interface.js.map