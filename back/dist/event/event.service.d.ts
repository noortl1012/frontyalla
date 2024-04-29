import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Repository } from 'typeorm';
import { Categories, Event } from './entities/event.entity';
export declare class EventService {
    private readonly eventRepository;
    constructor(eventRepository: Repository<Event>);
    createEvent(createEventDto: CreateEventDto): Promise<Event>;
    findAll(): Promise<Event[]>;
    findOne(id: number): Promise<Event>;
    updateEvent(id: number, updateEventDto: UpdateEventDto): Promise<Event>;
    removeEvent(id: number): Promise<void>;
    findByTitle(titre: string): Promise<Event[]>;
    findByDate(date: Date): Promise<Event[]>;
    findByCategory(category: Categories): Promise<Event[]>;
}
