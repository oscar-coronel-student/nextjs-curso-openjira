import { useContext, useMemo, DragEvent, useCallback } from 'react';
import { Paper, List } from '@mui/material';

import { EntryContext, UIContext } from '@/src/context';
import { Entry, EntryStatus } from '@/src/interfaces';
import { EntryCard } from './EntryCard';

import styles from './EntryList.module.css';


interface Props {
    status: EntryStatus
}

export const EntryList = ({ status }: Props) => {

    const { entries, editEntry } = useContext( EntryContext );
    const { setIsDragging, isDragging } = useContext( UIContext );

    const entriesByStatus = useMemo(() => {
        return entries.filter( entry => entry.status === status );
    }, [status, entries]);


    const handleDrag = useCallback((isDragging: boolean) => {
        setIsDragging(isDragging);
    }, [status, entries]);




    const onDropEntry = ( event: DragEvent<HTMLDivElement> ) => {
        const _id: string = event.dataTransfer.getData('text');

        const entry: Entry|undefined = entries.find( e => e._id === _id );
        
        if( !entry ) return;

        editEntry({
            ...entry,
            status
        });
        handleDrag(false);
    }
    
    const allowDrop = ( event: DragEvent<HTMLDivElement> ) => {
        event.preventDefault();
    }


    return <>
        <div
            onDrop={ onDropEntry }
            onDragOver={ allowDrop }
            className={ isDragging ? styles.dragging : '' }
        >
            <Paper sx={{ height: 'calc(100vh - 230px)', overflow: 'auto', backgroundColor: 'transparent', padding: '0px 5px' }}>
                <List sx={{ 
                    opacity: isDragging ? 0.2 : 1, 
                    transition: 'all .3s'
                }}>
                    {
                        entriesByStatus.map( entry => {
                            return <EntryCard
                                key={ entry._id }
                                description={ entry.description }
                                createdAt={ entry.createdAt }
                                _id={ entry._id }
                                handleDrag={ handleDrag }
                            />
                        })
                    }
                </List>
            </Paper>
        </div>
    </>
}