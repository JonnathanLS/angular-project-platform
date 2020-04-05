// import { NotifierType } from './notifier-type';

export enum NotifierType {
    SUCCESS = 'success',
    WARNING = 'warning',
    ERROR = 'error',
    INFO = 'info',
}

export enum NotififerPosition{
    TOP = 'top',
    BOTTOM = 'bottom',
    RIGHT = 'right',
    LEFT = 'left',
}
export interface NotifierOptions{
    title?: string;
    millisecs?: number;
    position?: NotififerPosition;
}
export interface Notifier {
    type: NotifierType;
    message: string;
    options: NotifierOptions
}