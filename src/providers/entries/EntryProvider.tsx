import { useEffect, useReducer } from 'react';

import { EntryContext } from '../../context';
import { useSnackbar } from 'notistack';

import { entryInitState, entryReducer } from '@/src/reducers';
import { AddEntry, EditEntry, RefreshEntries } from '@/src/actions';
import { Entry, EntryStatus } from '@/src/interfaces';
import { entriesApi } from '@/src/api';
import { AllEntriesResponse } from '@/src/interfaces/entries';
import { IEntry } from '@/models';


interface Props {
    children: JSX.Element|JSX.Element[]
}

export const EntryProvider = ({ children }: Props) => {

    const [entryState, entryDispatch] = useReducer(entryReducer, entryInitState);

    const { enqueueSnackbar } = useSnackbar();

    const addEntry = async (description: string, status: EntryStatus) => {
        try {
            const { data: newEntry } = await entriesApi.post<IEntry>('/entries', {
                description,
                status,
            });
            entryDispatch(AddEntry(newEntry));
        } catch (error) {
            console.log({ error });
        }
    }
    
    const editEntry = async ({ _id, description, status }: Entry, showSnackbar: boolean = false) => {
        try {
            const { data: entryUpdated } = await entriesApi.put<IEntry>(`/entries/${ _id }`, {
                description,
                status
            });
            entryDispatch(EditEntry(entryUpdated));

            showSnackbar && enqueueSnackbar('¡Entrada Editada!', {
                variant: 'success',
                autoHideDuration: 1500,
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                }
            });
        } catch (error: any) {
            console.log( error.response.data );
        }
    }
    
    const refreshEntries = (entries: Entry[]) => entryDispatch(RefreshEntries(entries));


    const loadInitialData = async () => {
        const { data: { data: allEntries } } = await entriesApi.get<AllEntriesResponse>('/entries');

        const entriesForReducer: Entry[] = allEntries.map( (apiEntry): Entry => {
            return {
                _id: apiEntry._id,
                description: apiEntry.description,
                createdAt: apiEntry.createdAt,
                status: apiEntry.status
            }
        });
        refreshEntries(entriesForReducer);
    }


    useEffect(() => {
        loadInitialData();
    }, []);
    


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