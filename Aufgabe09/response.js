"use strict";
var A09Server;
(function (A09Server) {
    //Gibt Button einen Eventlistener bei Click
    //let deklariert variable
    let newButton1 = document.getElementById("buttonhtml");
    newButton1.addEventListener("click", handleHtml);
    let newButton2 = document.getElementById("buttonjson");
    newButton2.addEventListener("click", handleJson);
    let _url;
    //Async Function ist asynchrone Funktion die Objekt zurückgibt. Asynchrone Funktionen laufen über Event loop, 
    //geben impliziertes Promise Objekt zurück.
    //promise objekt - entweder resolved oder rejected
    //die funktion hängt formulardaten an den URL 
    async function handleJson() {
        //greift auf die Daten des forms im login.html zurück und packt sie in formDatra
        //FormData belegt Name-Wert-Paare des Formulars und encodiert diese Werte bei der Übertragung
        let formData = new FormData(document.forms[0]);
        //Quer : Daten aus form Data als "ANY"
        //SearchParams definiert hilfsmethoden um mit dem Query String einer URL zu arbeiten
        let query = new URLSearchParams(formData);
        urlErstellen();
        _url = _url + "/json" + "?" + query.toString(); //an der url wird der pfad und querry string angehängt (in diesem fall html)
        //querry string (Abfrage Zeichenkette) ist bestandteil einer URL
        let response1 = await fetch(_url, { method: "get" });
        let response2 = await response1.json(); //oder .json
        console.log(response2);
        urlErstellen();
    }
    async function handleHtml() {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        urlErstellen();
        _url = _url + "/html" + "?" + query.toString();
        //Die Antwort wird vom Server geholt
        //await fetch : kommunikation mit dem Server
        //mithilfe von fetch wird mit hilfe von fetch anderen servern gesendet
        let response1 = await fetch(_url, { method: "get" });
        //hier wird die Antwort vom Server erhalten und als text gespeichert
        let response2 = await response1.text();
        //
        let ausgabe = document.getElementById("htmlAusgabe");
        ausgabe.innerHTML = response2; //antwort vom server wird als html gespeichert
        console.log(response2); //log in der konsole
        urlErstellen(); //url wird überschrieben damit sie wieder "leer" ist
    }
    function urlErstellen() {
        //Server url als String
        _url = "https://vasilii-server.herokuapp.com";
    }
})(A09Server || (A09Server = {}));
//# sourceMappingURL=response.js.map