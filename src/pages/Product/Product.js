import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


const Product = (props) => {
    const { prodctName, price, description, img, _id } = props.product;
    return (
        <Grid item xs={4} sm={4} md={4} >
            <Card sx={{ minWidth: 275, textAlign: 'left' }}>
                <CardContent>
                    <CardMedia
                        component="img"
                        height="140"
                        image={img}
                        alt="green iguana"
                    />
                    <Typography variant="h5" component="div">
                        {prodctName}
                    </Typography>
                    <Typography variant="body2">
                        {description}
                    </Typography>
                    <Typography variant="h5" component="div">
                        ${price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/booking/${_id}`}><Button sx={{m:2}} variant="contained">Purchase now</Button></Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product;