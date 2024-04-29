import { Paiement } from './entities/paiement.entity';
import { Repository } from 'typeorm';
export declare class PaiementService {
    private readonly paiementRepository;
    constructor(paiementRepository: Repository<Paiement>);
    findAll(): Promise<Paiement[]>;
    findOne(id: number): Promise<Paiement>;
    create(paiementData: Partial<Paiement>): Promise<Paiement>;
    update(id: number, paiementData: Partial<Paiement>): Promise<Paiement>;
    remove(id: number): Promise<void>;
}
