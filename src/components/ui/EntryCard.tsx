import { DragEvent, memo } from 'react';
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';

import { Entry } from '@/src/interfaces';


interface Props extends Pick<Entry, '_id'|'description'|'createdAt'> {
    handleDrag: (isDragging: boolean) => void
}

export const EntryCard = memo(({ _id, description, createdAt, handleDrag }: Props) => {

    const onDragStart = ( event: DragEvent<HTMLDivElement> ) => {
        event.dataTransfer.setData('text', _id);
        handleDrag(true);
    }

    const onDragEnd = ( event: DragEvent<HTMLDivElement> ) => {
        // todo: cancelar ondrag

        handleDrag(false);
    }

    return <>
        <Card
            sx={{
                marginBottom: 1
            }}
            draggable
            onDragStart={ onDragStart }
            onDragEnd={ onDragEnd }
        >
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whiteSpace: 'pre-line' }}>{ description }</Typography>
                </CardContent>

                <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
                    <Typography variant='body2'>hace 30 minutos</Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    </>
})