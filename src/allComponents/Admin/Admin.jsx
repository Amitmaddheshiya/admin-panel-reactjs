import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  AppBar,
  IconButton,
  Toolbar,
  Button
} from "@mui/material";

import {
  Dashboard,
  Logout,
  Delete,
  Menu
} from '@mui/icons-material';

import {
  Outlet,
  Link
} from "react-router-dom";

import {
  useState
} from "react";

const Admin = ()=>{
  const [active,setActive] = useState(false);

  const design = (
    <>
      <Drawer open={active} anchor="left" onClose={()=>setActive(!active)}>
        <Box sx={{width: 250}}>
          <List>
            <ListItem disablePadding>
              <ListItemButton component={Link} to="dashboard">
                <ListItemIcon>
                  <Dashboard />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      
      <Stack>
        <AppBar color="secondary" position="static">
          <Stack direction="row" justifyContent="space-between">
            <Toolbar>
              <IconButton color="inherit" onClick={()=>setActive(!active)}>
                <Menu />
              </IconButton>
            </Toolbar>
            <Toolbar>
              <Button color="inherit">Logout</Button>
            </Toolbar>
          </Stack>
        </AppBar>
        <Box sx={{p: 4}}>
          <Outlet />
        </Box>
      </Stack>
    </>
  );
  return design;
}
export default Admin;
