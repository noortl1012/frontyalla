import { OrganisateurService } from './organisateur.service';
import { CreateOrganisateurDto } from './dto/create-organisateur.dto';
import { UpdateOrganisateurDto } from './dto/update-organisateur.dto';
import { organisateur } from './entities/organisateur.entity';
export declare class OrganisateurController {
    private readonly organisateurService;
    constructor(organisateurService: OrganisateurService);
    findAll(): Promise<organisateur[]>;
    findOne(id: number): Promise<organisateur>;
    createOrganisateur(createOrganisateurDto: CreateOrganisateurDto): Promise<organisateur>;
    update(id: number, updateOrganisateurDto: UpdateOrganisateurDto): Promise<organisateur>;
    remove(id: number): Promise<void>;
    findByName(nom: string): Promise<organisateur[]>;
}
