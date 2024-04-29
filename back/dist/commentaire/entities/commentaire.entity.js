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
exports.Commentaire = void 0;
const participant_entity_1 = require("../../participant/entities/participant.entity");
const typeorm_1 = require("typeorm");
const event_entity_1 = require("../../event/entities/event.entity");
let Commentaire = class Commentaire {
};
exports.Commentaire = Commentaire;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Commentaire.prototype, "idComment", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'contenu' }),
    __metadata("design:type", String)
], Commentaire.prototype, "contenu", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => participant_entity_1.Participant, participant => participant.commentaires),
    __metadata("design:type", participant_entity_1.Participant)
], Commentaire.prototype, "participant", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => event_entity_1.Event, event => event.commentaires),
    __metadata("design:type", event_entity_1.Event)
], Commentaire.prototype, "event", void 0);
exports.Commentaire = Commentaire = __decorate([
    (0, typeorm_1.Entity)('commentaire')
], Commentaire);
//# sourceMappingURL=commentaire.entity.js.map