import { Container, Grid, Box, Typography, Button } from '@mui/material';
import React from 'react';
import {NavLink} from 'react-router-dom';
import kids from '../../../images/kids-png-23971.png'
import topbanner from '../../../images/topbanner.jpg'

const TopBanner = () => {
    const bannerBg = {
        background: `url(${topbanner})`,
        backgroundSize: 'cover',
        marginTop: '20px'
    }
    return (
        <div style={bannerBg}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sx={{display:'flex',alignItems:'center',height:500}}>
                        <Box>
                            <Typography variant="h3" sx={{fontWeight:500}}>
                                The Widest <br /> Range Of Toys
                            </Typography>
                            <Typography variant="h6" sx={{my:2}}>
                                Always try to provide best toys for your little one
                            </Typography>
                            <NavLink style={{textDecoration:'none'}} to="/product"><Button style={{backgroundColor:'#800080'}} variant="contained">Explore More...</Button></NavLink>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{width:'100%'}} src={kids} alt="" />
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
};

export default TopBanner;