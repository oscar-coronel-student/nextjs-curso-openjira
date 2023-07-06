import { NextPage } from "next"
import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material"

import { MainLayout } from "@/src/components/layouts/MainLayout"


const HomePage: NextPage = () => {
  return <>
    <MainLayout title='Home - OpenJira'>
      <Grid container spacing={ 2 }>

        <Grid item xs={ 12 } sm={ 4 }>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Pendientes' />

            <CardContent>
              {/* Agregar una nueva entrada */}
              {/* Listado de las entradas */}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={ 12 } sm={ 4 }>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='En Progreso' />
          </Card>
        </Grid>

        <Grid item xs={ 12 } sm={ 4 }>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Completadas' />
          </Card>
        </Grid>

      </Grid>
    </MainLayout>
  </>
}

export {
  HomePage as default
}