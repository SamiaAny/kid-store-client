import { Container, Grid, TextField, Button, Typography, Box, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// import useFirebase from '../../../hooks/useFirebase';
import login from '../../../images/undraw_Login_re_4vu2.png';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { error, userLogin } = useAuth();
    const history = useHistory();
    const location = useLocation();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...loginData };
        newData[field] = value;
        // console.log(newData);
        setLoginData(newData)
    }

    const handleLogin = e => {
        e.preventDefault();
        userLogin(loginData.email, loginData.password, history, location);
    }

    return (
        <>
            <Header></Header>
            <div>
                <Container>
                    <Grid container spacing={2} sx={{ mt: 8 }}>
                        <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Box>
                                <Typography variant="h5" component="div">
                                    Please Login
                                </Typography>
                                <form onSubmit={handleLogin}>
                                    <TextField sx={{ width: '75%', m: 1 }} name="email" type="email" label="Your email" variant="standard" onBlur={handleOnBlur} />
                                    <TextField sx={{ width: '75%', m: 1 }} name="password" type="password" label="password" variant="standard" onBlur={handleOnBlur} />
                                    <Button sx={{ width: '75%', m: 1 }} type="submit"
                                    style={{backgroundColor: '#800080'}} variant="contained">Login</Button>
                                </form>
                                {error && <Alert severity="error">{error}</Alert>}
                                <NavLink to="/register">New User? create an account</NavLink><br />
                                <NavLink to="/">Back to home</NavLink>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <img src={login} alt="" style={{ width: '100%' }}></img>
                        </Grid>
                    </Grid>
                </Container>
            </div >
            <Footer></Footer>
        </>
    );
};

export default Login;