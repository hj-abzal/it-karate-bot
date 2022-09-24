import {sendMessage} from './sendMessage';
import ScheduledMessage, {IScheduledMessage} from '../m-2-models/scheduledMessage';
import {addZeroIfNeeded} from './addZeroIfNeeded';

export class Scheduler {
    public scheduledMessages: IScheduledMessage[] = [];

    constructor() {
        this.setScheduledMessages();
    }

    public setScheduledMessages() {
        setTimeout(async () => {
            const scheduledMessages: any = await ScheduledMessage.find().exec();
            if (scheduledMessages) {
                this.scheduledMessages = scheduledMessages;
            }
        });
    }

    public start(): void {
        console.log('createScheduler started!');
        setInterval(() => {
            this.scheduledMessages.map(async s => {
                if (s.time === this.time()) {
                    this.sendMessages(s.usersIDs, s.message);
                    if (!s.isRepeated) {
                        await ScheduledMessage.findByIdAndDelete(s._id);
                        this.scheduledMessages.filter((el) => el._id !== s._id)
                    }
                }
            });
            // console.log(this.time());
        }, 1000);
    };

    private sendMessages(userIDs: number[], message: string) {
        userIDs.map(async (id: number) => {
            await sendMessage(id, message);
        });
    }

    private time(): string {
        const minutes = addZeroIfNeeded(new Date().getMinutes());
        const hours = addZeroIfNeeded(new Date().getHours());
        const seconds = addZeroIfNeeded(new Date().getSeconds());

        return `${hours}:${minutes}:${seconds}`;
    };
}