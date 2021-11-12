import { Container, Grid, TextField, Button,Typography,Box, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink,useHistory } from 'react-router-dom';
import login from '../../../images/undraw_Login_re_4vu2.png';
// import useFirebase from '../../../hooks/useFirebase';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const { user, error, registerUser } = useAuth();
    const history = useHistory();


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...registerData };
        newData[field] = value;
        console.log(newData);
        setRegisterData(newData)
    }

    //user registration
    const handleOnRegister = e => {
        e.preventDefault();
        console.log(registerData);
        registerUser(registerData.name,registerData.email,registerData.password,history);
    }
    return (
        <div>
            <div>
            <Container>
                <Grid container spacing={2} sx={{mt:8}}>
                    <Grid item xs={12} sm={12} md={6} sx={{ display:'flex',justifyContent: 'center', alignItems: 'center' }}>
                        <Box>
                        <Typography variant="h5" component="div">
                            Create a new Acount
                        </Typography>
                        <form onSubmit={handleOnRegister}>
                            <TextField sx={{ width: '75%', m: 1 }} name="name"  label="Your Name" variant="standard" onBlur={handleOnBlur} />
                            <TextField sx={{ width: '75%', m: 1 }} name="email" type="email" label="Your email" variant="standard" onBlur={handleOnBlur} />
                            <TextField sx={{ width: '75%', m: 1 }} name="password" type="password" label="password" variant="standard" onBlur={handleOnBlur} />
                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                        </form>

                        {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                        {error && <Alert severity="error">{error}</Alert>}


                        <NavLink to="/login">Already have an account? login</NavLink><br/>
                        <NavLink to="/">Back to home</NavLink>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <img src={login} alt="" style={{ width: '100%' }}></img>
                    </Grid>
                </Grid>
            </Container>
        </div >
        </div>
    );
};

export default Register;