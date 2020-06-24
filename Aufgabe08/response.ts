namespace Aufgabe08 {
      //Gibt Button einen Eventlistener bei Click
    document.getElementById("buttonid")?.addEventListener("click", answer);


    async function answer(): Promise<void> {
        
        //greift auf die Daten des forms im login.html zurück und packt sie in formDatra
        let formData: FormData = new FormData(document.forms[0]);

        //Server url als String
        let url: string = "https://vasilii-server.herokuapp.com/";

        //Quer : Daten aus form Data als "ANY"
        let query: URLSearchParams = new URLSearchParams(<any>formData);

        
        //url + query zusammen
        url = url + "?" + query.toString();
        console.log(query.toString());

        
        //Antwort des Servers aus url+query
        await fetch(url);
        for (let entry of query) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
    
        }
    }
    }



 