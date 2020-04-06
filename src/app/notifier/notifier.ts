// import { NotifierType } from './notifier-type';

export enum NotifierType {
    SUCCESS = 'success',
    WARNING = 'warning',
    ERROR = 'error',
    INFO = 'info',
}

export enum NotifierPosition{
   LEFT_TOP = 'left-top',
   RIGHT_TOP = 'right-top',
   LEFT_BOTTOM = 'left-bottom',
   RIGHT_BOTTOM = 'right-bottom',
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
