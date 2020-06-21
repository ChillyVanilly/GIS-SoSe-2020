namespace Aufgabe07 {
    export interface Artikel {
        name: string;
        bild: string;
        beschreibung: string;
        farbe: string;
        preis: number;
        auflager: boolean;
        programmierbar: string;
        category: number;
        länge: string;
        wifi: string;
        wasserdicht: string;
        smarthome: string;
    }
    export let artikel: Artikel[];
    loadArtikel("data.json");

    async function loadArtikel(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let jsonArray: JSON = await response.json();
        artikel = await JSON.parse(JSON.stringify(jsonArray));
        createLEDS();
    }
}