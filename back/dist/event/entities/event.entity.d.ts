import { Commentaire } from "src/commentaire/entities/commentaire.entity";
import { Reservation } from "src/reservation/entities/reservation.entity";
export declare enum Categories {
    Concert = "Concert",
    Festival = "Festival",
    Afterwork = "Afterwork",
    Camping = "Camping",
    Randonnee = "Randonn\u00E9e",
    Sport = "Sport",
    BienEtre = "Bien \u00EAtre",
    Food = "Food"
}
export declare class Event {
    idEvent: number;
    titre: string;
    description: string;
    date: Date;
    capacite: number;
    heureDebut: string;
    heureFin: string;
    categorie: Categories;
    numberofReservations: number;
    location: String;
    prix: string;
    reservations: Reservation[];
    commentaires: Commentaire[];
}
