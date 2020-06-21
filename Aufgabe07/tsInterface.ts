namespace Aufgabe07 {
    //Interface

    export function createArtikel(): void {
        for (let i: number = 0; i < artikel.length; i++) {

            if (artikel[i].category == 1) {
                let newDiv: HTMLDivElement == document.createElement("div");
                newDiv.id = "div" + i;
                document.getElementById("flex1")?.appendChild(newDiv);
                newDiv.setAttribute("index", i.toString());
            }
            if (artikel[i].category == 2) {
                let newDiv: HTMLDivElement == document.createElement("div");
                newDiv.id = "div" + i;
                document.getElementById("flex2")?.appendChild(newDiv);
                newDiv.setAttribute("index", i.toString());
            }
            if (artikel[i].category == 3) {
                let newDiv: HTMLDivElement == document.createElement("div");
                newDiv.id = "div" + i;
                document.getElementById("flex3")?.appendChild(newDiv);
                newDiv.setAttribute("index", i.toString());
            }
            if (artikel[i].category == 4) {
                let newDiv: HTMLDivElement == document.createElement("div");
                newDiv.id = "div" + i;
                document.getElementById("flex4")?.appendChild(newDiv);
                newDiv.setAttribute("index", i.toString());
            }

            //Bild
            let imgElement: HTMLImageElement = document.createElement("img");
            imgElement.src = artikel[i].bild;
            document.getElementById("div" + i)?.appendChild(imgElement);

            //Name
            let name: HTMLParagraphElement = document.createElement("h1");
            name.innerHTML = artikel[i].name;
            document.getElementById("div" + i)?.appendChild(name);

            //Beschreibung
            let beschreibung: HTMLParagraphElement = document.createElement("p");
            beschreibung.innerHTML = artikel[i].beschreibung;
            document.getElementById("div" + i)?.appendChild(beschreibung);

            //Farbe
            let farbe: HTMLParagraphElement = document.createElement("p");
            farbe.innerHTML = artikel[i].farbe;
            document.getElementById("div" + i)?.appendChild(farbe);

            //Programmierbar
            let programmierbar: HTMLParagraphElement = document.createElement("p");
            programmierbar.innerHTML = artikel[i].farbe;
            document.getElementById("div" + i)?.appendChild(farbe);

            //wasserdicht
            let wasserdicht: HTMLParagraphElement = document.createElement("p");
            wasserdicht.innerHTML = artikel[i].wasserdicht;
            document.getElementById("div" + i)?.appendChild(wasserdicht);

            //Wifi
            let wifi: HTMLParagraphElement = document.createElement("p");
            wifi.innerHTML = artikel[i].wifi;
            document.getElementById("div" + i)?.appendChild(wifi);

            //Länge
            let länge: HTMLParagraphElement = document.createElement("p");
            länge.innerHTML = artikel[i].länge;
            document.getElementById("div" + i)?.appendChild(länge);

            //Smarthome
            let smarthome: HTMLParagraphElement = document.createElement("p");
            smarthome.innerHTML = artikel[i].smarthome;
            document.getElementById("div" + i)?.appendChild(smarthome);

            //Preis
            let preis: HTMLElement = document.createElement("h2");
            preis.innerHTML = artikel[i].preis + "€";
            document.getElementById("div" + i)?.appendChild(preis);

            //Kaufen
            let kaufen: HTMLButtonElement = document.createElement("button");
            kaufen.innerHTML = "Buy";
            kaufen.addEventListener("click", handleTrolley);
            document.getElementById("div" + i)?.appendChild(kaufen);
            kaufen.setAttribute("preis", artikel[i].preis.toString());

        }
    }
}