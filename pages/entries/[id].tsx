import { useState, ChangeEvent, useMemo } from 'react';
import { GetServerSideProps, NextPage } from 'next'
import { capitalize, Button, Card, CardActions, CardContent, CardHeader, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, IconButton } from "@mui/material";

import { MainLayout } from "@/src/components/layouts/MainLayout";
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import { EntryStatus } from "@/src/interfaces";
import { isValidObjectId } from 'mongoose';


const validStatus: EntryStatus[] = ['pending', 'in-progress', 'finished'];

interface Props {
    id: string
}

const EntryPage: NextPage<Props> = ({ id }) => {

    const [inputValue, setInputValue] = useState<string>('');
    const [status, setStatus] = useState<EntryStatus>('pending');
    const [touched, setTouched] = useState<boolean>(false);

    const onChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue( event.target.value );
    }

    const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        setStatus(event.target.value as EntryStatus);
    }

    const onSave = () => {
        console.log({
            inputValue,
             status
        });
    }

    const isInputError: boolean = useMemo(() => {
        return inputValue.length <= 0 && touched;
    }, [touched, inputValue]);

    return <>
        <MainLayout title='...'>
            <Grid
                container
                justifyContent='center'
                sx={{ marginTop: 2 }}
            >
                <Grid item xs={ 12 } sm={ 8 } md={ 6 }>
                    <Card>
                        <CardHeader 
                            title={ `Entrada: ${ inputValue }` }
                            subheader={ `Creada hace: ... minutos` }
                        />
                        <CardContent>
                            <TextField 
                                sx={{ marginTop: 2, marginBottom: 1 }}
                                fullWidth
                                placeholder='Nueva entrada'
                                autoFocus
                                multiline
                                label='Nueva entrada'
                                value={ inputValue }
                                onChange={ onChangeInputValue }
                                helperText={ isInputError && 'Ingrese un valor' }
                                onBlur={ () => setTouched(true) }
                                error={ isInputError }
                            />

                            <FormControl>
                                <FormLabel>Estado:</FormLabel>
                                <RadioGroup 
                                    row
                                    value={ status }
                                    onChange={ onStatusChange }
                                >
                                    {
                                        validStatus.map( state => (
                                            <FormControlLabel 
                                                key={ state }
                                                value={ state }
                                                control={ <Radio /> }
                                                label={ capitalize(state) }
                                            />
                                        ))
                                    }
                                </RadioGroup>
                            </FormControl>
                        </CardContent>
                        <CardActions>
                            <Button
                                startIcon={ <SaveOutlinedIcon /> }
                                variant='contained'
                                fullWidth
                                onClick={ onSave }
                                disabled={ inputValue.length <= 0 }
                            >
                                Save
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>

            <IconButton
                sx={{
                    position: 'fixed',
                    bottom: 30,
                    right: 30,
                    backgroundColor: 'error.dark'
                }}
            >
                <DeleteOutlinedIcon />
            </IconButton>

        </MainLayout>
    </>
}


export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { id } = params as { id: string };

    if( !isValidObjectId(id) ){
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            
        }
    }
}

export {
    EntryPage as default
}