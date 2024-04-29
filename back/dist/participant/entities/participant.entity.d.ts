import { Reservation } from 'src/reservation/entities/reservation.entity';
import { Commentaire } from 'src/commentaire/entities/commentaire.entity';
export declare class Participant {
    idParticipant: number;
    username: string;
    nom: string;
    prenom: string;
    adresse: string;
    dn: Date;
    reservations: Reservation[];
    commentaires: Commentaire[];
}
