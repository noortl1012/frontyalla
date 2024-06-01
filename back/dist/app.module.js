"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const participant_controller_1 = require("./participant/participant.controller");
const participant_service_1 = require("./participant/participant.service");
const participant_module_1 = require("./participant/participant.module");
const reservation_module_1 = require("./reservation/reservation.module");
const event_module_1 = require("./event/event.module");
const paiement_module_1 = require("./paiement/paiement.module");
const compte_module_1 = require("./compte/compte.module");
const facture_module_1 = require("./facture/facture.module");
const notification_module_1 = require("./notification/notification.module");
const organisateur_module_1 = require("./organisateur/organisateur.module");
const commentaire_module_1 = require("./commentaire/commentaire.module");
const auth_service_1 = require("./auth/auth.service");
const auth_module_1 = require("./auth/auth.module");
const jwt_1 = require("@nestjs/jwt");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mssql',
                host: 'yalla-sql-server.database.windows.net',
                port: 1433,
                username: 'adminlogin',
                password: 'P@ssw0rd1234!',
                database: 'yalla-sql-db',
                autoLoadEntities: true,
                synchronize: true,
                logging: true,
            }),
            auth_module_1.AuthModule, participant_module_1.ParticipantModule, reservation_module_1.ReservationModule, event_module_1.EventModule, paiement_module_1.PaiementModule, compte_module_1.CompteModule, facture_module_1.FactureModule, notification_module_1.NotificationModule, organisateur_module_1.OrganisateurModule, commentaire_module_1.CommentaireModule
        ],
        controllers: [app_controller_1.AppController, participant_controller_1.ParticipantController],
        providers: [app_service_1.AppService, participant_service_1.ParticipantService, auth_service_1.AuthService, jwt_1.JwtService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map