import { DragEvent, memo } from 'react';
import { useRouter } from 'next/router';
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';

import { Entry } from '@/src/interfaces';
import { getFormatDistanceToNow } from '@/src/utils/general';


interface Props extends Pick<Entry, '_id'|'description'|'createdAt'> {
    handleDrag: (isDragging: boolean) => void
}

export const EntryCard = memo(({ _id, description, createdAt, handleDrag }: Props) => {

    const router = useRouter();


    const onDragStart = ( event: DragEvent<HTMLDivElement> ) => {
        event.dataTransfer.setData('text', _id);
        handleDrag(true);
    }

    const onDragEnd = ( event: DragEvent<HTMLDivElement> ) => {
        handleDrag(false);
    }

    const onClick = () => {
        router.push(`/entries/${ _id }`);
    }


    return <>
        <Card
            sx={{
                marginBottom: 1
            }}
            draggable
            onDragStart={ onDragStart }
            onDragEnd={ onDragEnd }
            onClick={ onClick }
        >
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whiteSpace: 'pre-line' }}>{ description }</Typography>
                </CardContent>

                <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
                    <Typography variant='body2'>{ getFormatDistanceToNow( createdAt ) }</Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    </>
})