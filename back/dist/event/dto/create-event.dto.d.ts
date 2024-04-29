import { Categories } from '../entities/event.entity';
export declare class CreateEventDto {
    titre: string;
    description: string;
    date: Date;
    capacite: number;
    heureDebut: string;
    heureFin: string;
    categorie: Categories;
    location: String;
    prix: string;
}
