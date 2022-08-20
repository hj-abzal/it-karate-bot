import {sendMessage} from './sendMessage';
import ScheduledMessage, {IScheduledMessage} from '../m-2-models/scheduledMessage';

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
        setInterval(() => {
            this.scheduledMessages.map(s => {
                if (s.time === this.time()) {
                    this.sendMessages(s.usersIDs, s.message);
                }
            });
        }, 1000);
    };

    private sendMessages(userIDs: number[], message: string) {
        userIDs.map(async (id: number) => {
            await sendMessage(id, message);
        });
    }

    private time(): string {
        const minutes = this.addZeroIfNeeded(new Date().getMinutes());
        const hours = this.addZeroIfNeeded(new Date().getHours());
        const seconds = this.addZeroIfNeeded(new Date().getSeconds());

        return `${hours}:${minutes}:${seconds}`;
    };

    private addZeroIfNeeded(n: number): number | string {
        if (n.toString().length === 1) {
            return `0${n}`;
        }
        return n;
    }
}
