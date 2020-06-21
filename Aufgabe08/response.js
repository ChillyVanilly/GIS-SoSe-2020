"use strict";
var Aufgabe08;
(function (Aufgabe08) {
    document.getElementById("buttonid")?.addEventListener("click", response);
    async function response() {
        let formData = new FormData(document.forms[0]);
        let url = "https://vasilii-server.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        console.log(query.toString());
        await fetch(url);
        for (let entry of query) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
    }
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=response.js.map