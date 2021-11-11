import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
// import useFirebase from '../../../hooks/useFirebase';
import useAuth from '../../../hooks/useAuth';

const Navmenu = () => {
    const { user,logOut } = useAuth();
    const menubar = {
        color: 'white',
        marginRight: '10px',
        TextDecoderation: 'none',
    };

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Kid Store
                        </Typography>
                        <Box >
                            <NavLink style={menubar} to="/home">Home</NavLink>
                            <NavLink style={menubar} to="/product">Product</NavLink>
                            <NavLink style={menubar} to="/review">Reviews</NavLink>
                            { user?.email ? 
                                <Box>
                                    <NavLink style={menubar} to="/dashboard">Dashboard</NavLink>
                                    <Button style={menubar} onClick={logOut} color="inherit">Logout</Button>
                                </Box>
                            :
                            <Link to="/login"><Button style={menubar} color="inherit">Login</Button></Link>
                            }
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
};

export default Navmenu;