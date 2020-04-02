import { NotifierType } from './notifier-type';

export interface Notifier {
    type: NotifierType;
    title?: string;
    message: string;
}