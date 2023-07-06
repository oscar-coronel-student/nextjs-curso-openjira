import { useReducer } from 'react';

import { EntryContext } from '../../context';
import { entryInitState, entryReducer } from '@/src/reducers';


interface Props {
    children: JSX.Element|JSX.Element[]
}

export const EntryProvider = ({ children }: Props) => {

    const [entryState, entryDispatch] = useReducer(entryReducer, entryInitState);

    return <>
        <EntryContext.Provider
            value={{
                ...entryState,
                entryDispatch,
            }}
        >
            { children }
        </EntryContext.Provider>
    </>
}