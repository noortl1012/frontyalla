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
exports.organisateur = void 0;
const compte_entity_1 = require("../../compte/entities/compte.entity");
const typeorm_1 = require("typeorm");
let organisateur = class organisateur {
};
exports.organisateur = organisateur;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], organisateur.prototype, "idOrg", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'last_name' }),
    __metadata("design:type", String)
], organisateur.prototype, "nom", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'first_name' }),
    __metadata("design:type", String)
], organisateur.prototype, "prenom", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'address' }),
    __metadata("design:type", String)
], organisateur.prototype, "adresse", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'date_of_birth' }),
    __metadata("design:type", String)
], organisateur.prototype, "dn", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => compte_entity_1.Compte, compte => compte.organisateur),
    __metadata("design:type", compte_entity_1.Compte)
], organisateur.prototype, "compte", void 0);
exports.organisateur = organisateur = __decorate([
    (0, typeorm_1.Entity)('organisateur')
], organisateur);
//# sourceMappingURL=organisateur.entity.js.map