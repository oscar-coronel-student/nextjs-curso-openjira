import entries from '@/pages/api/entries';
import { EntryInitState, EntryReducerActions } from '@/src/interfaces';


export const entryInitState: EntryInitState = {
    entries: []
}

export const entryReducer = ( state: EntryInitState = entryInitState, action: EntryReducerActions): EntryInitState => {

    switch( action.type ){
        case 'RefreshEntries':
            return {
                ...state,
                entries: [ ...action.payload ]
            }
        case 'AddEntry':
            return {
                ...state,
                entries: [ ...state.entries, action.payload ]
            }
        case 'EditEntry':
            return {
                ...state,
                entries: state.entries.map( entry => entry._id === action.payload._id ? action.payload : entry )
            }
        default:
            return state
    }
}