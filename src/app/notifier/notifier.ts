// import { NotifierType } from './notifier-type';

export enum NotifierType {
    SUCCESS = 'success',
    WARNING = 'warning',
    ERROR = 'error',
    INFO = 'info',
}

export enum NotifierPosition{
   TOP = 'top',
   BOTTOM = 'bottom',
}
export interface NotifierOptions{
    title?: string;
    millisecs?: number;
    position?: NotifierPosition;
    fullWidth?: boolean;
}
export interface Notifier {
    type: NotifierType;
    message: string;
    options: NotifierOptions
}
