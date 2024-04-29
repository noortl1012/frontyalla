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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reservation = exports.etat = void 0;
const typeorm_1 = require("typeorm");
const participant_entity_1 = require("../../participant/entities/participant.entity");
const paiement_entity_1 = require("../../paiement/entities/paiement.entity");
const event_entity_1 = require("../../event/entities/event.entity");
var etat;
(function (etat) {
    etat["PENDING"] = "en attente";
    etat["CONFIRMED"] = "confirm\u00E9e";
    etat["CANCELED"] = "declined";
})(etat || (exports.etat = etat = {}));
let Reservation = class Reservation {
};
exports.Reservation = Reservation;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Reservation.prototype, "idReservation", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => participant_entity_1.Participant, participant => participant.reservations),
    __metadata("design:type", participant_entity_1.Participant)
], Reservation.prototype, "participant", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => paiement_entity_1.Paiement, paiement => paiement.reservation),
    __metadata("design:type", paiement_entity_1.Paiement)
], Reservation.prototype, "paiement", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => event_entity_1.Event, event => event.reservations),
    __metadata("design:type", event_entity_1.Event)
], Reservation.prototype, "event", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamp" }),
    __metadata("design:type", Date)
], Reservation.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: etat,
    }),
    __metadata("design:type", String)
], Reservation.prototype, "\u00E9tat", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Reservation.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Reservation.prototype, "updatedAt", void 0);
exports.Reservation = Reservation = __decorate([
    (0, typeorm_1.Entity)()
], Reservation);
//# sourceMappingURL=reservation.entity.js.map