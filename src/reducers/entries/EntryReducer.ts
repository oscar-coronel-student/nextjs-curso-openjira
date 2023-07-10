import { EntryInitState, EntryReducerActions } from '@/src/interfaces';
import { getUUID } from '@/src/utils/general';


export const entryInitState: EntryInitState = {
    entries: [
        {
            _id: getUUID(),
            description: 'NextJS - Pendiente: Crear tabla de usuarios',
            status: 'pending',
            createdAt: new Date().getTime(),
        },
        {
            _id: getUUID(),
            description: 'NextJS - Progreso: Crear tabla de dispositivos',
            status: 'in-progress',
            createdAt: new Date().getTime() - 1000000,
        },
        {
            _id: getUUID(),
            description: 'NextJS - Finalizada: Crear tabla de notas',
            status: 'finished',
            createdAt: new Date().getTime() - 2000000,
        },
    ]
}

export const entryReducer = ( state: EntryInitState, action: EntryReducerActions): EntryInitState => {

    switch( action.type ){
        case 'AddEntry':
            return {
                ...state,
                entries: [ ...state.entries, action.payload ]
            }
        default:
            return state
    }
}