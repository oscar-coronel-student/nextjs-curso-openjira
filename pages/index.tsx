import { NextPage } from "next"
import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material"

import { MainLayout } from "@/src/components/layouts/MainLayout"
import { EntryList } from "@/src/components/ui/EntryList"
import { NewEntry } from "@/src/components/ui/NewEntry"


const HomePage: NextPage = () => {
  return <>
    <MainLayout title='Home - OpenJira'>
      <Grid container spacing={ 2 }>

        <Grid item xs={ 12 } sm={ 4 }>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Pendientes' />

            <CardContent sx={{ padding: '5px 5px' }}>
              <NewEntry status='pending' />
              <EntryList status='pending' />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={ 12 } sm={ 4 }>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='En Progreso' />
            <CardContent sx={{ padding: '5px 5px' }}>
              <EntryList status='in-progress' />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={ 12 } sm={ 4 }>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Completadas' />
            <CardContent sx={{ padding: '5px 5px' }}>
              <EntryList status='finished' />
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </MainLayout>
  </>
}

export {
  HomePage as default
}