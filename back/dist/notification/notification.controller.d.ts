import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { Notification } from './entities/notification.entity';
export declare class NotificationController {
    private readonly notificationService;
    constructor(notificationService: NotificationService);
    sendNotification(notificationDto: CreateNotificationDto): Promise<Notification>;
    getAllNotifications(): Promise<Notification[]>;
}
