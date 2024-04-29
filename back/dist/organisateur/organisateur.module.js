"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganisateurModule = void 0;
const common_1 = require("@nestjs/common");
const organisateur_service_1 = require("./organisateur.service");
const organisateur_controller_1 = require("./organisateur.controller");
const organisateur_entity_1 = require("./entities/organisateur.entity");
const typeorm_1 = require("@nestjs/typeorm");
const compte_entity_1 = require("../compte/entities/compte.entity");
let OrganisateurModule = class OrganisateurModule {
};
exports.OrganisateurModule = OrganisateurModule;
exports.OrganisateurModule = OrganisateurModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Event, organisateur_entity_1.organisateur, compte_entity_1.Compte])],
        exports: [typeorm_1.TypeOrmModule],
        controllers: [organisateur_controller_1.OrganisateurController],
        providers: [organisateur_service_1.OrganisateurService],
    })
], OrganisateurModule);
//# sourceMappingURL=organisateur.module.js.map