import { memo } from 'react';
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';

import { Entry } from '@/src/interfaces';


interface Props extends Pick<Entry, 'description'|'createdAt'> {
}

export const EntryCard = memo(({ description, createdAt }: Props) => {

    return <>
        <Card
            sx={{
                marginBottom: 1
            }}
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