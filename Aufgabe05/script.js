"use strict";
//Figuren
let kaktus = {
    name: "LED-Kaktus",
    bild: "kaktus.jpg",
    beschreibung: "Ein grüner hell leuchtender LED-Kaktus! Eine Dekorative Bereicherung für alle Inneneinrichtungen.",
    farbe: "Grün",
    preis: "12,99€",
    auflager: true,
    programmierbar: "",
    figur: true,
    text: false,
    schild: false,
    stripe: false,
    wasserdicht: "",
    wifi: "",
    länge: "",
    smarthome: ""
};
let flamingo = {
    name: "LED-Flamingo",
    bild: "Flamingo.jpg",
    beschreibung: "Eine rosa leuchtende prächtige LED-Flamingofigur",
    farbe: "Rosa",
    preis: "10,99€",
    auflager: true,
    programmierbar: "",
    figur: true,
    text: false,
    schild: false,
    stripe: false,
    wasserdicht: "",
    wifi: "",
    länge: "",
    smarthome: ""
};
let blitz = {
    name: "LED-Blitz",
    bild: "Blitz.jpg",
    beschreibung: "Eine LED-Blitz-Form zum aufhängen oder hinstellen. Eignet sich auch draußen",
    farbe: "Blau, Rot, Gelb, Rosa, Lila",
    preis: "15,99€",
    auflager: true,
    programmierbar: "",
    figur: true,
    text: false,
    schild: false,
    stripe: false,
    wasserdicht: "",
    wifi: "",
    länge: "",
    smarthome: ""
};
let eis = {
    name: "LED-Eisschild",
    bild: "Eis.jpg",
    beschreibung: "Ein großes Eis-LED schild mit verschiendenen Farben zum aufhängen.\rBatterie und Strombetrieb möglich. Lange LED Lebenszeit von über 50.000 Stunden",
    farbe: "Rosa-Gelb, Rot-Blau, Grün-Gelb, Rosa-Lila, Rot-Lila, Rot-Rosa",
    preis: "35,99€",
    auflager: true,
    programmierbar: "",
    figur: true,
    text: false,
    schild: false,
    stripe: false,
    wasserdicht: "",
    wifi: "",
    länge: "",
    smarthome: ""
};
let lippen = {
    name: "LED-Lippen",
    bild: "Lippen.jpg",
    beschreibung: "LED-Lippenform in verschiedenen Farben zum aufhängen.\rBatteriebetrieb möglich",
    farbe: "Blau, Rot, Rosa, Lila, Orange",
    preis: "9,99€",
    auflager: true,
    programmierbar: "",
    figur: true,
    text: false,
    schild: false,
    stripe: false,
    wasserdicht: "",
    wifi: "",
    länge: "",
    smarthome: ""
};
//Texte
let goodvibes = {
    name: "LED-GoodVibes Schriftzug",
    bild: "GoodVibes.jpg",
    beschreibung: "Ein Blauer-LED Good Vibes Schriftzug zum hinstellen oder aufhängen",
    farbe: "Blau, Rot, Rosa",
    preis: "36,99€",
    auflager: true,
    programmierbar: "",
    figur: false,
    text: true,
    schild: false,
    stripe: false,
    wasserdicht: "",
    wifi: "",
    länge: "",
    smarthome: ""
};
let hello = {
    name: "LED-Hello Sprechblase Schriftzug",
    bild: "Hello.jpg",
    beschreibung: "Eine LED Sprechblase mit der Innschrift : Hello.\rErhältlich in verschiedenen Farben",
    farbe: "Rosa-Weiß, Blau-Weiß, Rot-Weiß, Gelb-Weiß",
    preis: "35,99€",
    auflager: true,
    programmierbar: "",
    figur: false,
    text: true,
    schild: false,
    stripe: false,
    wasserdicht: "",
    wifi: "",
    länge: "",
    smarthome: ""
};
let bar = {
    name: "Neon-Rosa LED-Bar Schrift",
    bild: "Bar.jpg",
    beschreibung: "Ein Rosa Neon - Bar Schriftzug.\rIdeal für zuhause oder für das Gewerbe. Beeindruckt jeden!",
    farbe: "Neon-Rosa",
    preis: "39,99€",
    auflager: false,
    programmierbar: "",
    figur: false,
    text: true,
    schild: false,
    stripe: false,
    wasserdicht: "",
    wifi: "",
    länge: "",
    smarthome: ""
};
let fuckit = {
    name: "Neon-Rosa LED-FuckIt Schriftzug",
    bild: "Fuckit.jpg",
    beschreibung: "Eindrucksvoller F*ck it-Schriftzug.\rNetzteil nicht inbegriffen (benötigt : 5V 6A)",
    farbe: "Neon-Rosa",
    preis: "59,90€",
    auflager: true,
    programmierbar: "",
    figur: false,
    text: true,
    schild: false,
    stripe: false,
    wasserdicht: "",
    wifi: "",
    länge: "",
    smarthome: ""
};
//LED-Schilder
let ladyback = {
    name: "ADV PRO Lady Back Sexy Girls Man Cave Dual Color LED Neonlicht",
    bild: "Ladyback.jpg",
    beschreibung: "Gesamtgröße: B 300 mm x H 400 mm (W 12 x H 16).",
    farbe: "Blau-Rot, Blau-Weiß, Rot-Weiß, Rot-Rosa, Gelb-Weiß, Gelb-Orange, Blau-Grün, Grün-Weiß, Rosa-Weiß, Rosa-Lila, Blau-Lila, Lila-Weiß",
    preis: "59,99€",
    auflager: true,
    programmierbar: "",
    figur: false,
    text: false,
    schild: true,
    stripe: false,
    wasserdicht: "",
    wifi: "",
    länge: "",
    smarthome: ""
};
let dragon = {
    name: "ADV PRO Chinese Dragon Room Display Dual Color LED Neonlicht",
    bild: "Dragon.jpg",
    beschreibung: "Gesamtgröße: B 300 mm x H 400 mm (W 12 x H 16).",
    farbe: "Blau-Rot, Blau-Weiß, Rot-Weiß, Rot-Rosa, Gelb-Weiß, Gelb-Orange, Blau-Grün, Grün-Weiß, Rosa-Weiß, Rosa-Lila, Blau-Lila, Lila-Weiß",
    preis: "59,99€",
    auflager: true,
    programmierbar: "",
    figur: false,
    text: false,
    schild: true,
    stripe: false,
    wasserdicht: "",
    wifi: "",
    länge: "",
    smarthome: ""
};
let dancegirl = {
    name: "ADV PRO Dance Girl Club Bar Pub Dual Color LED Barlicht Neonlicht",
    bild: "Strip.jpg",
    beschreibung: "Gesamtgröße: B 400 mm x H 600 mm (W 16 x H 24).",
    farbe: "Blau-Rot, Blau-Weiß, Rot-Weiß, Rot-Rosa, Gelb-Weiß, Gelb-Orange, Blau-Grün, Grün-Weiß, Rosa-Weiß, Rosa-Lila, Blau-Lila, Lila-Weiß",
    preis: "119,99€",
    auflager: true,
    programmierbar: "",
    figur: false,
    text: false,
    schild: true,
    stripe: false,
    wasserdicht: "",
    wifi: "",
    länge: "",
    smarthome: ""
};
let trust = {
    name: "ADV PRO Trust Me Love Me Fuck Me Décor Man Cave Nightclub Garage Dual Color LED Barlicht Neonlicht",
    bild: "Trust.jpg",
    beschreibung: "Gesamtgröße: B 600 mm x H 400 mm (W 24 x H 16).",
    farbe: "Blau-Rot, Blau-Weiß, Rot-Weiß, Rot-Rosa, Gelb-Weiß, Gelb-Orange, Blau-Grün, Grün-Weiß, Rosa-Weiß, Rosa-Lila, Blau-Lila, Lila-Weiß",
    preis: "119,99€",
    auflager: true,
    programmierbar: "",
    figur: false,
    text: false,
    schild: true,
    stripe: false,
    wasserdicht: "",
    wifi: "",
    länge: "",
    smarthome: ""
};
let fuckoff = {
    name: "ADV PRO Fuck Off Man Cave Garage Dual Color LED Barlicht Neonlicht Lichtwerbung Neon Sign",
    bild: "Fuckoff.jpg",
    beschreibung: "Gesamtgröße: B 300 mm x H 210 mm (W 12 x H 8,5).",
    farbe: "Blau-Rot, Blau-Weiß, Rot-Weiß, Rot-Rosa, Gelb-Weiß, Gelb-Orange, Blau-Grün, Grün-Weiß, Rosa-Weiß, Rosa-Lila, Blau-Lila, Lila-Weiß",
    preis: "89,99€",
    auflager: true,
    programmierbar: "",
    figur: false,
    text: false,
    schild: true,
    stripe: false,
    wasserdicht: "",
    wifi: "",
    länge: "",
    smarthome: ""
};
let dowhat = {
    name: "ADV PRO Do What You Love Bedroom Room Home Décor Dual Color LED Barlicht Neonlicht",
    bild: "Dowhat.jpg",
    beschreibung: "Gesamtgröße: B 400 mm x H 300 mm (W 16 x H 12).",
    farbe: "Blau-Rot, Blau-Weiß, Rot-Weiß, Rot-Rosa, Gelb-Weiß, Gelb-Orange, Blau-Grün, Grün-Weiß, Rosa-Weiß, Rosa-Lila, Blau-Lila, Lila-Weiß",
    preis: "55,99€",
    auflager: true,
    programmierbar: "",
    figur: false,
    text: false,
    schild: true,
    stripe: false,
    wasserdicht: "",
    wifi: "",
    länge: "",
    smarthome: ""
};
//LED-Stripes
let govee1 = {
    name: "Govee Dreamcolor LED Strip Lichtband, 5M LED Streifen WiFi Drahtlos Handy Streuerbare 5050 LED Band Sync mit Musik, kompatibel mit Alexa, Google Assistant Android iOS (Nicht unterstützt 5G WiFi) [Energieklasse A+]",
    bild: "Govee1.jpg",
    beschreibung: "[Kompatibel mit ALEXA & Govee APP]: Govee LED Streifen",
    farbe: "Dreamcolor",
    länge: "5M",
    wasserdicht: "Wasserdicht",
    wifi: "WIFI-Compatibel",
    smarthome: "Smarthome System Compatibel",
    preis: "30,99€",
    auflager: true,
    programmierbar: "Nicht Programmierbar",
    figur: false,
    text: false,
    schild: false,
    stripe: true
};
let govee2 = {
    name: "Govee Alexa LED Strip Lichtband, 5M RGB Smart WiFi LED Streifen,APP Steuerbar Musik LED Band Lichterkette für Haus, Küche, TV, Party,kompatibel mit Alexa, Google Assistant (Nicht unterstützt 5G WiFi) [Energieklasse A+]",
    bild: "Govee2.jpg",
    beschreibung: "[Sprachsteuerung über Alexa & Google Assistant] Govee LED streifen strip",
    farbe: "RGB",
    länge: "5M",
    wasserdicht: "Nicht Wasserdicht",
    wifi: "WIFI-Compatibel",
    smarthome: "Smarthome System Compatibel",
    preis: "28,99€",
    auflager: true,
    programmierbar: "Nicht Programmierbar",
    figur: false,
    text: false,
    schild: false,
    stripe: true
};
let govee3 = {
    name: "Govee 2 x 5m RGB LED Streifen Lichtband mit 3 in 1 App, Fernbedienung und Steuerbox, Selbstklebend LED Strip Beleuchtung Full Kit mit DIY-Timer-Einstellung für Zuhause, Schlafzimmer, TV, Schrankdeko [Energieklasse A+]",
    bild: "Govee3.jpg",
    beschreibung: "Holen Sie sich das ganze Haus Vibrant: Govee 2 x 5m LED streifen sind mit mehr als 16 Millionen Farben erhältlich",
    farbe: "RGB",
    länge: "2x 5M",
    wasserdicht: "Wasserdicht",
    wifi: "WIFI-Compatibel",
    smarthome: "Smarthome - Nicht Compatibel",
    preis: "39,99€",
    auflager: true,
    programmierbar: "Nicht Programmierbar",
    figur: false,
    text: false,
    schild: false,
    stripe: true
};
let ws2812b1 = {
    name: "Longruner WS2812B LED Strip Panel Kit Matrix 8x32 256 Pixel Digitales Flexibles Integriertes WS2812B IC LED Licht mit Voller Traumfarbenbeleuchtung DC5V LWS03 (WS03)",
    bild: "ws2812b.jpg",
    beschreibung: "Sonderfunktion: Jede LED kann individuell adressiert werden. Sie können jede LED so einstellen, dass Nachrichten gescrollt oder kleine Bilder gezeichnet werden.",
    farbe: "Dreamcolor",
    länge: "8x32 256 Pixel",
    wasserdicht: "Nicht Wasserdicht",
    wifi: "Wifi - Nicht Compatibel",
    smarthome: "Smarthome - Nicht Compatibel",
    preis: "32,99€",
    auflager: true,
    programmierbar: "Programmierbar",
    figur: false,
    text: false,
    schild: false,
    stripe: true
};
let array = [govee1, govee2, govee3, ws2812b1, flamingo, kaktus, blitz, eis, lippen, bar, fuckit, hello, goodvibes, ladyback, fuckoff, dragon, dowhat, dancegirl, trust];
for (let i = 0; i < array.length; i++) {
    if (array[i].stripe) {
        let div = document.createElement("div");
        div.id = "produktstripe" + i;
        document.getElementById("stripe")?.appendChild(div);
        let bildStreifen = document.createElement("img");
        bildStreifen.src = array[i].bild;
        document.getElementById("produktstripe" + i)?.appendChild(bildStreifen);
        let nameStreifen = document.createElement("h1");
        nameStreifen.innerHTML = array[i].name;
        document.getElementById("produkstripe" + i)?.appendChild(nameStreifen);
        let beschreibungStreifen = document.createElement("p");
        beschreibungStreifen.innerHTML = array[i].beschreibung;
        document.getElementById("produktstripe" + i)?.appendChild(beschreibungStreifen);
        let farbeStreifen = document.createElement("p");
        farbeStreifen.innerHTML = array[i].farbe;
        document.getElementById("produktstripe" + i)?.appendChild(farbeStreifen);
        let längeStreifen = document.createElement("p");
        längeStreifen.innerHTML = array[i].länge;
        document.getElementById("produktStripe" + i)?.appendChild(längeStreifen);
        let wasserdichtStreifen = document.createElement("p");
        wasserdichtStreifen.innerHTML = array[i].wasserdicht;
        document.getElementById("produktstripe" + i)?.appendChild(wasserdichtStreifen);
        let wifiStreifen = document.createElement("p");
        wifiStreifen.innerHTML = array[i].wifi;
        document.getElementById("produktstripe" + i)?.appendChild(wifiStreifen);
        let smarthomeStreifen = document.createElement("p");
        smarthomeStreifen.innerHTML = array[i].smarthome;
        document.getElementById("produktstripe" + i)?.appendChild(smarthomeStreifen);
        let programmierStreifen = document.createElement("p");
        programmierStreifen.innerHTML = array[i].programmierbar;
        document.getElementById("produktstripe" + i)?.appendChild(programmierStreifen);
        let preisStreifen = document.createElement("h1");
        preisStreifen.innerHTML = array[i].preis;
        document.getElementById("produktstripe" + i)?.appendChild(preisStreifen);
        let button = document.createElement("button");
        document.getElementById(array[i].name)?.appendChild(button);
        document.getElementById("produktstripe" + i)?.appendChild(button);
        button.innerHTML = "In den Warenkorb";
    }
    /*else if (array[i].figur) {
        let  div: HTMLDivElement = document.createElement("div");
        div.id = "produktFigur" + i;
        document.getElementById("Figur")?.appendChild(div);
       
        let bildFigur: HTMLImageElement = document.createElement("img");
        bildFigur.src = array[i].bild;
        document.getElementById("produktFigur" + i)?.appendChild(bildFigur);
       
        let nameFigur: HTMLElement = document.createElement("h3");
        nameFigur.innerHTML = array[i].name;
        document.getElementById("produkFigur" + i)?.appendChild(nameFigur);
 
        let beschreibungFigur: HTMLElement = document.createElement("p");
        beschreibungFigur.innerHTML = array[i].beschreibung;
        document.getElementById("produktFigur" + i)?.appendChild(beschreibungFigur);

        let farbeFigur: HTMLElement = document.createElement("p");
        farbeFigur.innerHTML = array[i].farbe;
        document.getElementById("produktFigur" + i)?.appendChild(farbeFigur);

        let wasserdichtFigur: HTMLElement = document.createElement("p");
        wasserdichtFigur.innerHTML = array[i].wasserdicht;
        document.getElementById("produktFigur" + i)?.appendChild(wasserdichtFigur);
   
        let preisFigur: HTMLElement = document.createElement("p");
        preisFigur.innerHTML = array[i].preis;
        document.getElementById("produktFigur" + i)?.appendChild(preisFigur);
           
        let button: HTMLElement = document.createElement("button");
        document.getElementById(array[i].name)?.appendChild(button);
        document.getElementById("produktFigur" + i)?.appendChild(button);
        button.innerHTML = "In den Warenkorb";
    }
    else if (array[i].schild) {

        let  div: HTMLDivElement = document.createElement("div");
        div.id = "produktSchild" + i;
        document.getElementById("Schild")?.appendChild(div);
       
        let bildSchild: HTMLImageElement = document.createElement("img");
        bildSchild.src = array[i].bild;
        document.getElementById("produktSchild" + i)?.appendChild(bildSchild);
       
        let nameSchild: HTMLElement = document.createElement("h3");
        nameSchild.innerHTML = array[i].name;
        document.getElementById("produkSchild" + i)?.appendChild(nameSchild);
 
        let beschreibungSchild: HTMLElement = document.createElement("p");
        beschreibungSchild.innerHTML = array[i].beschreibung;
        document.getElementById("produktSchild" + i)?.appendChild(beschreibungSchild);

        let farbeSchild: HTMLElement = document.createElement("p");
        farbeSchild.innerHTML = array[i].farbe;
        document.getElementById("produktSchild" + i)?.appendChild(farbeSchild);

        let wasserdichtSchild: HTMLElement = document.createElement("p");
        wasserdichtSchild.innerHTML = array[i].wasserdicht;
        document.getElementById("produktSchild" + i)?.appendChild(wasserdichtSchild);
   
        let preisSchild: HTMLElement = document.createElement("p");
        preisSchild.innerHTML = array[i].preis;
        document.getElementById("produktSchild" + i)?.appendChild(preisSchild);
           
        let button: HTMLElement = document.createElement("button");
        document.getElementById(array[i].name)?.appendChild(button);
        document.getElementById("produktSchild" + i)?.appendChild(button);
        button.innerHTML = "In den Warenkorb";

    }
    else if (array[i].text) {
        let  div: HTMLDivElement = document.createElement("div");
        div.id = "produktText" + i;
        document.getElementById("Text")?.appendChild(div);
       
        let bildText: HTMLImageElement = document.createElement("img");
        bildText.src = array[i].bild;
        document.getElementById("produktText" + i)?.appendChild(bildText);
       
        let nameText: HTMLElement = document.createElement("h3");
        nameText.innerHTML = array[i].name;
        document.getElementById("produkText" + i)?.appendChild(nameText);
 
        let beschreibungText: HTMLElement = document.createElement("p");
        beschreibungText.innerHTML = array[i].beschreibung;
        document.getElementById("produktText" + i)?.appendChild(beschreibungText);

        let farbeText: HTMLElement = document.createElement("p");
        farbeText.innerHTML = array[i].farbe;
        document.getElementById("produktText" + i)?.appendChild(farbeText);

        let wasserdichtText: HTMLElement = document.createElement("p");
        wasserdichtText.innerHTML = array[i].wasserdicht;
        document.getElementById("produktText" + i)?.appendChild(wasserdichtText);
   
        let preisText: HTMLElement = document.createElement("p");
        preisText.innerHTML = array[i].preis;
        document.getElementById("produktText" + i)?.appendChild(preisText);
           
        let button: HTMLElement = document.createElement("button");
        document.getElementById(array[i].name)?.appendChild(button);
        document.getElementById("produktText" + i)?.appendChild(button);
        button.innerHTML = "In den Warenkorb";

    }*/
}
//# sourceMappingURL=script.js.map