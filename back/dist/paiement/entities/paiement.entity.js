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
exports.Paiement = void 0;
const typeorm_1 = require("typeorm");
const facture_entity_1 = require("../../facture/entities/facture.entity");
const reservation_entity_1 = require("../../reservation/entities/reservation.entity");
let Paiement = class Paiement {
};
exports.Paiement = Paiement;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Paiement.prototype, "idPaiement", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Paiement.prototype, "montant", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Paiement.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => facture_entity_1.Facture, facture => facture.paiement),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", facture_entity_1.Facture)
], Paiement.prototype, "facture", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => reservation_entity_1.Reservation, reservation => reservation.paiement),
    __metadata("design:type", reservation_entity_1.Reservation)
], Paiement.prototype, "reservation", void 0);
exports.Paiement = Paiement = __decorate([
    (0, typeorm_1.Entity)('paiement')
], Paiement);
//# sourceMappingURL=paiement.entity.js.map