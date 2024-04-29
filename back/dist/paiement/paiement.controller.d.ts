import { Paiement } from './entities/paiement.entity';
import { PaiementService } from './paiement.service';
export declare class PaiementController {
    private readonly paiementService;
    constructor(paiementService: PaiementService);
    findAllPaiements(): Promise<Paiement[]>;
    findOnePaiement(id: number): Promise<Paiement>;
    createPaiement(paiementData: Partial<Paiement>): Promise<Paiement>;
    updatePaiement(id: number, paiementData: Partial<Paiement>): Promise<Paiement>;
    removePaiement(id: number): Promise<void>;
}
