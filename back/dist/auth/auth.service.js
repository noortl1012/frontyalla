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
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const compte_service_1 = require("../compte/compte.service");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = AuthService_1 = class AuthService {
    constructor(compteService, jwtService) {
        this.compteService = compteService;
        this.jwtService = jwtService;
        this.logger = new common_1.Logger(AuthService_1.name);
    }
    async validateUser(username, password) {
        const user = await this.compteService.findByUsername(username);
        if (!user)
            return null;
        if (!user) {
            throw new common_1.NotAcceptableException('could not find the user');
        }
        console.log('Entered password:', password);
        console.log('Stored hashed password:', user.password);
        if (!bcrypt.compareSync(password, String(user.password).trim())) {
            throw new common_1.NotAcceptableException('Invalid password haha');
        }
        return user;
    }
    async login(user) {
        const payload = {
            username: user.username, sub: user.idCompte
        };
        const secretKey = process.env.jwtSecret;
        if (!secretKey) {
            throw new Error('JWT secret key is not defined.');
        }
        return {
            access_token: this.jwtService.sign(payload, { secret: secretKey }),
        };
    }
    async verify(token) {
        const decoded = this.jwtService.verify(token, {
            secret: process.env.jwtSecret
        });
        const user = await this.compteService.findByUsername(decoded.username);
        if (!user) {
            throw new Error('Unable the user from decoded token');
        }
        return user;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [compte_service_1.CompteService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map