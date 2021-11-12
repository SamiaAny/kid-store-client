import { Container, Grid, Typography, TextField, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import contactimg from '../../../images/undraw_Traveling_re_weve.png';

const Contact = () => {
    return (
        <div style={{marginTop:'100px',marginBottom:'50px'}}>
            <Container sx={{ my: 8 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Box>
                            <Typography variant="h3" sx={{ fontWeight: 400, my: 4 }}>Get in Touch</Typography>
                            <TextField fullWidth size="small" margin="normal" id="outlined-basic" label="Name" variant="outlined" />
                            <TextField fullWidth size="small" margin="normal" id="outlined-basic" label="Email" variant="outlined" />
                            <TextField
                                id="outlined-multiline-static"
                                label="Message here"
                                multiline
                                rows={4}
                                margin="normal"
                                fullWidth
                            />
                            <Button sx={{ width: 1, mt: 1,backgroundColor:'purple' }} variant="contained">send message</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <img style={{ width: '100%' }} src={contactimg} alt=""></img>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Contact;