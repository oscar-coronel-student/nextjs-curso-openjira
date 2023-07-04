import Head from "next/head"
import { Navbar } from "../ui/Navbar"
import { Box } from "@mui/material"
import { Sidebar } from "../ui/Sidebar"


interface Props {
  title?: string
  children: JSX.Element|JSX.Element[]
}

export const MainLayout = ({ title, children }: Props) => {
  return <>
    <Box sx={{
      flexFlow: 1,
    }}>
      <Head>
        <title>{ title ?? 'Open JIRA' }</title>
      </Head>

      <Navbar />
      <Sidebar />

      <Box sx={{ padding: '10px 20px' }}>
        { children }
      </Box>
    </Box>
  </>
}