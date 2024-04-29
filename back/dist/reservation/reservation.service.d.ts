import { Reservation } from './entities/reservation.entity';
import { Repository } from 'typeorm';
import { Participant } from 'src/participant/entities/participant.entity';
import { Event } from 'src/event/entities/event.entity';
export declare class ReservationService {
    private readonly reservationRepository;
    private readonly participantRepository;
    private readonly eventRepository;
    constructor(reservationRepository: Repository<Reservation>, participantRepository: Repository<Participant>, eventRepository: Repository<Event>);
    createReservation(eventId: number, participantId: number): Promise<Reservation>;
    cancelReservation(reservationId: number): Promise<Reservation>;
    GetReservationById(reservationId: number): Promise<Reservation>;
    getParticipantReservations(participantId: number): Promise<Reservation[]>;
    getEventReservations(eventId: number): Promise<Reservation[]>;
    getNumberOfEventReservationsConfirmed(eventId: number): Promise<[Reservation[], number]>;
}
