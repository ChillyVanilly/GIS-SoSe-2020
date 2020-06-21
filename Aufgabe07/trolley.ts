namespace Aufgabe07 {

    let lenght: number = parseInt(localStorage.getItem("anzahlArtikel")!);
    let preis: number = 0;
    let gesamtpreis: HTMLParagraphElement = document.createElement("p");

    for (let index: number = 0; index <= lenght - 1; index++) {

        //CreateDiv
        let newDiv: HTMLDivElement = document.createElement("div");
        (<HTMLElement>document.getElementById("flexWarenkorb")).appendChild(newDiv);
        newDiv.id = "div" + index;
        console.log("div" + index);

        //Bild
        let imgElement: HTMLImageElement = document.createElement("img");
        imgElement.src = localStorage.getItem("artikel_bild" + index)!;
        newDiv.appendChild(imgElement);
        console.log(imgElement);

        //Name
        let name: HTMLParagraphElement = document.createElement("h1");
        name.innerHTML = localStorage.getItem("artikel_name" + index)!;
        newDiv.appendChild(name);
        console.log(name);

        //Beschreibung
        let beschreibung: HTMLParagraphElement = document.createElement("p");
        beschreibung.innerHTML = localStorage.getItem("artikel_beschreibung" + index)!;
        newDiv.appendChild(beschreibung);
        console.log(beschreibung);

        //Farbe
        let farbe: HTMLParagraphElement = document.createElement("p");
        farbe.innerHTML = localStorage.getItem("artikel_farbe" + index)!;
        newDiv.appendChild(farbe);
        console.log(farbe);

        //Länge
        let länge: HTMLParagraphElement = document.createElement("p");
        länge.innerHTML = localStorage.getItem("artikel_länge" + index)!;
        newDiv.appendChild(länge);
        console.log(länge);

        //Wifi
        let wifi: HTMLParagraphElement = document.createElement("p");
        wifi.innerHTML = localStorage.getItem("artikel_wifi" + index)!;
        newDiv.appendChild(wifi);
        console.log(wifi);

        //programmierbar
        let programmierbar: HTMLParagraphElement = document.createElement("p");
        programmierbar.innerHTML = localStorage.getItem("artikel_programmierbar" + index)!;
        newDiv.appendChild(programmierbar);
        console.log(programmierbar);

        //wasserdicht
        let wasserdicht: HTMLParagraphElement = document.createElement("p");
        wasserdicht.innerHTML = localStorage.getItem("artikel_wassereicht" + index)!;
        newDiv.appendChild(wasserdicht);
        console.log(wasserdicht);

        //smarthome
        let smarthome: HTMLParagraphElement = document.createElement("p");
        smarthome.innerHTML = localStorage.getItem("artikel_smarthome" + index)!;
        newDiv.appendChild(smarthome);
        console.log(smarthome);

        //Preis
        let price: HTMLParagraphElement = document.createElement("h2");
        price.innerHTML = localStorage.getItem("artikel_preis" + index) + "€"!;
        newDiv.setAttribute("preis", price.innerHTML);
        newDiv.appendChild(price);
        console.log(price);

        //Button
        let kaufen: HTMLButtonElement = document.createElement("button");
        kaufen.innerHTML = "Löschen";
        newDiv.appendChild(kaufen);
        kaufen.addEventListener("click", handleDelete);

        //Preisgesamt
        preis = preis + parseFloat(price.innerHTML);
        gesamtpreis.innerHTML = "Gesamtpreis: " +  preis.toFixed(0) + "€";
        document.getElementById("warenkorbWert")?.appendChild(gesamtpreis);

    }
    let delButton: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("delButton"));
    delButton.addEventListener("click", handleDeleteAll);

    function handleDelete(_event: Event): void {
        let preisString: string = (<HTMLParagraphElement>(<HTMLElement>_event.currentTarget).parentElement).getAttribute("preis")!;
        preis = preis - parseFloat(preisString);
        gesamtpreis.innerHTML = "Gesamtpreis: " + preis.toFixed(0) + "€";
        ((<HTMLDivElement>_event.currentTarget).parentElement!).remove();
    }

    function handleDeleteAll(_event: Event): void {
        for (let index: number = 0; index <= lenght; index++) {
            (<HTMLDivElement>document.getElementById("div" + index)).remove();
            gesamtpreis.innerHTML = "Gesamtpreis: " + 0 + "€";
            localStorage.clear();
        }
    }

}

