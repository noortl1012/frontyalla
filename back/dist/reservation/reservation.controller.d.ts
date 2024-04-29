import { ReservationService } from './reservation.service';
import { Reservation } from './entities/reservation.entity';
export declare class ReservationController {
    private readonly reservationService;
    constructor(reservationService: ReservationService);
    createReservation(eventId: number, participantId: number): Promise<{
        success: boolean;
        reservation?: Reservation;
        message?: string;
    }>;
    cancelReservation(reservationId: number): Promise<{
        success: boolean;
        message?: string;
    }>;
    getReservationById(reservationId: number): Promise<{
        success: boolean;
        reservation?: any;
        message?: string;
    }>;
    getParticipantReservations(participantId: number): Promise<{
        success: boolean;
        reservations?: any[];
        message?: string;
    }>;
    getNumberOfEventReservationsConfirmed(eventId: number): Promise<{
        confirmedCount: number;
    }>;
}
