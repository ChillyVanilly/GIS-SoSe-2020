namespace Aufgabe07 {
    export interface Produkte {
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

    export let allProducts: Produkte[];
}