"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A09Server = void 0;
const Http = require("http");
const Url = require("url");
var A09Server;
(function (A09Server) {
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
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            if (url.pathname == "/html") {
                for (let key in url.query) {
                    _response.write(key + ": " + url.query[key] + "<br>");
                }
            }
            if (url.pathname == "/json") {
                let jsonString = JSON.stringify(url.query);
                _response.write(jsonString);
            }
        }
        console.log(_request.url); //  Aufgabe : Serverantwort (loggt in Serverkonsole)
        //Ende der Anfrage:
        _response.end();
    }
})(A09Server = exports.A09Server || (exports.A09Server = {}));
//# sourceMappingURL=server.js.map