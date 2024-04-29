"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompteModule = void 0;
const common_1 = require("@nestjs/common");
const compte_service_1 = require("./compte.service");
const compte_controller_1 = require("./compte.controller");
const typeorm_1 = require("@nestjs/typeorm");
const compte_entity_1 = require("./entities/compte.entity");
const participant_entity_1 = require("../participant/entities/participant.entity");
const notification_entity_1 = require("../notification/entities/notification.entity");
const organisateur_entity_1 = require("../organisateur/entities/organisateur.entity");
let CompteModule = class CompteModule {
};
exports.CompteModule = CompteModule;
exports.CompteModule = CompteModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([compte_entity_1.Compte, participant_entity_1.Participant, notification_entity_1.Notification, organisateur_entity_1.organisateur])],
        exports: [typeorm_1.TypeOrmModule, compte_service_1.CompteService],
        controllers: [compte_controller_1.CompteController],
        providers: [compte_service_1.CompteService],
    })
], CompteModule);
//# sourceMappingURL=compte.module.js.map