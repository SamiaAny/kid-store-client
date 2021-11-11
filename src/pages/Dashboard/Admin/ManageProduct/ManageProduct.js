import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const ManageProduct = (props) => {
    const { allProducts, setAllProducts} = props;
    const { prodctName, price, description, img, _id } = props.singleproduct;

    const handleDeleteProduct = id => {
        const url = `http://localhost:5000/allproduct/${id}`;
        fetch(url,{
            method: 'DELETE'
        }).then(res => res.json())
        .then(data => {
            console.log(data);
            const proceed = window.confirm('Are you sure to delete this product?');
            if(proceed) {
                if(data.modifiedCount > 0) {
                    alert('successfully deleted');
                    const remain = allProducts.filter(pd => pd._id !== id);
                    setAllProducts(remain);
                }
            }
        })
    }
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
                    <Button onClick={()=>handleDeleteProduct(_id)} sx={{ m: 2 }} variant="contained">delete</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default ManageProduct;