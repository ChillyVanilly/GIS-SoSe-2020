namespace Aufgabe07 {
    //Interface

    export function createArtikel(): void {
        for (let i: number = 0; i < artikel.length; i++) {

            if (artikel[i].category == 1) {
                let newDiv: HTMLDivElement = document.createElement("div");
                newDiv.id = "div" + i;
                document.getElementById("flex1")?.appendChild(newDiv);
                newDiv.setAttribute("index", i.toString());
            }

            
            if (artikel[i].category == 2) {
                let newDiv: HTMLDivElement = document.createElement("div");
                newDiv.id = "div" + i;
                document.getElementById("flex2")?.appendChild(newDiv);
                newDiv.setAttribute("index", i.toString());
            }

            
            if (artikel[i].category == 3) {
                let newDiv: HTMLDivElement = document.createElement("div");
                newDiv.id = "div" + i;
                document.getElementById("flex1+3")?.appendChild(newDiv);
                newDiv.setAttribute("index", i.toString());
            }

            
            if (artikel[i].category == 4) {
                let newDiv: HTMLDivElement = document.createElement("div");
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
            let price: HTMLElement = document.createElement("h2");
            price.innerHTML = artikel[i].preis + "€";
            document.getElementById("div" + i)?.appendChild(price);

            //Kaufen
            let kaufen: HTMLButtonElement = document.createElement("button");
            kaufen.innerHTML = "Buy";
            kaufen.addEventListener("click", handleTrolley);
            document.getElementById("div" + i)?.appendChild(kaufen);
            kaufen.setAttribute("preis", artikel[i].preis.toString());

        }
    }

    //Warenkorb
    let summe: number = 0;
    let count: number = 0;
    let artikelCounter: number = 0;
    let blasenDiv: HTMLDivElement = document.createElement("div");

    let cartArtikel: Artikel[] = [];

    export function handleTrolley(_event: Event): void {

        if (artikelCounter >= 0) {
            document.getElementById("warencounter")?.appendChild(blasenDiv);
        }
        artikelCounter++;
        blasenDiv.innerHTML = artikelCounter + "";

        if ((<HTMLButtonElement>_event.currentTarget)?.getAttribute("preis")) {
            summe = count + parseFloat((<HTMLButtonElement>_event.currentTarget)?.getAttribute("preis")!);
            count = summe;
        }
        console.log(summe.toFixed(0));

        let indexButton: string = (<HTMLDivElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("index")!;
        let indexNr: number = parseInt(indexButton);

        cartArtikel.push(artikel[indexNr]);
        localStorage.setItem("artikel_bild" + (cartArtikel.length - 1), artikel[indexNr].bild);
        localStorage.setItem("artikel_name" + (cartArtikel.length - 1), artikel[indexNr].name);
        localStorage.setItem("artikel_beschreibung" + (cartArtikel.length - 1), artikel[indexNr].beschreibung);
        localStorage.setItem("artikel_farbe" + (cartArtikel.length - 1), artikel[indexNr].farbe);
        localStorage.setItem("artikel_länge" + (cartArtikel.length - 1), artikel[indexNr].länge);
        localStorage.setItem("artikel_programmierbar" + (cartArtikel.length - 1), artikel[indexNr].programmierbar);
        localStorage.setItem("artikel_wasserdicht" + (cartArtikel.length - 1), artikel[indexNr].wasserdicht);
        localStorage.setItem("artikel_wifi" + (cartArtikel.length - 1), artikel[indexNr].wifi);
        localStorage.setItem("artikel_smarthome" + (cartArtikel.length - 1), artikel[indexNr].smarthome);
        localStorage.setItem("artikel_preis" + (cartArtikel.length - 1), artikel[indexNr].preis.toString());
        localStorage.setItem("anzahlArtikel", cartArtikel.length.toString());


    }

    let allCategory: HTMLAnchorElement = document.createElement("a");
    allCategory.id = "all";
    allCategory.innerHTML = "All";
    allCategory.addEventListener("click", handleKategorie);
    document.getElementById("allButton")?.appendChild(allCategory);

    let figurCategory: HTMLAnchorElement = document.createElement("a");
    figurCategory.id = "figur";
    figurCategory.innerHTML = "Figur";
    figurCategory.addEventListener("click", handleKategorie);
    document.getElementById("figurButton")?.appendChild(figurCategory);

    let textCategory: HTMLAnchorElement = document.createElement("a");
    textCategory.id = "text";
    textCategory.innerHTML = "Text";
    textCategory.addEventListener("click", handleKategorie);
    document.getElementById("textButton")?.appendChild(textCategory);

    let schildCategory: HTMLAnchorElement = document.createElement("a");
    schildCategory.id = "schild";
    schildCategory.innerHTML = "Schild";
    schildCategory.addEventListener("click", handleKategorie);
    document.getElementById("schildButton")?.appendChild(schildCategory);

    let streifenCategory: HTMLAnchorElement = document.createElement("a");
    streifenCategory.id = "streifen";
    streifenCategory.innerHTML = "Streifen";
    streifenCategory.addEventListener("click", handleKategorie);
    document.getElementById("streifenButton")?.appendChild(streifenCategory);


    function handleKategorie(_event: Event): void {

        if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "all") {
            (<HTMLDivElement>document.getElementById("textBlock")).style.display = "block";
            (<HTMLDivElement>document.getElementById("figurBlock")).style.display = "block";
            (<HTMLDivElement>document.getElementById("schildBlock")).style.display = "block";
            (<HTMLDivElement>document.getElementById("streifenBlock")).style.display = "block";
        } else if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "figur") {
            (<HTMLDivElement>document.getElementById("textBlock")).style.display = "none";
            (<HTMLDivElement>document.getElementById("figurBlock")).style.display = "block";
            (<HTMLDivElement>document.getElementById("schildBlock")).style.display = "none";
            (<HTMLDivElement>document.getElementById("streifenBlock")).style.display = "none";
        } else if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "text") {
            (<HTMLDivElement>document.getElementById("textBlock")).style.display = "block";
            (<HTMLDivElement>document.getElementById("figurBlock")).style.display = "none";
            (<HTMLDivElement>document.getElementById("schildBlock")).style.display = "none";
            (<HTMLDivElement>document.getElementById("streifenBlock")).style.display = "none";
        } else if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "schild") {
            (<HTMLDivElement>document.getElementById("textBlock")).style.display = "none";
            (<HTMLDivElement>document.getElementById("figurBlock")).style.display = "none";
            (<HTMLDivElement>document.getElementById("schildBlock")).style.display = "block";
            (<HTMLDivElement>document.getElementById("streifenBlock")).style.display = "none";
        } else if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "streifen") {
            (<HTMLDivElement>document.getElementById("textBlock")).style.display = "none";
            (<HTMLDivElement>document.getElementById("figurBlock")).style.display = "none";
            (<HTMLDivElement>document.getElementById("schildBlock")).style.display = "none";
            (<HTMLDivElement>document.getElementById("streifenBlock")).style.display = "block";
        }

    }
}

