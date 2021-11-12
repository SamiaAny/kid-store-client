import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import about from '../../../images/about.jpg';

const About = () => {
    return (
        <div>
            <Container>
                <Grid container spacing={2} sx={{ mt: 5 }}>
                    <Grid item xs={12} sm={12} md={6}>
                        <img style={{width:'100%'}} src={about} alt=""></img>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} sx={{mt:5}}>
                        <Box >
                            <Typography variant="h3" sx={{ fontWeight: 400, my: 4 }}>About Us</Typography>
                            <Typography variant="subtitle1" sx={{textAlign:'left'}} gutterBottom component="div">
                                Welcome to our online shop. Kid store always try to provide best qualified product for your kid's. We always try to keep shipping fast.Deliver the product as soon as possible. We start our journey more than 5 years and still now it's running with our cliens satisfaction.Not only maintain quality but also matter fast shipping for our client satisfaction.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div >
    );
};

export default About;