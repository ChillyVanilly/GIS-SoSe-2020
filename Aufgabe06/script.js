"use strict";
//Figuren
let kaktus = {
    name: "LED-Kaktus",
    bild: "Items/kaktus.jpg",
    beschreibung: "Ein grüner hell leuchtender LED-Kaktus! Eine Dekorative Bereicherung für alle Inneneinrichtungen.",
    farbe: "Grün",
    preis: 12.99,
    auflager: true,
    programmierbar: "",
    category: 1,
    wasserdicht: "",
    wifi: "",
    länge: "",
    smarthome: ""
};
let flamingo = {
    name: "LED-Flamingo",
    bild: "Items/Flamingo.jpg",
    beschreibung: "Eine rosa leuchtende prächtige LED-Flamingofigur",
    farbe: "Rosa",
    preis: 10.99,
    auflager: true,
    programmierbar: "",
    category: 1,
    wasserdicht: "",
    wifi: "",
    länge: "",
    smarthome: ""
};
let blitz = {
    name: "LED-Blitz",
    bild: "Items/Blitz.jpg",
    beschreibung: "Eine LED-Blitz-Form zum aufhängen oder hinstellen. Eignet sich auch draußen",
    farbe: "Blau, Rot, Gelb, Rosa, Lila",
    preis: 15.99,
    auflager: true,
    programmierbar: "",
    category: 1,
    wasserdicht: "",
    wifi: "",
    länge: "",
    smarthome: ""
};
let eis = {
    name: "LED-Eisschild",
    bild: "Items/Eis.jpg",
    beschreibung: "Ein großes Eis-LED schild mit verschiendenen Farben zum aufhängen.\rBatterie und Strombetrieb möglich. Lange LED Lebenszeit von über 50.000 Stunden",
    farbe: "Rosa-Gelb, Rot-Blau, Grün-Gelb, Rosa-Lila, Rot-Lila, Rot-Rosa",
    preis: 35.99,
    auflager: true,
    programmierbar: "",
    category: 1,
    wasserdicht: "",
    wifi: "",
    länge: "",
    smarthome: ""
};
let lippen = {
    name: "LED-Lippen",
    bild: "Items/Lippen.jpg",
    beschreibung: "LED-Lippenform in verschiedenen Farben zum aufhängen.\rBatteriebetrieb möglich",
    farbe: "Blau, Rot, Rosa, Lila, Orange",
    preis: 9.99,
    auflager: true,
    programmierbar: "",
    category: 1,
    wasserdicht: "",
    wifi: "",
    länge: "",
    smarthome: ""
};
//Texte
let goodvibes = {
    name: "LED-GoodVibes Schriftzug",
    bild: "Items/GoodVibes.jpg",
    beschreibung: "Ein Blauer-LED Good Vibes Schriftzug zum hinstellen oder aufhängen",
    farbe: "Blau, Rot, Rosa",
    preis: 36.99,
    auflager: true,
    programmierbar: "",
    category: 2,
    wasserdicht: "",
    wifi: "",
    länge: "",
    smarthome: ""
};
let hello = {
    name: "LED-Hello Sprechblase Schriftzug",
    bild: "Items/Hello.jpg",
    beschreibung: "Eine LED Sprechblase mit der Innschrift : Hello.\rErhältlich in verschiedenen Farben",
    farbe: "Rosa-Weiß, Blau-Weiß, Rot-Weiß, Gelb-Weiß",
    preis: 35.99,
    auflager: true,
    programmierbar: "",
    category: 2,
    wasserdicht: "",
    wifi: "",
    länge: "",
    smarthome: ""
};
let bar = {
    name: "Neon-Rosa LED-Bar Schrift",
    bild: "Items/Bar.jpg",
    beschreibung: "Ein Rosa Neon - Bar Schriftzug.\rIdeal für zuhause oder für das Gewerbe. Beeindruckt jeden!",
    farbe: "Neon-Rosa",
    preis: 39.99,
    auflager: false,
    programmierbar: "",
    category: 2,
    wasserdicht: "",
    wifi: "",
    länge: "",
    smarthome: ""
};
let fuckit = {
    name: "Neon-Rosa LED-FuckIt Schriftzug",
    bild: "Items/Fuckit.jpg",
    beschreibung: "Eindrucksvoller F*ck it-Schriftzug.\rNetzteil nicht inbegriffen (benötigt : 5V 6A)",
    farbe: "Neon-Rosa",
    preis: 59.90,
    auflager: true,
    programmierbar: "",
    category: 2,
    wasserdicht: "",
    wifi: "",
    länge: "",
    smarthome: ""
};
//LED-Schilder
let ladyback = {
    name: "ADV PRO Lady Back Sexy Girls Man Cave Dual Color LED Neonlicht",
    bild: "Items/Ladyback.jpg",
    beschreibung: "Gesamtgröße: B 300 mm x H 400 mm (W 12 x H 16).",
    farbe: "Blau-Rot, Blau-Weiß, Rot-Weiß, Rot-Rosa, Gelb-Weiß, Gelb-Orange, Blau-Grün, Grün-Weiß, Rosa-Weiß, Rosa-Lila, Blau-Lila, Lila-Weiß",
    preis: 59.99,
    auflager: true,
    programmierbar: "",
    category: 3,
    wasserdicht: "",
    wifi: "",
    länge: "",
    smarthome: ""
};
let dragon = {
    name: "ADV PRO Chinese Dragon Room Display Dual Color LED Neonlicht",
    bild: "Items/Dragon.jpg",
    beschreibung: "Gesamtgröße: B 300 mm x H 400 mm (W 12 x H 16).",
    farbe: "Blau-Rot, Blau-Weiß, Rot-Weiß, Rot-Rosa, Gelb-Weiß, Gelb-Orange, Blau-Grün, Grün-Weiß, Rosa-Weiß, Rosa-Lila, Blau-Lila, Lila-Weiß",
    preis: 59.99,
    auflager: true,
    programmierbar: "",
    category: 3,
    wasserdicht: "",
    wifi: "",
    länge: "",
    smarthome: ""
};
let dancegirl = {
    name: "ADV PRO Dance Girl Club Bar Pub Dual Color LED Barlicht Neonlicht",
    bild: "Items/Strip.jpg",
    beschreibung: "Gesamtgröße: B 400 mm x H 600 mm (W 16 x H 24).",
    farbe: "Blau-Rot, Blau-Weiß, Rot-Weiß, Rot-Rosa, Gelb-Weiß, Gelb-Orange, Blau-Grün, Grün-Weiß, Rosa-Weiß, Rosa-Lila, Blau-Lila, Lila-Weiß",
    preis: 119.99,
    auflager: true,
    programmierbar: "",
    category: 3,
    wasserdicht: "",
    wifi: "",
    länge: "",
    smarthome: ""
};
let trust = {
    name: "ADV PRO Trust Me Love Me Fuck Me Décor Man Cave Nightclub Garage Dual Color LED Barlicht Neonlicht",
    bild: "Items/Trust.jpg",
    beschreibung: "Gesamtgröße: B 600 mm x H 400 mm (W 24 x H 16).",
    farbe: "Blau-Rot, Blau-Weiß, Rot-Weiß, Rot-Rosa, Gelb-Weiß, Gelb-Orange, Blau-Grün, Grün-Weiß, Rosa-Weiß, Rosa-Lila, Blau-Lila, Lila-Weiß",
    preis: 119.99,
    auflager: true,
    programmierbar: "",
    category: 3,
    wasserdicht: "",
    wifi: "",
    länge: "",
    smarthome: ""
};
let fuckoff = {
    name: "ADV PRO Fuck Off Man Cave Garage Dual Color LED Barlicht Neonlicht Lichtwerbung Neon Sign",
    bild: "Items/Fuckoff.jpg",
    beschreibung: "Gesamtgröße: B 300 mm x H 210 mm (W 12 x H 8,5).",
    farbe: "Blau-Rot, Blau-Weiß, Rot-Weiß, Rot-Rosa, Gelb-Weiß, Gelb-Orange, Blau-Grün, Grün-Weiß, Rosa-Weiß, Rosa-Lila, Blau-Lila, Lila-Weiß",
    preis: 89.99,
    auflager: true,
    programmierbar: "",
    category: 3,
    wasserdicht: "",
    wifi: "",
    länge: "",
    smarthome: ""
};
let dowhat = {
    name: "ADV PRO Do What You Love Bedroom Room Home Décor Dual Color LED Barlicht Neonlicht",
    bild: "Items/Dowhat.jpg",
    beschreibung: "Gesamtgröße: B 400 mm x H 300 mm (W 16 x H 12).",
    farbe: "Blau-Rot, Blau-Weiß, Rot-Weiß, Rot-Rosa, Gelb-Weiß, Gelb-Orange, Blau-Grün, Grün-Weiß, Rosa-Weiß, Rosa-Lila, Blau-Lila, Lila-Weiß",
    preis: 55.99,
    auflager: true,
    programmierbar: "",
    category: 3,
    wasserdicht: "",
    wifi: "",
    länge: "",
    smarthome: ""
};
//LED-Stripes
let govee1 = {
    name: "Govee Dreamcolor LED Strip Lichtband, 5M LED Streifen WiFi",
    bild: "Items/Govee1.jpg",
    beschreibung: "[Kompatibel mit ALEXA & Govee APP]",
    farbe: "Dreamcolor",
    länge: "5M",
    wasserdicht: "Wasserdicht",
    wifi: "WIFI-Compatibel",
    smarthome: "Smarthome System Compatibel",
    preis: 30.99,
    auflager: true,
    programmierbar: "Nicht Programmierbar",
    category: 4
};
let govee2 = {
    name: "Govee Alexa LED Strip Lichtband, 5M RGB Smart WiFi LED Streifen",
    bild: "Items/Govee2.jpg",
    beschreibung: "[Sprachsteuerung über Alexa & Google Assistant]",
    farbe: "RGB",
    länge: "5M",
    wasserdicht: "Nicht Wasserdicht",
    wifi: "WIFI-Compatibel",
    smarthome: "Smarthome System Compatibel",
    preis: 28.99,
    auflager: true,
    programmierbar: "Nicht Programmierbar",
    category: 4
};
let govee3 = {
    name: "Govee 2 x 5m RGB LED Streifen Lichtband mit 3 in 1 App",
    bild: "Items/Govee3.jpg",
    beschreibung: "Govee 2 x 5m LED streifen",
    farbe: "RGB",
    länge: "2x 5M",
    wasserdicht: "Wasserdicht",
    wifi: "WIFI-Compatibel",
    smarthome: "Smarthome - Nicht Compatibel",
    preis: 39.99,
    auflager: true,
    programmierbar: "Nicht Programmierbar",
    category: 4
};
let programmierbar1 = {
    name: "WS2812B - Programmierbarer LED-Strip (144/m)",
    bild: "Items/ws2812b.jpg",
    beschreibung: "WS2812B LED-Strip. Jede einzelne LED ist ansteuerbar. Perfekt für eigene Lichtshows",
    farbe: "Dreamcolor",
    länge: "144s/m x2",
    wasserdicht: "nicht wasserdicht",
    wifi: "",
    smarthome: "",
    preis: 59.99,
    auflager: true,
    programmierbar: "Programmierbar",
    category: 4
};
let array = [govee1, govee2, govee3, programmierbar1, flamingo, kaktus, blitz, eis, lippen, bar, fuckit, hello, goodvibes, ladyback, fuckoff, dragon, dowhat, dancegirl, trust];
let category = [1, 2, 3, 4];
//Alte Schleife *Backup
/*for (let i: number = 0; i < array.length; i++) {
    let newDiv: HTMLDivElement = document.createElement("div");
    newDiv.id = "artikel" + i;

    if (array[i].category == 1) {
        document.getElementById("category1")?.appendChild(newDiv);
    }
    else if (array[i].category == 2) {
        document.getElementById("category2")?.appendChild(newDiv);
    }
    if (array[i].category == 3) {
        document.getElementById("category3")?.appendChild(newDiv);
    }
    if (array[i].category == 4) {
        document.getElementById("category4")?.appendChild(newDiv);
    }

    //Gleiche Schleife - Anzeige erstellen
    /*let  div: HTMLDivElement = document.createElement("div");
    div.id = "produktstripe" + i;
    document.getElementById("stripe")?.appendChild(div);*/
