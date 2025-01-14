"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationModule = void 0;
const common_1 = require("@nestjs/common");
const reservation_service_1 = require("./reservation.service");
const reservation_controller_1 = require("./reservation.controller");
const typeorm_1 = require("@nestjs/typeorm");
const participant_entity_1 = require("../participant/entities/participant.entity");
const reservation_entity_1 = require("./entities/reservation.entity");
const paiement_entity_1 = require("../paiement/entities/paiement.entity");
const event_entity_1 = require("../event/entities/event.entity");
let ReservationModule = class ReservationModule {
};
exports.ReservationModule = ReservationModule;
exports.ReservationModule = ReservationModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([participant_entity_1.Participant, reservation_entity_1.Reservation, paiement_entity_1.Paiement, event_entity_1.Event])],
        controllers: [reservation_controller_1.ReservationController],
        providers: [reservation_service_1.ReservationService],
        exports: [typeorm_1.TypeOrmModule],
    })
], ReservationModule);
//# sourceMappingURL=reservation.module.js.map