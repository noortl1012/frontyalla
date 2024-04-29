import { Participant } from "src/participant/entities/participant.entity";
import { Event } from "src/event/entities/event.entity";
export declare class Commentaire {
    idComment: number;
    contenu: string;
    participant: Participant;
    event: Event;
}
