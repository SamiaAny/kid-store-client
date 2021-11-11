import React, {useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Product from '../../Product/Product';

const LimitProduct = () => {
    const [products,setPorducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/allproduct')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPorducts(data);
            });
    },[]);
    const topProduct = products.slice(0,6);
    return (
        <div>
            <Container>
            <Typography variant="h3" sx={{fontWeight: 400, my:4}} component="div">
                Products
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        topProduct.map(pd => <Product key={pd._id} product={pd}></Product>)
                    }
                </Grid>
            </Box>
        </Container>
        </div>
    );
};

export default LimitProduct;