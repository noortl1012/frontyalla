import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Categories, Event } from './entities/event.entity';
export declare class EventController {
    private readonly eventService;
    constructor(eventService: EventService);
    create(createEventDto: CreateEventDto): Promise<Event>;
    findAll(): Promise<Event[]>;
    findOne(id: number): Promise<Event>;
    update(id: number, updateEventDto: UpdateEventDto): Promise<Event>;
    remove(id: number): Promise<void>;
    findByTitle(title: string): Promise<Event[]>;
    findByDate(date: string): Promise<Event[]>;
    findByCategory(category: Categories): Promise<Event[]>;
}
