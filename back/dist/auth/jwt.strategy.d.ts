import { CompteService } from "src/compte/compte.service";
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly usersService;
    CompteService: any;
    constructor(usersService: CompteService);
    validate(validationPayload: {
        username: String;
        sub: string;
    }): Promise<any>;
}
export {};
