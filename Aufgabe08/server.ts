import * as Http from "http";

export namespace A08Server {
  console.log("Starting server");

  //process enviroment port : legt port des Servers für let port fest
  let port: number = Number(process.env.PORT);

  //Wenn kein Port vorhanden ist, wird Port auf 8100 gesetzt
  if (!port)
    port = 8100;

  //erschaffe neuen Server
  let server: Http.Server = Http.createServer();

  //fügt Listener bei Anfragen ein
  server.addListener("request", handleRequest);

  //fügt Listener bei Abhören ein 
  server.addListener("listening", handleListen);

  //connected Server mit Port 8100
  server.listen(port);
  
  //Wenn etwas empfangen wird : wird handleListen ausgeführt
  function handleListen(): void {
    console.log("Listening");
  }

  //Wenn etwas angefragt wird : wird handleRequest ausgeführt, Parametere mitgegegben - http Protokolle ohne Rückgabewert für Frage und Antwort
  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    console.log("I hear voices!");


//setzt Header des http.SeverAntwort auf HTML mit Zeichencode UTF 8
    _response.setHeader("content-type", "text/html; charset=utf-8");

//erlaubt dem Browser Code jeglichen Ursprungs anzufragen damit Resource erreicht wird
    _response.setHeader("Access-Control-Allow-Origin", "*");

//Serverantwort = AnfragenURL:
    _response.write(_request.url);

//Ende der Anfrage:
    _response.end();
  }
}