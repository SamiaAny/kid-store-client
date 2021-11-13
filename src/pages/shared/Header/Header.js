import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';


const Header = () => {
    const { user, logOut } = useAuth();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const menubar = {
        color: 'white',
        marginRight: '10px',
        TextDecoderation: 'none',
    };

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);



    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };


    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <NavLink style={{textDecoration:'none', color: 'grey'}} to="/home"><MenuItem>Home</MenuItem></NavLink>
            <NavLink style={{textDecoration:'none', color: 'grey'}} to="/product"><MenuItem>Explore Product</MenuItem></NavLink>
            <NavLink style={{textDecoration:'none', color: 'grey'}} to="/contact"><MenuItem>Contact Us</MenuItem></NavLink>
            <NavLink style={{textDecoration:'none', color: 'grey'}} to="/faq"><MenuItem>FAQ</MenuItem></NavLink>
            {user?.email ?
                <Box>
                    <NavLink style={{textDecoration:'none', color: 'grey'}} to="/dashboard"><MenuItem>Dashboard</MenuItem></NavLink>
                    <MenuItem>
                        <AccountCircle />
                        {user?.displayName}
                    </MenuItem>
                    <MenuItem><Button onClick={logOut} color="inherit">Logout</Button></MenuItem>
                </Box>
                :
                <NavLink style={{textDecoration:'none', color: 'grey'}}  to="/login"><MenuItem><Button color="secondary">Login</Button></MenuItem></NavLink>
            }
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{backgroundColor:'purple'}}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ml:4}}
                        // sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        Kid Store
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

                        <NavLink style={{ textDecoration: 'none', color: 'white', marginRight: '20px', marginTop: '4px' }} to="/home">Home</NavLink>
                        <NavLink style={{ textDecoration: 'none', color: 'white', marginRight: '20px', marginTop: '4px' }} to="/product">Explore Product</NavLink>
                        <NavLink style={{ textDecoration: 'none', color: 'white', marginRight: '20px', marginTop: '4px' }} to="/contact">Contact Us</NavLink>
                        <NavLink style={{ textDecoration: 'none', color: 'white', marginRight: '20px', marginTop: '4px' }} to="/faq">FAQ</NavLink>

                        {user?.email ?
                            <>
                                <NavLink style={{ textDecoration: 'none', color: 'white', marginRight: '20px', marginTop: '4px' }} to="/dashboard">Dashboard</NavLink>
                                <Typography
                                    variant="h6" sx={{ mr: 2 }}
                                >
                                    {user?.displayName}
                                </Typography>
                                <Button style={menubar} onClick={logOut} color="inherit">Logout</Button>
                            </>
                            :
                            <NavLink style={{textDecoration:'none'}} to="/login"><Button style={{ color: 'white', marginRight: '20px' }} color="inherit">Login</Button></NavLink>
                        }

                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            {/* <MoreIcon /> */}
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {/* {renderMenu} */}
        </Box>
    );
};

export default Header;