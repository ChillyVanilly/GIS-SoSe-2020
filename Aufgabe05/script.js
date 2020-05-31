"use strict";
//Figuren
let kaktus = {
    name: "LED-Kaktus",
    bild: "Items/kaktus.jpg",
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
    bild: "Items/Flamingo.jpg",
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
    bild: "Items/Blitz.jpg",
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
    bild: "Items/Eis.jpg",
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
    bild: "Items/Lippen.jpg",
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
    bild: "Items/GoodVibes.jpg",
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
    bild: "Items/Hello.jpg",
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
    bild: "Items/Bar.jpg",
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
    bild: "Items/Fuckit.jpg",
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
    bild: "Items/Ladyback.jpg",
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
    bild: "Items/Dragon.jpg",
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
    bild: "Items/Strip.jpg",
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
    bild: "Items/Trust.jpg",
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
    bild: "Items/Fuckoff.jpg",
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
    bild: "Items/Dowhat.jpg",
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
    name: "Govee Dreamcolor LED Strip Lichtband, 5M LED Streifen WiFi",
    bild: "Items/Govee1.jpg",
    beschreibung: "[Kompatibel mit ALEXA & Govee APP]",
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
    name: "Govee Alexa LED Strip Lichtband, 5M RGB Smart WiFi LED Streifen",
    bild: "Items/Govee2.jpg",
    beschreibung: "[Sprachsteuerung über Alexa & Google Assistant]",
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
    name: "Govee 2 x 5m RGB LED Streifen Lichtband mit 3 in 1 App",
    bild: "Items/Govee3.jpg",
    beschreibung: "Govee 2 x 5m LED streifen",
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
let array = [govee1, govee2, govee3, flamingo, kaktus, blitz, eis, lippen, bar, fuckit, hello, goodvibes, ladyback, fuckoff, dragon, dowhat, dancegirl, trust];
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
        let preisStreifen = document.createElement("h2");
        preisStreifen.innerHTML = array[i].preis;
        document.getElementById("produktstripe" + i)?.appendChild(preisStreifen);
        let button = document.createElement("button");
        document.getElementById(array[i].name)?.appendChild(button);
        document.getElementById("produktstripe" + i)?.appendChild(button);
        button.innerHTML = "In den Warenkorb";
    }
    else if (array[i].figur) {
        let div = document.createElement("div");
        div.id = "produktfigur" + i;
        document.getElementById("figur")?.appendChild(div);
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
        preisfigur.innerHTML = array[i].preis;
        document.getElementById("produktfigur" + i)?.appendChild(preisfigur);
        let button = document.createElement("button");
        document.getElementById(array[i].name)?.appendChild(button);
        document.getElementById("produktfigur" + i)?.appendChild(button);
        button.innerHTML = "In den Warenkorb";
    }
    else if (array[i].schild) {
        let div = document.createElement("div");
        div.id = "produktschild" + i;
        document.getElementById("schild")?.appendChild(div);
        let bildschild = document.createElement("img");
        bildschild.src = array[i].bild;
        document.getElementById("produktschild" + i)?.appendChild(bildschild);
        let nameschild = document.createElement("h1");
        nameschild.innerHTML = array[i].name;
        document.getElementById("produkschild" + i)?.appendChild(nameschild);
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
        preisschild.innerHTML = array[i].preis;
        document.getElementById("produktschild" + i)?.appendChild(preisschild);
        let button = document.createElement("button");
        document.getElementById(array[i].name)?.appendChild(button);
        document.getElementById("produktschild" + i)?.appendChild(button);
        button.innerHTML = "In den Warenkorb";
    }
    else if (array[i].text) {
        let div = document.createElement("div");
        div.id = "produkttext" + i;
        document.getElementById("text")?.appendChild(div);
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
        preistext.innerHTML = array[i].preis;
        document.getElementById("produkttext" + i)?.appendChild(preistext);
        let button = document.createElement("button");
        document.getElementById(array[i].name)?.appendChild(button);
        document.getElementById("produkttext" + i)?.appendChild(button);
        button.innerHTML = "In den Warenkorb";
    }
}
//# sourceMappingURL=script.js.map