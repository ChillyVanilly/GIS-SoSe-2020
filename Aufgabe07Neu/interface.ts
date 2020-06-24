namespace Aufgabe07Neu {

    //Interface

    export function create(): void {
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
                document.getElementById("flex3")?.appendChild(newDiv);
                newDiv.setAttribute("index", i.toString());
            }

            if (artikel[i].category == 4) {
                let newDiv: HTMLDivElement = document.createElement("div");
                newDiv.id = "div" + i;
                document.getElementById("flex4")?.appendChild(newDiv);
                newDiv.setAttribute("index", i.toString());
            }

            //IMG
            let imgElement: HTMLImageElement = document.createElement("img");
            imgElement.src = artikel[i].bild;
            document.getElementById("div" + i)?.appendChild(imgElement);

            //NAME
            let name: HTMLParagraphElement = document.createElement("p");
            name.innerHTML = artikel[i].name;
            document.getElementById("div" + i)?.appendChild(name);

            //DESCRIPTION
            let beschreibung: HTMLParagraphElement = document.createElement("p");
            beschreibung.innerHTML = artikel[i].beschreibung;
            document.getElementById("div" + i)?.appendChild(beschreibung);

            //FARBE
            let farbe: HTMLParagraphElement = document.createElement("p");
            farbe.innerHTML = artikel[i].farbe;
            document.getElementById("div" + i)?.appendChild(farbe);

            //PREIS
            let price: HTMLElement = document.createElement("p");
            price.innerHTML = artikel[i].preis + "€";
            document.getElementById("div" + i)?.appendChild(price);

            //BUY
            let kaufen: HTMLButtonElement = document.createElement("button");
            kaufen.innerHTML = "In den Warenkorb";
            kaufen.addEventListener("click", handleTrolley);
            document.getElementById("div" + i)?.appendChild(kaufen);
            kaufen.setAttribute("preis", artikel[i].preis.toString());
        }
    }

    //Einkaufswagen
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
        localStorage.setItem("artikel_description" + (cartArtikel.length - 1), artikel[indexNr].beschreibung);
        localStorage.setItem("artikel_farbe" + (cartArtikel.length - 1), artikel[indexNr].farbe);
        localStorage.setItem("artikel_preis" + (cartArtikel.length - 1), artikel[indexNr].preis.toString());
        localStorage.setItem("anzahlArtikel", cartArtikel.length.toString());


    }

    let allCategory: HTMLAnchorElement = document.createElement("a");
    allCategory.id = "all";
    allCategory.innerHTML = "Alle Kategorien";
    allCategory.addEventListener("click", handleKategorie);
    document.getElementById("allButton")?.appendChild(allCategory);

    let menCategory: HTMLAnchorElement = document.createElement("a");
    menCategory.id = "figur";
    menCategory.innerHTML = "Figuren";
    menCategory.addEventListener("click", handleKategorie);
    document.getElementById("figurButton")?.appendChild(menCategory);

    let womenCategory: HTMLAnchorElement = document.createElement("a");
    womenCategory.id = "schild";
    womenCategory.innerHTML = "Schilder";
    womenCategory.addEventListener("click", handleKategorie);
    document.getElementById("schildButton")?.appendChild(womenCategory);

    let textCategory: HTMLAnchorElement = document.createElement("a");
    textCategory.id = "text";
    textCategory.innerHTML = "Texte";
    textCategory.addEventListener("click", handleKategorie);
    document.getElementById("textButton")?.appendChild(textCategory);

    let streifenCategory: HTMLAnchorElement = document.createElement("a");
    streifenCategory.id = "streifen";
    streifenCategory.innerHTML = "Streifen";
    streifenCategory.addEventListener("click", handleKategorie);
    document.getElementById("streifenButton")?.appendChild(streifenCategory);

    function handleKategorie(_event: Event): void {

        if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "all") {
            (<HTMLDivElement>document.getElementById("figurBlock")).style.display = "block";
            (<HTMLDivElement>document.getElementById("schildBlock")).style.display = "block";
            (<HTMLDivElement>document.getElementById("textBlock")).style.display = "block";
            (<HTMLDivElement>document.getElementById("streifenBlock")).style.display = "block";
        } else if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "figur") {
            (<HTMLDivElement>document.getElementById("figurBlock")).style.display = "block";
            (<HTMLDivElement>document.getElementById("schildBlock")).style.display = "none";
            (<HTMLDivElement>document.getElementById("textBlock")).style.display = "none";
            (<HTMLDivElement>document.getElementById("streifenBlock")).style.display = "none";
        } else if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "schild") {
            (<HTMLDivElement>document.getElementById("figurBlock")).style.display = "none";
            (<HTMLDivElement>document.getElementById("schildBlock")).style.display = "block";
            (<HTMLDivElement>document.getElementById("textBlock")).style.display = "none";
            (<HTMLDivElement>document.getElementById("streifenBlock")).style.display = "none";
        }
        else if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "text") {
            (<HTMLDivElement>document.getElementById("figurBlock")).style.display = "none";
            (<HTMLDivElement>document.getElementById("schildBlock")).style.display = "none";
            (<HTMLDivElement>document.getElementById("textBlock")).style.display = "block";
            (<HTMLDivElement>document.getElementById("streifenBlock")).style.display = "none";
        }
        else if ((<HTMLDivElement>_event.currentTarget).getAttribute("id") == "streifen") {
            (<HTMLDivElement>document.getElementById("figurBlock")).style.display = "none";
            (<HTMLDivElement>document.getElementById("schildBlock")).style.display = "none";
            (<HTMLDivElement>document.getElementById("textBlock")).style.display = "none";
            (<HTMLDivElement>document.getElementById("streifenBlock")).style.display = "block";
        }

    }

}

