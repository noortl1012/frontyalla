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
exports.Event = exports.Categories = void 0;
const commentaire_entity_1 = require("../../commentaire/entities/commentaire.entity");
const reservation_entity_1 = require("../../reservation/entities/reservation.entity");
const typeorm_1 = require("typeorm");
var Categories;
(function (Categories) {
    Categories["Concert"] = "Concert";
    Categories["Festival"] = "Festival";
    Categories["Afterwork"] = "Afterwork";
    Categories["Camping"] = "Camping";
    Categories["Randonnee"] = "Randonn\u00E9e";
    Categories["Sport"] = "Sport";
    Categories["BienEtre"] = "Bien \u00EAtre";
    Categories["Food"] = "Food";
})(Categories || (exports.Categories = Categories = {}));
let Event = class Event {
};
exports.Event = Event;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Event.prototype, "idEvent", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Titre' }),
    __metadata("design:type", String)
], Event.prototype, "titre", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'description' }),
    __metadata("design:type", String)
], Event.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'date' }),
    __metadata("design:type", Date)
], Event.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'capacite' }),
    __metadata("design:type", Number)
], Event.prototype, "capacite", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Heure_Debut' }),
    __metadata("design:type", String)
], Event.prototype, "heureDebut", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Heure_Fin' }),
    __metadata("design:type", String)
], Event.prototype, "heureFin", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'categorie' }),
    __metadata("design:type", String)
], Event.prototype, "categorie", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'numberofReservations', default: 0 }),
    __metadata("design:type", Number)
], Event.prototype, "numberofReservations", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'location' }),
    __metadata("design:type", String)
], Event.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'prix' }),
    __metadata("design:type", String)
], Event.prototype, "prix", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => reservation_entity_1.Reservation, reservation => reservation.event),
    __metadata("design:type", Array)
], Event.prototype, "reservations", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => commentaire_entity_1.Commentaire, commentaire => commentaire.event),
    __metadata("design:type", Array)
], Event.prototype, "commentaires", void 0);
exports.Event = Event = __decorate([
    (0, typeorm_1.Entity)('event')
], Event);
//# sourceMappingURL=event.entity.js.map