import { CompteService } from 'src/compte/compte.service';
import { JwtService } from '@nestjs/jwt';
import { Compte } from 'src/compte/entities/compte.entity';
export declare class AuthService {
    private readonly compteService;
    private readonly jwtService;
    private readonly logger;
    constructor(compteService: CompteService, jwtService: JwtService);
    validateUser(username: string, password: string): Promise<any>;
    login(user: Compte): Promise<any>;
    verify(token: string): Promise<any>;
}
