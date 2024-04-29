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
exports.CompteService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const compte_entity_1 = require("./entities/compte.entity");
const bcrypt = require("bcrypt");
let CompteService = class CompteService {
    createCompte(username, password) {
        throw new Error('Method not implemented.');
    }
    constructor(compteRepository) {
        this.compteRepository = compteRepository;
    }
    async addCompte(compteDto) {
        const { username, password } = compteDto;
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPassword = bcrypt.hashSync(password.trim(), salt);
        const newCompte = this.compteRepository.create({
            username,
            password: hashedPassword,
        });
        return await this.compteRepository.save(newCompte);
    }
    async updateCompte(id, compteDto) {
        const existingCompte = await this.compteRepository.preload({
            idCompte: id,
            ...compte_entity_1.Compte,
        });
        if (!existingCompte) {
            throw new common_1.NotFoundException(`Le compte d'ID ${id} n'existe pas.`);
        }
        const updatedCompte = this.compteRepository.merge(existingCompte, compteDto);
        return await this.compteRepository.save(updatedCompte);
    }
    async getCompteById(id) {
        const compte = await this.compteRepository.findOne({ where: { idCompte: id } });
        if (!compte) {
            throw new common_1.NotFoundException(`Le compte d'ID ${id} n'existe pas.`);
        }
        return compte;
    }
    async getAllComptes() {
        return await this.compteRepository.find();
    }
    async deleteCompte(id) {
        const compte = await this.compteRepository.preload({
            idCompte: id,
        });
        if (!compte) {
            throw new common_1.NotFoundException(`Le compte d'ID ${id} n'existe pas.`);
        }
        await this.compteRepository.remove(compte);
    }
    async findByUsername(username) {
        return this.compteRepository.findOne({ where: { username: username } });
    }
};
exports.CompteService = CompteService;
exports.CompteService = CompteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(compte_entity_1.Compte)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CompteService);
//# sourceMappingURL=compte.service.js.map