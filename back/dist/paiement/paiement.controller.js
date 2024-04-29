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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaiementController = void 0;
const common_1 = require("@nestjs/common");
const paiement_service_1 = require("./paiement.service");
let PaiementController = class PaiementController {
    constructor(paiementService) {
        this.paiementService = paiementService;
    }
    findAllPaiements() {
        return this.paiementService.findAll();
    }
    findOnePaiement(id) {
        return this.paiementService.findOne(id);
    }
    createPaiement(paiementData) {
        return this.paiementService.create(paiementData);
    }
    updatePaiement(id, paiementData) {
        return this.paiementService.update(id, paiementData);
    }
    removePaiement(id) {
        return this.paiementService.remove(id);
    }
};
exports.PaiementController = PaiementController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PaiementController.prototype, "findAllPaiements", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PaiementController.prototype, "findOnePaiement", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaiementController.prototype, "createPaiement", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], PaiementController.prototype, "updatePaiement", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PaiementController.prototype, "removePaiement", null);
exports.PaiementController = PaiementController = __decorate([
    (0, common_1.Controller)('paiement'),
    __metadata("design:paramtypes", [paiement_service_1.PaiementService])
], PaiementController);
//# sourceMappingURL=paiement.controller.js.map