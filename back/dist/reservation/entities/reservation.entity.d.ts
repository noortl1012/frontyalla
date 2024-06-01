import { Participant } from "src/participant/entities/participant.entity";
import { Paiement } from "src/paiement/entities/paiement.entity";
import { Event } from "src/event/entities/event.entity";
export declare const ETAT_PENDING = "en attente";
export declare const ETAT_CONFIRMED = "confirm\u00E9e";
export declare const ETAT_CANCELED = "annul\u00E9e";
export declare class Reservation {
    idReservation: number;
    participant: Participant;
    paiement: Paiement;
    event: Event;
    date: Date;
    etat: string;
    createdAt: Date;
    updatedAt: Date;
}
