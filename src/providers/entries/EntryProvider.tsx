import { useReducer } from 'react';

import { EntryContext } from '../../context';
import { entryInitState, entryReducer } from '@/src/reducers';
import { AddEntry, EditEntry } from '@/src/actions';
import { getUUID } from '@/src/utils/general';
import { Entry, EntryStatus } from '@/src/interfaces';


interface Props {
    children: JSX.Element|JSX.Element[]
}

export const EntryProvider = ({ children }: Props) => {

    const [entryState, entryDispatch] = useReducer(entryReducer, entryInitState);

    const addEntry = (description: string, status: EntryStatus) => {
        entryDispatch(AddEntry({
            _id: getUUID(),
            description,
            createdAt: new Date().getTime(),
            status
        }))
    }
    
    const editEntry = (entryUpdated: Entry) => entryDispatch(EditEntry(entryUpdated));

    return <>
        <EntryContext.Provider
            value={{
                ...entryState,
                addEntry,
                editEntry,
            }}
        >
            { children }
        </EntryContext.Provider>
    </>
}