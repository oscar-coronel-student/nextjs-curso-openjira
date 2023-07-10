import { Entry, EntryReducerActions } from '../interfaces';


export const AddEntry = (payload: Entry): EntryReducerActions => ({
    type: 'AddEntry',
    payload
})