import { Entry, EntryReducerActions } from '../interfaces';


export const RefreshEntries = (payload: Entry[]): EntryReducerActions => ({
    type: 'RefreshEntries',
    payload
})

export const AddEntry = (payload: Entry): EntryReducerActions => ({
    type: 'AddEntry',
    payload
})

export const EditEntry = (payload: Entry): EntryReducerActions => ({
    type: 'EditEntry',
    payload
})