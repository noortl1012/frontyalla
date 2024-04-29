import { CreateOrganisateurDto } from './dto/create-organisateur.dto';
import { UpdateOrganisateurDto } from './dto/update-organisateur.dto';
import { organisateur } from './entities/organisateur.entity';
import { Repository } from 'typeorm';
export declare class OrganisateurService {
    private readonly organisateursRepository;
    constructor(organisateursRepository: Repository<organisateur>);
    findAll(): Promise<organisateur[]>;
    findOne(id: number): Promise<organisateur>;
    create(createOrganisateurDto: CreateOrganisateurDto): Promise<organisateur>;
    update(id: number, updateOrganisateurDto: UpdateOrganisateurDto): Promise<organisateur>;
    remove(id: number): Promise<void>;
    findByName(nom: string): Promise<organisateur[]>;
}
