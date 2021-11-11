import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
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
    Link,
    useRouteMatch
} from "react-router-dom";
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import Pay from './Pay/Pay';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const drawerWidth = 200;

const Dashboard = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { user,admin, logOut } = useAuth();
    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            
            {/* <NavLink to={`${url}/myorder`}>My Order</NavLink><br />
            <Link to={`${url}/review`}>Review</Link><br />
            <Link to={`${url}/pay`}>Pay</Link><br />
            <Link to={`${url}/manageorder`}>ManageAllOrder</Link><br />
            <Link to={`${url}/addproduct`}>Add Product</Link><br />
            <Link to={`${url}/makeadmin`}>Make Admin</Link><br />
            <Link to={`${url}/manageproduct`}>Manage All Products</Link><br />
            <Button onClick={logOut} color="inherit">Logout</Button> */}
            <List sx={{ textAlign: 'left', ml: 2 }}>
                <ListItemIcon>
                    <AccountCircleIcon/>
                </ListItemIcon>
                <ListItemText>{user?.displayName}</ListItemText>
                {
                    admin ? <Box>
                        <NavLink style={{ textDecoration: 'none' }} to={`${url}/manageorder`}>ManageAllOrder</NavLink><br />
                        <NavLink style={{ textDecoration: 'none' }} to={`${url}/addproduct`}>Add Product</NavLink><br />
                        <NavLink style={{ textDecoration: 'none' }} to={`${url}/makeadmin`}>Make Admin</NavLink><br/>
                        <NavLink style={{ textDecoration: 'none' }} to={`${url}/manageproduct`}>Manage All Products</NavLink><br />
                    </Box> : <Box>
                        <NavLink style={{ textDecoration: 'none' }} to={`${url}/myorder`}>My Order</NavLink><br />
                        <NavLink style={{ textDecoration: 'none' }} to={`${url}/review`}>Review</NavLink><br />
                        <NavLink style={{ textDecoration: 'none' }} to={`${url}/pay`}>Pay</NavLink><br />
                    </Box>
                }
                <NavLink style={{ textDecoration: 'none' }} to="/home">Home</NavLink><br />
                <Button onClick={logOut} color="inherit">Logout</Button>
            </List>
            {/* <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List> */}
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
                        Dashboard
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
                {/* <MyOrder></MyOrder>
                <ManageAllOrder></ManageAllOrder> */}
                {/* <AddReview></AddReview> */}
                {/* <AddProduct></AddProduct> */}
                <Switch>
                    <Route path={`${path}/myorder`}>
                        <MyOrder></MyOrder>
                    </Route>
                    <Route path={`${path}/review`}>
                        <AddReview></AddReview>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/manageorder`}>
                        <ManageAllOrder></ManageAllOrder>
                    </Route>
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

export default Dashboard