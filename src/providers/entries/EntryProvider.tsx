import { useReducer } from 'react';

import { EntryContext } from '../../context';
import { entryInitState, entryReducer } from '@/src/reducers';
import { AddEntry } from '@/src/actions';
import { getUUID } from '@/src/utils/general';
import { EntryStatus } from '@/src/interfaces';


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

    return <>
        <EntryContext.Provider
            value={{
                ...entryState,
                addEntry,
            }}
        >
            { children }
        </EntryContext.Provider>
    </>
}