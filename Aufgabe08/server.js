"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A08Server = void 0;
const Http = require("http");
var A08Server;
(function (A08Server) {
    console.log("Starting server");
    //process enviroment port : legt port des Servers für let port fest
    let port = Number(process.env.PORT);
    //Wenn kein Port vorhanden ist, wird Port auf 8100 gesetzt
    if (!port)
        port = 8100;
    //erschaffe neuen Server
    let server = Http.createServer();
    //fügt Listener bei Anfragen ein
    server.addListener("request", handleRequest);
    //fügt Listener bei Abhören ein 
    server.addListener("listening", handleListen);
    //connected Server mit Port 8100
    server.listen(port);
    //Wenn etwas empfangen wird : wird handleListen ausgeführt
    function handleListen() {
        console.log("Listening");
    }
    //Wenn etwas angefragt wird : wird handleRequest ausgeführt, Parametere mitgegegben - http Protokolle ohne Rückgabewert für Frage und Antwort
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        //setzt Header des http.SeverAntwort auf HTML mit Zeichencode UTF 8
        _response.setHeader("content-type", "text/html; charset=utf-8");
        //erlaubt dem Browser Code jeglichen Ursprungs anzufragen damit Resource erreicht wird
        _response.setHeader("Access-Control-Allow-Origin", "*");
        //Serverantwort = AnfragenURL: , schriebt auf der Seite
        _response.write(_request.url);
        console.log(_request.url); //  Aufgabe : Serverantwort (loggt in Serverkonsole)
        //Ende der Anfrage:
        _response.end();
    }
})(A08Server = exports.A08Server || (exports.A08Server = {}));
//# sourceMappingURL=server.js.map