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
exports.ReservationController = void 0;
const common_1 = require("@nestjs/common");
const reservation_service_1 = require("./reservation.service");
let ReservationController = class ReservationController {
    constructor(reservationService) {
        this.reservationService = reservationService;
    }
    async createReservation(eventId, participantId) {
        try {
            const reservation = await this.reservationService.createReservation(eventId, participantId);
            return { success: true, reservation };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException || error instanceof common_1.BadRequestException) {
                return { success: false, message: error.message };
            }
            throw error;
        }
    }
    async cancelReservation(reservationId) {
        try {
            await this.reservationService.cancelReservation(reservationId);
            return { success: true, message: `Reservation with ID ${reservationId} has been canceled` };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                return { success: false, message: error.message };
            }
            throw error;
        }
    }
    async getReservationById(reservationId) {
        try {
            const reservation = await this.reservationService.GetReservationById(reservationId);
            if (!reservation) {
                throw new common_1.NotFoundException(`Reservation with ID ${reservationId} not found`);
            }
            return { success: true, reservation };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                return { success: false, message: error.message };
            }
            throw error;
        }
    }
    async getParticipantReservations(participantId) {
        try {
            const reservations = await this.reservationService.getParticipantReservations(participantId);
            if (reservations.length === 0) {
                throw new common_1.NotFoundException(`No reservations found for Participant with ID ${participantId}`);
            }
            return { success: true, reservations };
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                return { success: false, message: error.message };
            }
            throw error;
        }
    }
    async getNumberOfEventReservationsConfirmed(eventId) {
        try {
            const [reservations, confirmedCount] = await this.reservationService.getNumberOfEventReservationsConfirmed(eventId);
            return { confirmedCount };
        }
        catch (error) {
            return { confirmedCount: 0 };
        }
    }
};
exports.ReservationController = ReservationController;
__decorate([
    (0, common_1.Post)(':eventId/:participantId'),
    __param(0, (0, common_1.Param)('eventId')),
    __param(1, (0, common_1.Param)('participantId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ReservationController.prototype, "createReservation", null);
__decorate([
    (0, common_1.Delete)('cancel/:reservationId'),
    __param(0, (0, common_1.Param)('reservationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReservationController.prototype, "cancelReservation", null);
__decorate([
    (0, common_1.Get)(':reservationId'),
    __param(0, (0, common_1.Param)('reservationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReservationController.prototype, "getReservationById", null);
__decorate([
    (0, common_1.Get)('participant/:participantId'),
    __param(0, (0, common_1.Param)('participantId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReservationController.prototype, "getParticipantReservations", null);
__decorate([
    (0, common_1.Get)('event/:eventId/confirmed-count'),
    __param(0, (0, common_1.Param)('eventId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReservationController.prototype, "getNumberOfEventReservationsConfirmed", null);
exports.ReservationController = ReservationController = __decorate([
    (0, common_1.Controller)('reservation'),
    __metadata("design:paramtypes", [reservation_service_1.ReservationService])
], ReservationController);
//# sourceMappingURL=reservation.controller.js.map