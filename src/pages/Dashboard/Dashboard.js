import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { Button, Divider } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import MyOrder from './MyOrder/MyOrder';
import ManageAllOrder from './Admin/ManageAllOrder/ManageAllOrder';
import AddReview from './AddReview/AddReview';
import AddProduct from './Admin/AddProduct/AddProduct';
import MakeAdmin from './Admin/MakeAdmin/MakeAdmin';
import ManageAllProducts from './Admin/ManageAllProducts/ManageAllProducts';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import Pay from './Pay/Pay';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardHome from './DashboardHome/DashboardHome';


const drawerWidth = 200;

const Dashboard = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { user, admin, logOut } = useAuth();
    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navmenu = {
        textDecoration: 'none',
        color: 'grey ',
        paddingBottom: '15px'
    }

    const drawer = (
        <div>
            <Toolbar />
            <List sx={{ textAlign: 'left', ml: 2 }}>
                <Box component="div" sx={{ml: 7,mb: 3}}>
                    <ListItemIcon>
                        <AccountCircleIcon sx={{ fontSize: '40px' }} />
                    </ListItemIcon>
                    <ListItemText>{user?.displayName}</ListItemText>

                </Box>
                <Divider/>
                <NavLink style={navmenu} to={`${url}`}><Button variant="inherit">Dashboard</Button></NavLink><br />
                {

                    admin ? <Box>

                        <NavLink style={navmenu} to={`${url}/manageorder`}><Button variant="inherit">ManageAllOrder</Button></NavLink><br />

                        <NavLink style={navmenu} to={`${url}/addproduct`}><Button variant="inherit">Add Product</Button></NavLink><br />

                        <NavLink style={navmenu} to={`${url}/makeadmin`}><Button variant="inherit">Make Admin</Button></NavLink><br />

                        <NavLink style={navmenu} to={`${url}/manageproduct`}><Button variant="inherit">Manage Product</Button></NavLink><br />
                    </Box> : <Box>
                        <NavLink style={navmenu} to={`${url}/myorder`}><Button variant="inherit">My Order</Button></NavLink><br />

                        <NavLink style={navmenu} to={`${url}/review`}><Button variant="inherit">Add Review</Button></NavLink><br />

                        <NavLink style={navmenu} to={`${url}/pay`}><Button variant="inherit">Pay</Button></NavLink><br />
                    </Box>
                }
                <NavLink style={navmenu} to="/home"><Button variant="inherit">Home</Button></NavLink><br />
                <Button onClick={logOut} color="inherit">Logout</Button>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: 'purple'
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Kid Store {admin ? 'admin' : 'user'} Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"

            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/myorder`}>
                        <MyOrder></MyOrder>
                    </Route>
                    <Route path={`${path}/review`}>
                        <AddReview></AddReview>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <AdminRoute path={`${path}/manageorder`}>
                        <ManageAllOrder></ManageAllOrder>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addproduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeadmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageproduct`}>
                        <ManageAllProducts></ManageAllProducts>
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
};

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;