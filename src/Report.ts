import { Logger } from 'tslog';
import { onNotExist } from './Run.js';

export const log = new Logger();

export function onNotExistError(error: any) {
    switch (onNotExist) {
        case 'throw':
            // an error is thrown (an exception is raised), and processing will stop
            throw error;
        case 'warn':
            // a message is displayed (and logged) and processing continues
            log.warn(error.message);
            break;
        case 'log':
            // a message is written to a log(file) and processing continues
            log.info(error.message);
            break;
        case 'ignore':
            // processing continues as if nothing happened
            break;
    }
}