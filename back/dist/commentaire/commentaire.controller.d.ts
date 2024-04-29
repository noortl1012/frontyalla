import { CommentaireService } from './commentaire.service';
import { CreateCommentaireDto } from './dto/create-commentaire.dto';
import { UpdateCommentaireDto } from './dto/update-commentaire.dto';
import { Commentaire } from './entities/commentaire.entity';
export declare class CommentaireController {
    private readonly commentaireService;
    constructor(commentaireService: CommentaireService);
    create(createCommentaireDto: CreateCommentaireDto): Promise<Commentaire>;
    findAll(): Promise<Commentaire[]>;
    findOne(id: number): Promise<Commentaire>;
    update(id: number, updateCommentaireDto: UpdateCommentaireDto): Promise<Commentaire>;
    remove(id: number): Promise<void>;
}
