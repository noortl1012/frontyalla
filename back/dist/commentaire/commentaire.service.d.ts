import { CreateCommentaireDto } from './dto/create-commentaire.dto';
import { UpdateCommentaireDto } from './dto/update-commentaire.dto';
import { Commentaire } from './entities/commentaire.entity';
import { Repository } from 'typeorm';
export declare class CommentaireService {
    private readonly commentaireRepository;
    constructor(commentaireRepository: Repository<Commentaire>);
    createCommentaire(createCommentaireDto: CreateCommentaireDto): Promise<Commentaire>;
    findAll(): Promise<Commentaire[]>;
    findOne(id: number): Promise<Commentaire>;
    updateCommentaire(id: number, updateCommentaireDto: UpdateCommentaireDto): Promise<Commentaire>;
    removeCommentaire(id: number): Promise<void>;
}
