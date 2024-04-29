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
exports.PaiementService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const paiement_entity_1 = require("./entities/paiement.entity");
const typeorm_2 = require("typeorm");
let PaiementService = class PaiementService {
    constructor(paiementRepository) {
        this.paiementRepository = paiementRepository;
    }
    async findAll() {
        return this.paiementRepository.find();
    }
    async findOne(id) {
        return this.paiementRepository.findOne({ where: { idPaiement: id } });
    }
    async create(paiementData) {
        const paiement = this.paiementRepository.create(paiementData);
        return this.paiementRepository.save(paiement);
    }
    async update(id, paiementData) {
        await this.paiementRepository.update(id, paiementData);
        return this.paiementRepository.findOne({ where: { idPaiement: id } });
    }
    async remove(id) {
        await this.paiementRepository.delete(id);
    }
};
exports.PaiementService = PaiementService;
exports.PaiementService = PaiementService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(paiement_entity_1.Paiement)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PaiementService);
//# sourceMappingURL=paiement.service.js.map