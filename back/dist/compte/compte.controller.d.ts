import { CompteService } from './compte.service';
import { CreateCompteDto } from './dto/create-compte.dto';
import { UpdateCompteDto } from './dto/update-compte.dto';
import { Compte } from './entities/compte.entity';
export declare class CompteController {
    private readonly compteService;
    constructor(compteService: CompteService);
    addCompte(compteDto: CreateCompteDto): Promise<Compte>;
    updateCompte(id: number, compteDto: UpdateCompteDto): Promise<Compte>;
    getCompteById(id: number): Promise<Compte>;
    getAllComptes(): Promise<Compte[]>;
    deleteCompte(id: number): Promise<void>;
    getCompteByUsername(username: string): Promise<Compte>;
}
