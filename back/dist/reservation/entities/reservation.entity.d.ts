import { Participant } from "src/participant/entities/participant.entity";
import { Paiement } from "src/paiement/entities/paiement.entity";
import { Event } from "src/event/entities/event.entity";
export declare enum etat {
    PENDING = "en attente",
    CONFIRMED = "confirm\u00E9e",
    CANCELED = "declined"
}
export declare class Reservation {
    idReservation: number;
    participant: Participant;
    paiement: Paiement;
    event: Event;
    date: Date;
    état: etat;
    createdAt: Date;
    updatedAt: Date;
}
