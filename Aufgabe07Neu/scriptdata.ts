namespace Aufgabe07Neu {

    export interface Artikel {
        bild: string;
        name: string;
        beschreibung: string;
        preis: number;
        category: number;
        länge: string;
        wifi: string;
        wasserdicht: string;
        smarthome: string;
        farbe: string;
    }

    export let artikel: Artikel[];
    loadArtikel("data.json");

    async function loadArtikel(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let jsonArray: JSON = await response.json();
        artikel = await JSON.parse(JSON.stringify(jsonArray));
        create();
    }
}