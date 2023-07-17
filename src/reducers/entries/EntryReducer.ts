import { EntryInitState, EntryReducerActions } from '@/src/interfaces';


export const entryInitState: EntryInitState = {
    entries: []
}

export const entryReducer = ( state: EntryInitState, action: EntryReducerActions): EntryInitState => {

    switch( action.type ){
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