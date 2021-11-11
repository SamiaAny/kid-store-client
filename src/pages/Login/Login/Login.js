import { Container, Grid, TextField, Button,Typography,Box } from '@mui/material';
import React, { useState } from 'react';
import { NavLink,useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// import useFirebase from '../../../hooks/useFirebase';
import login from '../../../images/undraw_Login_re_4vu2.png';

const Login = () => {
    const [registerData,setRegisterData] = useState({});
    const { userLogin } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...registerData };
        newData[field] = value;
        console.log(newData);
        setRegisterData(newData)
    }

    const handleLogin = e => {
        e.preventDefault();
        userLogin(registerData.email,registerData.password,history,location);
    }
    return (
        <div>
            <Container>
                <Grid container spacing={2} sx={{mt:8}}>
                    <Grid item xs={12} sm={12} md={6} sx={{ display:'flex',justifyContent: 'center', alignItems: 'center' }}>
                        <Box>
                        <Typography variant="h5" component="div">
                            Please Login
                        </Typography>
                        <form onSubmit={handleLogin}>
                            <TextField sx={{ width: '75%', m: 1 }} name="email" type="email" label="Your email" variant="standard" onBlur={handleOnBlur} />
                            <TextField sx={{ width: '75%', m: 1 }} name="password" type="password" label="password" variant="standard" onBlur={handleOnBlur} />
                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                        </form>
                        <NavLink to="/register">New User? create an account</NavLink><br/>
                        <NavLink to="/">Back to home</NavLink>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <img src={login} alt="" style={{ width: '100%' }}></img>
                    </Grid>
                </Grid>
            </Container>
        </div >
    );
};

export default Login;