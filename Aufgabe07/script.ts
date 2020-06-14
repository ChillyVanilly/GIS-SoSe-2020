namespace Aufgabe07 {
    getProducts("json_data.json");

    async function getProducts(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let jsonProducts: JSON = await response.json();
        allProducts = await JSON.parse(JSON.stringify(jsonProducts));

        let priceAll: number = 0;
        priceAll = parseFloat(<string>localStorage.getItem("gesamtPreis"));
        let artikelZaehler: number = 0;
        artikelZaehler = parseInt(<string>localStorage.getItem("artikelCount"));


        let buttondelete: HTMLButtonElement = document.createElement("button");
        buttondelete.innerHTML = "Warenkorb leeren";
        buttondelete.setAttribute("id", "Delete-Button");
        document.getElementById("Preis-Delete")?.appendChild(buttondelete);
        buttondelete.addEventListener("click", handleDelete);

        function handleDelete(_click: Event): void {
            localStorage.clear();
            location.reload();
            priceAll = 0;
            localStorage.removeItem("Summe");
            localStorage.setItem("Summe", priceAll.toString());
            artikelZaehler = 0;
            localStorage.removeItem("artikelCount");
            localStorage.setItem("artikelCount", artikelZaehler.toString());

        }

        if (parseInt(<string>localStorage.getItem("artikelCount")) == 0 ) {
            let emptyCartH: HTMLHeadingElement = document.createElement("h1");
            emptyCartH.innerHTML = "Der Warenkorb ist leer";
            document.getElementById("Price-Delete")?.appendChild(emptyCartH);

        }
        else {
            let priceParagraph: HTMLHeadingElement = document.createElement("h3");
            priceParagraph.setAttribute("id", "Preis-Cart");
            priceParagraph.innerHTML = "Preis: " + priceAll.toFixed(2) + "€";
            document.getElementById("Price-Delete")?.appendChild(priceParagraph);
            buttondelete.style.display = "leinline-block";
        }
        //Function to identify
        for (let i: number = 1; i <= artikelZaehler; i++) {

                //Div
                let divElement: HTMLDivElement = document.createElement("div");
                divElement.setAttribute("class", "Produkt");
                divElement.id = "Produkt" + i;
                document.getElementById("flex-cart")?.appendChild(divElement);
    
                //Name
                let nameElement: HTMLHeadingElement = document.createElement("h1");
                nameElement.innerHTML = <string>localStorage.getItem("name" + i);
                divElement.appendChild(nameElement);
    
                //Bild
                let imgElement: HTMLImageElement = document.createElement("img");
                imgElement.setAttribute("src", <string>localStorage.getItem("img" + i));
                imgElement.setAttribute("alt", <string>localStorage.getItem("title" + i));
                divElement.appendChild(imgElement);
    
                //Beschreibung
                let descElement: HTMLParagraphElement = document.createElement("p");
                descElement.innerHTML = <string>localStorage.getItem("beschreibung" + i);
                divElement.appendChild(descElement);

                //Farbe
                let farbeElement: HTMLParagraphElement = document.createElement("p");
                farbeElement.innerHTML = <string>localStorage.getItem("farbe" + i);
                divElement.appendChild(farbeElement);

                //Programmierbar
                let programmierbarElement: HTMLParagraphElement = document.createElement("p");
                programmierbarElement.innerHTML = <string>localStorage.getItem("programmierbar" + i);
                divElement.appendChild(programmierbarElement);

                //länge
                let laengeElement: HTMLParagraphElement = document.createElement("p");
                laengeElement.innerHTML = <string>localStorage.getItem("länge" + i);
                divElement.appendChild(laengeElement);

                //wifi
                let wifiElement: HTMLParagraphElement = document.createElement("p");
                wifiElement.innerHTML = <string>localStorage.getItem("wifi" + i);
                divElement.appendChild(wifiElement);

                //wasserdicht
                let wasserdichtElement: HTMLParagraphElement = document.createElement("p");
                wasserdichtElement.innerHTML = <string>localStorage.getItem("wasserdicht" + i);
                divElement.appendChild(wasserdichtElement);

                //smarthome
                let smarthomeElement: HTMLParagraphElement = document.createElement("p");
                smarthomeElement.innerHTML = <string>localStorage.getItem("smarthome" + i);
                divElement.appendChild(smarthomeElement);
    
                //Preis
                let preisElement: HTMLParagraphElement = document.createElement("p");
                let p: String = "Preis: " + <string>localStorage.getItem("preis" + i) + "€";
                preisElement.innerHTML = p.italics();
                divElement.appendChild(preisElement);
    
                //Button
                let buttonElement: HTMLButtonElement = document.createElement("button");
                buttonElement.innerHTML = "Löschen";
                buttonElement.setAttribute("identifier", "" + i);
                buttonElement.addEventListener("click", handleDeleteArticle);
                divElement.appendChild(buttonElement);
        }
        //Funktion, um Artikel aus Einkaufswagen zu entfernen
        function handleDeleteArticle(_click: Event): void {

        //Identifizieren, um welchen Artikel es sich handelt
        let button: HTMLElement = <HTMLElement>_click.currentTarget;
        let idButton: string = <string>button.getAttribute("identifier");

        //Preis neu berechnen
        priceAll = priceAll - parseFloat(<string>localStorage.getItem("preis" + idButton));
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
        let removeDiv: HTMLElement = <HTMLElement>document.getElementById("Artikel" + idButton);
        removeDiv.remove();

        //neu anordnen
        for (let i: number = parseInt(idButton); i <= artikelZaehler; i++) {
            localStorage.setItem("name" + i, <string>localStorage.getItem("name" + (i + 1)));
            localStorage.setItem("bild" + i, <string>localStorage.getItem("bild" + (i + 1)));
            localStorage.setItem("beschreibung" + i, <string>localStorage.getItem("beschreibung" + (i + 1)));
            localStorage.setItem("farbe" + i, <string>localStorage.getItem("farbe" + (i + 1)));
            localStorage.setItem("programmierbar" + i, <string>localStorage.getItem("programmierbar" + (i + 1)));
            localStorage.setItem("länge" + i, <string>localStorage.getItem("länge" + (i + 1)));
            localStorage.setItem("wifi" + i, <string>localStorage.getItem("wifi" + (i + 1)));
            localStorage.setItem("wasserdicht" + i, <string>localStorage.getItem("wasserdicht" + (i + 1)));
            localStorage.setItem("smarthome" + i, <string>localStorage.getItem("smarthome") + (i + 1));
            localStorage.setItem("preis" + i, <string>localStorage.getItem("price" + (i + 1)));
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

}