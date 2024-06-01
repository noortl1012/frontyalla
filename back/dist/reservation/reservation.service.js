"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const reservation_entity_1 = require("./entities/reservation.entity");
const typeorm_2 = require("typeorm");
const participant_entity_1 = require("../participant/entities/participant.entity");
const event_entity_1 = require("../event/entities/event.entity");
let ReservationService = class ReservationService {
    constructor(reservationRepository, participantRepository, eventRepository) {
        this.reservationRepository = reservationRepository;
        this.participantRepository = participantRepository;
        this.eventRepository = eventRepository;
    }
    async createReservation(eventId, participantId) {
        const participant = await this.participantRepository.findOne({ where: { idParticipant: participantId } });
        const event = await this.eventRepository.findOne({ where: { idEvent: eventId } });
        if (!participant) {
            throw new common_1.NotFoundException(`Participant with ID ${participantId} not found`);
        }
        if (!event) {
            throw new common_1.NotFoundException(`Event with ID ${eventId} not found`);
        }
        if (event.numberofReservations >= event.capacite) {
            throw new common_1.BadRequestException(`Event with ID ${eventId} has reached its capacity for reservations`);
        }
        const reservation = new reservation_entity_1.Reservation();
        reservation.participant = participant;
        reservation.date = new Date();
        reservation.etat = 'CONFIRMED';
        await this.reservationRepository.save(reservation);
        event.numberofReservations += 1;
        await this.eventRepository.save(event);
        return reservation;
    }
    async cancelReservation(reservationId) {
        const reservation = await this.reservationRepository.findOne({ where: { idReservation: reservationId } });
        if (!reservation) {
            throw new common_1.NotFoundException(`Reservation with ID ${reservationId} not found`);
        }
        reservation.etat = 'CANCELED';
        await this.reservationRepository.save(reservation);
        return reservation;
    }
    async GetReservationById(reservationId) {
        const reservation = this.reservationRepository.findOne({ where: { idReservation: reservationId } });
        return reservation;
    }
    async getParticipantReservations(participantId) {
        return await this.reservationRepository.find({ where: { participant: { idParticipant: participantId } } });
    }
    async getEventReservations(eventId) {
        const reservations = await this.reservationRepository.find({
            select: ["idReservation", "etat"],
            where: { etat: 'CONFIRMED', event: { idEvent: eventId } },
        });
        return reservations;
    }
    async getNumberOfEventReservationsConfirmed(eventId) {
        const NumberReservations = await this.reservationRepository.findAndCount({
            select: ["idReservation", "etat"],
            where: { etat: 'CONFIRMED', event: { idEvent: eventId } },
        });
        return NumberReservations;
    }
};
exports.ReservationService = ReservationService;
exports.ReservationService = ReservationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(reservation_entity_1.Reservation)),
    __param(1, (0, typeorm_1.InjectRepository)(participant_entity_1.Participant)),
    __param(2, (0, typeorm_1.InjectRepository)(event_entity_1.Event)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ReservationService);
//# sourceMappingURL=reservation.service.js.map