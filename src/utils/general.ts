import { v4 as uuidv4 } from 'uuid';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale'

export const getUUID = (): string => {
    return uuidv4();
}

export const getFormatDistanceToNow = (date: number) => {
    const fromNow = formatDistanceToNow( date, { locale: es } );
    return `hace ${ fromNow }`;
}