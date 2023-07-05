import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';

import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import { useContext } from 'react';
import { UIContext } from '@/src/context/ui';
import { CloseSideBar } from '@/src/actions';


const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts']

export const  Sidebar = () => {

    const { isSidebarOpen, uiDispatch } = useContext(UIContext);

    return <>
        <Drawer
            anchor='left'
            open={ isSidebarOpen }
            onClose={ () => uiDispatch(CloseSideBar()) }
        >
            <Box sx={{ width: 250 }}>
                <Box sx={{ padding: '5px 10px' }}>
                    <Typography variant='h4'>Menú</Typography>
                </Box>

                <List>
                    {
                        menuItems.map( (text, index) => {
                            return <ListItem key={ text } button>
                                <ListItemIcon>
                                    { index % 2 ? <InboxOutlinedIcon /> : <MailOutlineOutlinedIcon /> }
                                </ListItemIcon>
                                <ListItemText primary={ text } />
                            </ListItem>
                        })
                    }
                </List>

                <Divider />

                <List>
                    {
                        menuItems.map( (text, index) => {
                            return <ListItem key={ text } button>
                                <ListItemIcon>
                                    { index % 2 ? <InboxOutlinedIcon /> : <MailOutlineOutlinedIcon /> }
                                </ListItemIcon>
                                <ListItemText primary={ text } />
                            </ListItem>
                        })
                    }
                </List>
            </Box>
        </Drawer>
    </>
}
