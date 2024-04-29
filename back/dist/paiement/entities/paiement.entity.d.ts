import { Facture } from "src/facture/entities/facture.entity";
import { Reservation } from "src/reservation/entities/reservation.entity";
export declare class Paiement {
    idPaiement: number;
    montant: string;
    date: Date;
    facture: Facture;
    reservation: Reservation;
}
