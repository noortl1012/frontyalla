import { ParticipantService } from './participant.service';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';
export declare class ParticipantController {
    private readonly participantService;
    constructor(participantService: ParticipantService);
    create(createParticipantDto: CreateParticipantDto): Promise<import("./entities/participant.entity").Participant>;
    findAll(): Promise<void>;
    getParticipant(id: number): Promise<{
        success: boolean;
        participant: import("./entities/participant.entity").Participant;
        message?: undefined;
    } | {
        success: boolean;
        message: any;
        participant?: undefined;
    }>;
    update(id: string, updateParticipantDto: UpdateParticipantDto): Promise<void>;
    remove(id: string): Promise<void>;
}
