import { Repository } from 'typeorm';
import { Compte } from './entities/compte.entity';
import { CreateCompteDto } from './dto/create-compte.dto';
import { UpdateCompteDto } from './dto/update-compte.dto';
export declare class CompteService {
    private compteRepository;
    createCompte(username: any, password: any): void;
    constructor(compteRepository: Repository<Compte>);
    addCompte(compteDto: CreateCompteDto): Promise<Compte>;
    updateCompte(id: number, compteDto: UpdateCompteDto): Promise<Compte>;
    getCompteById(id: number): Promise<Compte>;
    getAllComptes(): Promise<Compte[]>;
    deleteCompte(id: number): Promise<void>;
    findByUsername(username: string): Promise<Compte | undefined>;
}
