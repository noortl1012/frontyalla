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
exports.Participant = void 0;
const typeorm_1 = require("typeorm");
const reservation_entity_1 = require("../../reservation/entities/reservation.entity");
const commentaire_entity_1 = require("../../commentaire/entities/commentaire.entity");
let Participant = class Participant {
};
exports.Participant = Participant;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Participant.prototype, "idParticipant", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Participant.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Participant.prototype, "nom", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Participant.prototype, "prenom", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Participant.prototype, "adresse", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Participant.prototype, "dn", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => reservation_entity_1.Reservation, reservation => reservation.participant),
    __metadata("design:type", Array)
], Participant.prototype, "reservations", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => commentaire_entity_1.Commentaire, commentaire => commentaire.participant),
    __metadata("design:type", Array)
], Participant.prototype, "commentaires", void 0);
exports.Participant = Participant = __decorate([
    (0, typeorm_1.Entity)()
], Participant);
//# sourceMappingURL=participant.entity.js.map