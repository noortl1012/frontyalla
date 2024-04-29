import { Repository } from 'typeorm';
import { Notification } from './entities/notification.entity';
import { CreateNotificationDto } from './dto/create-notification.dto';
export declare class NotificationService {
    private notificationRepository;
    constructor(notificationRepository: Repository<Notification>);
    sendNotification(notificationDto: CreateNotificationDto): Promise<Notification>;
    getAllNotifications(): Promise<Notification[]>;
}
