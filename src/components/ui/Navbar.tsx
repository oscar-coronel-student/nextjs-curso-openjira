import { useContext } from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import { UIContext } from "@/src/context/ui";
import { OpenSideBar } from "@/src/actions";


export const Navbar = () => {

    const { uiDispatch } = useContext(UIContext);

    return <>
        <AppBar position='sticky'>
            <Toolbar>
                <IconButton
                    size='large'
                    edge='start'
                    onClick={ () => uiDispatch(OpenSideBar()) }
                >
                    <MenuOutlinedIcon />
                </IconButton>

                <Typography variant='h6'>OpenJira</Typography>
            </Toolbar>
        </AppBar>
    </>
}