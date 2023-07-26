import { MainLayout } from "@/src/components/layouts/MainLayout";
import { Button, Card, CardActions, CardContent, CardHeader, Grid, TextField } from "@mui/material";
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';



const EntryPage = () => {

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
                            title='Entrada'
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
                            />

                            { /*RADIO*/ }
                        </CardContent>
                        <CardActions>
                            <Button
                                startIcon={ <SaveOutlinedIcon /> }
                                variant='contained'
                                fullWidth
                            >
                                Save
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </MainLayout>
    </>
}

export {
    EntryPage as default
}