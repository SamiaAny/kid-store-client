import { Container, Grid, Typography, List, ListItemText} from '@mui/material';
import React from 'react';
import PhoneAndroidSharpIcon from '@mui/icons-material/PhoneAndroidSharp';
import DraftsIcon from '@mui/icons-material/Drafts';

const Footer = () => {
    const footer = {
        backgroundColor: 'black',
        color: 'white',
        heigt: '200px',
        marginTop: '100px',
        padding: '50px 10px'
    }
    return (
        <footer style={footer}>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={4} sx={{ textAlign: 'left' }}>
                        <Typography variant="h4" sx={{ fontWeight: 500 }}>Kid Store</Typography>
                        <Typography variant="body1">Always choose best toy for your child.Provide best product for your kids. For any kind of query,please let us know without any delay.</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <List>
                            <ListItemText>Home</ListItemText>
                            <ListItemText>Products</ListItemText>
                            <ListItemText>About</ListItemText>
                            <ListItemText>Contact</ListItemText>
                            <ListItemText>Login</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <List>
                            <ListItemText>Address:</ListItemText>
                            <ListItemText>39 Union Square Newyork,Ny 1003,USA</ListItemText>
                            <ListItemText><PhoneAndroidSharpIcon/>+86 000 999</ListItemText>
                            <ListItemText><DraftsIcon/>info.kidstory.com</ListItemText>
                            
                        </List>
                    </Grid>
                </Grid>
                <Typography sx={{textAlign:'center'}} variant="caption">Copyright &copy; All rights reserved by Kid Store</Typography>
            </Container>
        </footer>
    );
};

export default Footer;