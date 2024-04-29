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
exports.CommentaireService = void 0;
const common_1 = require("@nestjs/common");
const commentaire_entity_1 = require("./entities/commentaire.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let CommentaireService = class CommentaireService {
    constructor(commentaireRepository) {
        this.commentaireRepository = commentaireRepository;
    }
    async createCommentaire(createCommentaireDto) {
        const commentaire = this.commentaireRepository.create(createCommentaireDto);
        return this.commentaireRepository.save(commentaire);
    }
    async findAll() {
        return this.commentaireRepository.find();
    }
    async findOne(id) {
        const commentaire = await this.commentaireRepository.findOne({ where: { idComment: id } });
        if (!commentaire) {
            throw new common_1.NotFoundException("Commentaire with ID ${id} not found");
        }
        return commentaire;
    }
    async updateCommentaire(id, updateCommentaireDto) {
        const existingCommentaire = await this.findOne(id);
        const updatedCommentaire = this.commentaireRepository.merge(existingCommentaire, updateCommentaireDto);
        return this.commentaireRepository.save(updatedCommentaire);
    }
    async removeCommentaire(id) {
        await this.findOne(id);
        await this.commentaireRepository.delete(id);
    }
};
exports.CommentaireService = CommentaireService;
exports.CommentaireService = CommentaireService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(commentaire_entity_1.Commentaire)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CommentaireService);
//# sourceMappingURL=commentaire.service.js.map