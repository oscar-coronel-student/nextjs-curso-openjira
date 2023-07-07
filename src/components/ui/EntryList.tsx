import { useContext, useMemo } from 'react';
import { Paper, List } from '@mui/material';

import { EntryContext } from '@/src/context';
import { EntryStatus } from '@/src/interfaces';
import { EntryCard } from './EntryCard';


interface Props {
    status: EntryStatus
}

export const EntryList = ({ status }: Props) => {

    const { entries } = useContext( EntryContext );

    const entriesByStatus = useMemo(() => {
        return entries.filter( entry => entry.status === status );
    }, [status, entries]);

    return <>
        <div>
            <Paper sx={{ height: 'calc(100vh - 175px)', overflow: 'auto', backgroundColor: 'transparent', padding: '0px 5px' }}>
                { /* TODO: CAMBIARA DEPENDIENDO SI ESTOY HACIENDO UN DRAG O NO */ }
                <List sx={{ opacity: 1 }}>
                    {
                        entriesByStatus.map( entry => {
                            return <EntryCard
                                key={ entry._id }
                                description={ entry.description }
                                createdAt={ entry.createdAt }
                            />
                        })
                    }
                </List>
            </Paper>
        </div>
    </>
}