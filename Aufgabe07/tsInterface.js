"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    //Interface
    function createArtikel() {
        for (let i = 0; i < Aufgabe07.artikel.length; i++) {
            if (Aufgabe07.artikel[i].category == 1) {
                let newDiv;
                 == document.createElement("div");
                newDiv.id = "div" + i;
                document.getElementById("flex1")?.appendChild(newDiv);
                newDiv.setAttribute("index", i.toString());
            }
            if (Aufgabe07.artikel[i].category == 2) {
                let newDiv;
                 == document.createElement("div");
                newDiv.id = "div" + i;
                document.getElementById("flex2")?.appendChild(newDiv);
                newDiv.setAttribute("index", i.toString());
            }
            if (Aufgabe07.artikel[i].category == 3) {
                let newDiv;
                 == document.createElement("div");
                newDiv.id = "div" + i;
                document.getElementById("flex3")?.appendChild(newDiv);
                newDiv.setAttribute("index", i.toString());
            }
            if (Aufgabe07.artikel[i].category == 4) {
                let newDiv;
                 == document.createElement("div");
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
            let preis = document.createElement("h2");
            preis.innerHTML = Aufgabe07.artikel[i].preis + "€";
            document.getElementById("div" + i)?.appendChild(preis);
            //Kaufen
            let kaufen = document.createElement("button");
            kaufen.innerHTML = "Buy";
            kaufen.addEventListener("click", handleTrolley);
            document.getElementById("div" + i)?.appendChild(kaufen);
            kaufen.setAttribute("preis", Aufgabe07.artikel[i].preis.toString());
        }
    }
    Aufgabe07.createArtikel = createArtikel;
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=tsInterface.js.map