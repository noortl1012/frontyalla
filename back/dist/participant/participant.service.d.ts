import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';
import { Repository } from 'typeorm';
import { Participant } from './entities/participant.entity';
export declare class ParticipantService {
    private readonly participantRepository;
    constructor(participantRepository: Repository<Participant>);
    create(createParticipantDto: CreateParticipantDto): Promise<Participant>;
    findAll(): Promise<void>;
    findOne(id: number): Promise<Participant>;
    update(id: number, updateParticipantDto: UpdateParticipantDto): Promise<void>;
    remove(id: number): Promise<void>;
}
