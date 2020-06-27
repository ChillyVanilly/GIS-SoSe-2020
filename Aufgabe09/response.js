"use strict";
var A09Server;
(function (A09Server) {
    //Gibt Button einen Eventlistener bei Click
    let newButton1 = document.getElementById("buttonhtml");
    newButton1.addEventListener("click", handleHtml);
    let newButton2 = document.getElementById("buttonjson");
    newButton2.addEventListener("click", handleJson);
    let _url;
    async function handleJson() {
        //greift auf die Daten des forms im login.html zurück und packt sie in formDatra
        let formData = new FormData(document.forms[0]);
        //Quer : Daten aus form Data als "ANY"
        let query = new URLSearchParams(formData);
        _url = _url + "/json" + "?" + query.toString();
        let response1 = await fetch(_url, { method: "get" });
        let response2 = await response1.text(); //oder .json
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
        let response1 = await fetch(_url, { method: "get" });
        let response2 = await response1.text();
        let ausgabe = document.getElementById("htmlAusgabe");
        ausgabe.innerHTML = response2;
        console.log(response2);
        urlErstellen(); //url wird überschrieben damit sie wieder leer ist
    }
    function urlErstellen() {
        //Server url als String
        _url = "https://vasilii-server.herokuapp.com";
    }
})(A09Server || (A09Server = {}));
//# sourceMappingURL=response.js.map