namespace A09Server {
    //Gibt Button einen Eventlistener bei Click
    let newButton1: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("buttonhtml"));
    newButton1.addEventListener("click", handleHtml);
    let newButton2: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("buttonjson"));
    newButton2.addEventListener("click", handleJson);
    let _url: string;



    async function handleJson(): Promise<void> {
        //greift auf die Daten des forms im login.html zurück und packt sie in formDatra
        let formData: FormData = new FormData(document.forms[0]);
        //Quer : Daten aus form Data als "ANY"
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        _url = _url + "/json" + "?" + query.toString();
        let response1: Response = await fetch(_url, { method: "get" });
        let response2: string = await response1.json(); //oder .json
        console.log(response2);
        urlErstellen();
    }
    
    async function handleHtml(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        urlErstellen();
        _url = _url + "/html" + "?" + query.toString();
        //Die Antwort wird vom Server geholt
        let response1: Response = await fetch(_url, { method: "get" });
        let response2: string = await response1.text();
        let ausgabe: HTMLParagraphElement = (<HTMLParagraphElement>document.getElementById("htmlAusgabe"));
        ausgabe.innerHTML = response2;
        console.log(response2);
        urlErstellen(); //url wird überschrieben damit sie wieder leer ist
    }

    function urlErstellen(): void {
        //Server url als String
        _url = "https://vasilii-server.herokuapp.com";

    }
}