/*let bildstripe: HTMLImageElement = document.createElement("img");
bildstripe.src = array[i].bild;
newDiv.appendChild(bildstripe) ;

let namestripe: HTMLElement = document.createElement("h1");
namestripe.innerHTML = array[i].name;
newDiv.appendChild(namestripe);

let beschreibungstripe: HTMLElement = document.createElement("p");
beschreibungstripe.innerHTML = array[i].beschreibung;
newDiv.appendChild(namestripe);

let farbestripe: HTMLElement = document.createElement("p");
farbestripe.innerHTML = array[i].farbe;
newDiv.appendChild(namestripe);

let längestripe: HTMLElement = document.createElement("p");
längestripe.innerHTML = array[i].länge;
newDiv.appendChild(namestripe);

let wasserdichtstripe: HTMLElement = document.createElement("p");
wasserdichtstripe.innerHTML = array[i].wasserdicht;
newDiv.appendChild(namestripe);

let wifistripe: HTMLElement = document.createElement("p");
wifistripe.innerHTML = array[i].wifi;
newDiv.appendChild(namestripe);

let smarthomestripe: HTMLElement = document.createElement("p");
smarthomestripe.innerHTML = array[i].smarthome;
newDiv.appendChild(namestripe);

let programmierstripe: HTMLElement = document.createElement("p");
programmierstripe.innerHTML = array[i].programmierbar;
newDiv.appendChild(namestripe);

let preisstripe: HTMLElement = document.createElement("h2");
preisstripe.innerHTML = array[i].preis + "€";
document.getElementById("produktstripe" + i )?.appendChild(preisstripe);
   
let button: HTMLElement = document.createElement("button");
button.innerHTML = "buy";
button.addEventListener("click", handlefunction);
document.getElementById(array[i].name)?.appendChild(button);
button.setAttribute("preis", array[i].preis.toString());
document.getElementById(array[i].name)?.appendChild(button);
document.getElementById("produktstripe" + i)?.appendChild(button);
button.innerHTML = "In den Warenkorb";
}*/
for (let i = 0; i < array.length; i++) {
    if (array[i].category == 4) {
        let div = document.createElement("div");
        div.id = "produktstripe" + i;
        document.getElementById("Stripe")?.appendChild(div);
        let bildstripe = document.createElement("img");
        bildstripe.src = array[i].bild;
        document.getElementById("produktstripe" + i)?.appendChild(bildstripe);
        let namestripe = document.createElement("h1");
        namestripe.innerHTML = array[i].name;
        document.getElementById("produkstripe" + i)?.appendChild(namestripe);
        let beschreibungstripe = document.createElement("p");
        beschreibungstripe.innerHTML = array[i].beschreibung;
        document.getElementById("produktstripe" + i)?.appendChild(beschreibungstripe);
        let farbestripe = document.createElement("p");
        farbestripe.innerHTML = array[i].farbe;
        document.getElementById("produktstripe" + i)?.appendChild(farbestripe);
        let längestripe = document.createElement("p");
        längestripe.innerHTML = array[i].länge;
        document.getElementById("produktstripe" + i)?.appendChild(längestripe);
        let wasserdichtstripe = document.createElement("p");
        wasserdichtstripe.innerHTML = array[i].wasserdicht;
        document.getElementById("produktstripe" + i)?.appendChild(wasserdichtstripe);
        let wifistripe = document.createElement("p");
        wifistripe.innerHTML = array[i].wifi;
        document.getElementById("produktstripe" + i)?.appendChild(wifistripe);
        let smarthomestripe = document.createElement("p");
        smarthomestripe.innerHTML = array[i].smarthome;
        document.getElementById("produktstripe" + i)?.appendChild(smarthomestripe);
        let programmierstripe = document.createElement("p");
        programmierstripe.innerHTML = array[i].programmierbar;
        document.getElementById("produktstripe" + i)?.appendChild(programmierstripe);
        let preisstripe = document.createElement("h2");
        preisstripe.innerHTML = array[i].preis + "€";
        document.getElementById("produktstripe" + i)?.appendChild(preisstripe);
        let button = document.createElement("button");
        button.innerHTML = "buy";
        button.addEventListener("click", handlefunction);
        document.getElementById(array[i].name)?.appendChild(button);
        button.setAttribute("preis", array[i].preis.toString());
        document.getElementById(array[i].name)?.appendChild(button);
        document.getElementById("produktstripe" + i)?.appendChild(button);
        button.innerHTML = "In den Warenkorb";
    }
    else if (array[i].category == 1) {
        let div = document.createElement("div");
        div.id = "produktfigur" + i;
        document.getElementById("Figur")?.appendChild(div);
        let bildfigur = document.createElement("img");
        bildfigur.src = array[i].bild;
        document.getElementById("produktfigur" + i)?.appendChild(bildfigur);
        let namefigur = document.createElement("h1");
        namefigur.innerHTML = array[i].name;
        document.getElementById("produkfigur" + i)?.appendChild(namefigur);
        let beschreibungfigur = document.createElement("p");
        beschreibungfigur.innerHTML = array[i].beschreibung;
        document.getElementById("produktfigur" + i)?.appendChild(beschreibungfigur);
        let farbefigur = document.createElement("p");
        farbefigur.innerHTML = array[i].farbe;
        document.getElementById("produktfigur" + i)?.appendChild(farbefigur);
        let wasserdichtfigur = document.createElement("p");
        wasserdichtfigur.innerHTML = array[i].wasserdicht;
        document.getElementById("produktfigur" + i)?.appendChild(wasserdichtfigur);
        let preisfigur = document.createElement("h2");
        preisfigur.innerHTML = array[i].preis + "€";
        document.getElementById("produktfigur" + i)?.appendChild(preisfigur);
        let button = document.createElement("button");
        button.innerHTML = "buy";
        button.addEventListener("click", handlefunction);
        document.getElementById(array[i].name)?.appendChild(button);
        button.setAttribute("preis", array[i].preis.toString());
        document.getElementById(array[i].name)?.appendChild(button);
        document.getElementById("produktfigur" + i)?.appendChild(button);
        button.innerHTML = "In den Warenkorb";
    }
    else if (array[i].category == 3) {
        let div = document.createElement("div");
        div.id = "produktschild" + i;
        document.getElementById("Schild")?.appendChild(div);
        let bildschild = document.createElement("img");
        bildschild.src = array[i].bild;
        document.getElementById("produktschild" + i)?.appendChild(bildschild);
        let nameschild = document.createElement("h1");
        nameschild.innerHTML = array[i].name;
        document.getElementById("produktschild" + i)?.appendChild(nameschild);
        let beschreibungschild = document.createElement("p");
        beschreibungschild.innerHTML = array[i].beschreibung;
        document.getElementById("produktschild" + i)?.appendChild(beschreibungschild);
        let farbeschild = document.createElement("p");
        farbeschild.innerHTML = array[i].farbe;
        document.getElementById("produktschild" + i)?.appendChild(farbeschild);
        let wasserdichtschild = document.createElement("p");
        wasserdichtschild.innerHTML = array[i].wasserdicht;
        document.getElementById("produktschild" + i)?.appendChild(wasserdichtschild);
        let preisschild = document.createElement("h2");
        preisschild.innerHTML = array[i].preis + "€";
        document.getElementById("produktschild" + i)?.appendChild(preisschild);
        let button = document.createElement("button");
        button.innerHTML = "buy";
        button.addEventListener("click", handlefunction);
        document.getElementById(array[i].name)?.appendChild(button);
        button.setAttribute("preis", array[i].preis.toString());
        document.getElementById(array[i].name)?.appendChild(button);
        document.getElementById("produktschild" + i)?.appendChild(button);
        button.innerHTML = "In den Warenkorb";
    }
    else if (array[i].category == 2) {
        let div = document.createElement("div");
        div.id = "produkttext" + i;
        document.getElementById("Text")?.appendChild(div);
        let bildtext = document.createElement("img");
        bildtext.src = array[i].bild;
        document.getElementById("produkttext" + i)?.appendChild(bildtext);
        let nametext = document.createElement("h1");
        nametext.innerHTML = array[i].name;
        document.getElementById("produktext" + i)?.appendChild(nametext);
        let beschreibungtext = document.createElement("p");
        beschreibungtext.innerHTML = array[i].beschreibung;
        document.getElementById("produkttext" + i)?.appendChild(beschreibungtext);
        let farbetext = document.createElement("p");
        farbetext.innerHTML = array[i].farbe;
        document.getElementById("produkttext" + i)?.appendChild(farbetext);
        let wasserdichttext = document.createElement("p");
        wasserdichttext.innerHTML = array[i].wasserdicht;
        document.getElementById("produkttext" + i)?.appendChild(wasserdichttext);
        let preistext = document.createElement("h2");
        preistext.innerHTML = array[i].preis + "€";
        document.getElementById("produkttext" + i)?.appendChild(preistext);
        let button = document.createElement("button");
        button.innerHTML = "buy";
        button.addEventListener("click", handlefunction);
        document.getElementById(array[i].name)?.appendChild(button);
        button.setAttribute("preis", array[i].preis.toString());
        document.getElementById("produkttext" + i)?.appendChild(button);
        button.innerHTML = "In den Warenkorb";
    }
}
//Warenkorb
let summe = 0;
let count = 0;
let arrayCounter = 0;
let bubbleDiv = document.createElement("div");
function handlefunction(_event) {
    if (arrayCounter >= 0) {
        document.getElementById("warencounter")?.appendChild(bubbleDiv);
    }
    arrayCounter++;
    bubbleDiv.innerHTML = arrayCounter + "";
    if (_event.currentTarget?.getAttribute("preis")) {
        summe = count + parseFloat(_event.currentTarget?.getAttribute("preis"));
        count = summe;
    }
    console.log(summe + "€");
}
//Aufgabe 2
let kategorieStreifen = document.querySelector("#LStreifen");
kategorieStreifen.id = "stripe";
kategorieStreifen.addEventListener("click", handlerKategorie1);
let kategorieFiguren = document.querySelector("#LFiguren");
kategorieFiguren.id = "figur";
kategorieFiguren.addEventListener("click", handlerKategorie1);
let kategorieSchilder = document.querySelector("#LSchilder");
kategorieSchilder.id = "schild";
kategorieSchilder.addEventListener("click", handlerKategorie1);
let kategorieTexte = document.querySelector("#LTexte");
kategorieTexte.id = "text";
kategorieTexte.addEventListener("click", handlerKategorie1);
let kategorieBeide = document.querySelector("#home1");
kategorieBeide.id = "home";
kategorieBeide.addEventListener("click", handlerKategorie1);
function handlerKategorie1(_event) {
    if (_event.currentTarget.getAttribute("id") == "stripe") {
        stripe();
    }
    else if (_event.currentTarget.getAttribute("id") == "figur") {
        figur();
    }
    else if (_event.currentTarget.getAttribute("id") == "schild") {
        schild();
    }
    else if (_event.currentTarget.getAttribute("id") == "text") {
        text();
    }
    else if (_event.currentTarget.getAttribute("id") == "alles") {
        alles();
    }
}
function stripe() {
    document.getElementById("Stripe").style.display = "inline-grid";
    document.getElementById("stripe_ueberschrift").style.display = "inline-grid";
    document.getElementById("Figur").style.display = "none";
    document.getElementById("figur_ueberschrift").style.display = "none";
    document.getElementById("Schild").style.display = "none";
    document.getElementById("schild_ueberschrift").style.display = "none";
    document.getElementById("Text").style.display = "none";
    document.getElementById("text_ueberschrift").style.display = "none";
}
function figur() {
    document.getElementById("Stripe").style.display = "none";
    document.getElementById("stripe_ueberschrift").style.display = "none";
    document.getElementById("Figur").style.display = "inline-grid";
    document.getElementById("figur_ueberschrift").style.display = "inline-grid";
    document.getElementById("Schild").style.display = "none";
    document.getElementById("schild_ueberschrift").style.display = "none";
    document.getElementById("Text").style.display = "none";
    document.getElementById("text_ueberschrift").style.display = "none";
}
function schild() {
    document.getElementById("Stripe").style.display = "none";
    document.getElementById("stripe_ueberschrift").style.display = "none";
    document.getElementById("Figur").style.display = "none";
    document.getElementById("figur_ueberschrift").style.display = "none";
    document.getElementById("Schild").style.display = "inline-grid";
    document.getElementById("schild_ueberschrift").style.display = "inline-grid";
    document.getElementById("Text").style.display = "none";
    document.getElementById("text_ueberschrift").style.display = "none";
}
function text() {
    document.getElementById("Stripe").style.display = "none";
    document.getElementById("stripe_ueberschrift").style.display = "none";
    document.getElementById("Figur").style.display = "none";
    document.getElementById("figur_ueberschrift").style.display = "none";
    document.getElementById("Schild").style.display = "none";
    document.getElementById("schild_ueberschrift").style.display = "none";
    document.getElementById("Text").style.display = "inline-grid";
    document.getElementById("text_ueberschrift").style.display = "inline-grid";
}
function alles() {
    document.getElementById("Stripe").style.display = "inline-grid";
    document.getElementById("stripe_ueberschrift").style.display = "inline-grid";
    document.getElementById("Figur").style.display = "inline-grid";
    document.getElementById("figur_ueberschrift").style.display = "inline-grid";
    document.getElementById("Schild").style.display = "inline-grid";
    document.getElementById("schild_ueberschrift").style.display = "inline-grid";
    document.getElementById("Text").style.display = "inline-grid";
    document.getElementById("text_ueberschrift").style.display = "inline-grid";
}
//# sourceMappingURL=script.js.map