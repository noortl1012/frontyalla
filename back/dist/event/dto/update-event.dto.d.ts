import { CreateEventDto } from './create-event.dto';
import { Categories } from '../entities/event.entity';
declare const UpdateEventDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateEventDto>>;
export declare class UpdateEventDto extends UpdateEventDto_base {
    titre?: string;
    description?: string;
    date?: Date;
    capacite?: number;
    heureDebut?: string;
    heureFin?: string;
    categorie?: Categories;
    prix?: string;
}
export {};
