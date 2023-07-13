import { Entry, EntryReducerActions } from '../interfaces';


export const AddEntry = (payload: Entry): EntryReducerActions => ({
    type: 'AddEntry',
    payload
})

export const EditEntry = (payload: Entry): EntryReducerActions => ({
    type: 'EditEntry',
    payload
})