import { MainLayout } from "@/src/components/layouts/MainLayout"
import { Typography } from "@mui/material"
import { NextPage } from "next"


const HomePage: NextPage = () => {
  return <>
    <MainLayout>
      <Typography variant="h1" color='primary'>Hola Mundo</Typography>
    </MainLayout>
  </>
}

export {
  HomePage as default
}