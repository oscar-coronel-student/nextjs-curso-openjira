import { ChangeEvent, useState, useContext } from 'react';
import { Box, Button, TextField } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { EntryContext } from '@/src/context';
import { AddEntry } from '@/src/actions';
import { getUUID } from '@/src/utils/general';
import { EntryStatus } from '@/src/interfaces';


interface Props {
    status: EntryStatus
}

export const NewEntry = ({ status }: Props) => {

    const [isAdding, setIsAdding] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');
    const [isFocus, setIsFocus] = useState<boolean>(false);

    const { addEntry } = useContext( EntryContext );


    const onPressAddIcon = () => {
        setIsAdding(true);
    }

    const onCancel = () => {
        setIsAdding(false);
    }

    const onChangeInputValue = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputValue(event.target.value);
    }

    const onSave = () => {
        if( inputValue.length === 0 ) return

        addEntry(inputValue, status);
        setIsAdding(false);
        setInputValue('');
    }

    return <>
        <Box sx={{ marginBottom: 2, paddingX: 1 }}>
            {
                !isAdding 
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