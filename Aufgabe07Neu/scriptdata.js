"use strict";
var Aufgabe07Neu;
(function (Aufgabe07Neu) {
    loadArtikel("data.json");
    async function loadArtikel(_url) {
        let response = await fetch(_url);
        let jsonArray = await response.json();
        Aufgabe07Neu.artikel = await JSON.parse(JSON.stringify(jsonArray));
        Aufgabe07Neu.createArtikel();
    }
})(Aufgabe07Neu || (Aufgabe07Neu = {}));
//# sourceMappingURL=scriptdata.js.map