import { CreateOrganisateurDto } from './create-organisateur.dto';
declare const UpdateOrganisateurDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateOrganisateurDto>>;
export declare class UpdateOrganisateurDto extends UpdateOrganisateurDto_base {
    nom?: string;
    prenom?: string;
    adresse?: string;
    dn: string;
}
export {};
