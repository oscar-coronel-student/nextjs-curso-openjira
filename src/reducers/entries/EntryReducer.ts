import { EntryInitState, EntryReducerActions } from '@/src/interfaces';


export const entryInitState: EntryInitState = {
    entries: []
}

export const entryReducer = ( state: EntryInitState, action: EntryReducerActions): EntryInitState => {

    switch( action.type ){
        case 'AddEntry':
            return {
                ...state
            }
        default:
            return state
    }
}