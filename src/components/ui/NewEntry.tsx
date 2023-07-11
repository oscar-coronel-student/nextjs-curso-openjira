import { ChangeEvent, useState, useContext } from 'react';
import { Box, Button, TextField } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { EntryContext, UIContext } from '@/src/context';
import { EntryStatus } from '@/src/interfaces';


interface Props {
    status: EntryStatus
}

export const NewEntry = ({ status }: Props) => {

    const { isAddingEntry, setIsAddingEntry } = useContext( UIContext );
    const [inputValue, setInputValue] = useState<string>('');
    const [isFocus, setIsFocus] = useState<boolean>(false);

    const { addEntry } = useContext( EntryContext );


    const onPressAddIcon = () => {
        setIsAddingEntry(true);
    }

    const onCancel = () => {
        setInputValue('');
        setIsAddingEntry(false);
    }

    const onChangeInputValue = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputValue(event.target.value);
    }

    const onSave = () => {
        if( inputValue.length === 0 ) return

        addEntry(inputValue, status);
        setIsAddingEntry(false);
        setInputValue('');
    }

    return <>
        <Box sx={{ marginBottom: 2, paddingX: 1 }}>
            {
                !isAddingEntry 
                ? <>
                    <Button
                        startIcon={ <AddCircleOutlineOutlinedIcon /> }
                        fullWidth
                        variant='outlined'
                        onClick={ onPressAddIcon }
                    >
                        Agregar Tarea
                    </Button>        
                </>
                : <>
                    <TextField 
                        fullWidth
                        sx={{ marginTop: 2, marginBottom: 1 }}
                        placeholder='Nueva entrada'
                        autoFocus
                        multiline
                        label='Nueva entrada'
                        helperText={ inputValue.length <= 0 && !isFocus && 'Ingrese un valor' }
                        error={ inputValue.length <= 0 && !isFocus }
                        value={ inputValue }
                        onChange={ onChangeInputValue }
                        onFocus={ () =>  setIsFocus(true) }
                        onBlur={ () =>  setIsFocus(false) }
                    />

                    <Box display='flex' justifyContent='space-between'>
                        <Button
                            variant="text"
                            onClick={ onCancel }
                        >
                            Cancelar
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            endIcon={ <SaveOutlinedIcon /> }
                            onClick={ onSave }
                        >
                            Guardar
                        </Button>
                    </Box>
                </>
            }
        </Box>
    </>
}