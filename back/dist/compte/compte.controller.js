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
exports.CompteController = void 0;
const common_1 = require("@nestjs/common");
const compte_service_1 = require("./compte.service");
const create_compte_dto_1 = require("./dto/create-compte.dto");
const update_compte_dto_1 = require("./dto/update-compte.dto");
let CompteController = class CompteController {
    constructor(compteService) {
        this.compteService = compteService;
    }
    async addCompte(compteDto) {
        return await this.compteService.addCompte(compteDto);
    }
    async updateCompte(id, compteDto) {
        return await this.compteService.updateCompte(id, compteDto);
    }
    async getCompteById(id) {
        return await this.compteService.getCompteById(id);
    }
    async getAllComptes() {
        try {
            return await this.compteService.getAllComptes();
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
    async deleteCompte(id) {
        return await this.compteService.deleteCompte(id);
    }
    getCompteByUsername(username) {
        return this.compteService.findByUsername(username);
    }
};
exports.CompteController = CompteController;
__decorate([
    (0, common_1.Post)('/register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_compte_dto_1.CreateCompteDto]),
    __metadata("design:returntype", Promise)
], CompteController.prototype, "addCompte", null);
__decorate([
    (0, common_1.Patch)('/update/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_compte_dto_1.UpdateCompteDto]),
    __metadata("design:returntype", Promise)
], CompteController.prototype, "updateCompte", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CompteController.prototype, "getCompteById", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CompteController.prototype, "getAllComptes", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CompteController.prototype, "deleteCompte", null);
__decorate([
    (0, common_1.Get)('username/:username'),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CompteController.prototype, "getCompteByUsername", null);
exports.CompteController = CompteController = __decorate([
    (0, common_1.Controller)('compte'),
    __metadata("design:paramtypes", [compte_service_1.CompteService])
], CompteController);
//# sourceMappingURL=compte.controller.js.map