import React, {useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography, CircularProgress } from '@mui/material';
import Product from '../Product/Product';


const Products = () => {
    const [allProducts,setAllPorducts] = useState([]);
    const [loading,setLoading] = useState(null);

    useEffect(()=>{
        setLoading(true);
        fetch('https://nameless-basin-78356.herokuapp.com/allproduct')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setAllPorducts(data);
                setLoading(false);
            });
    },[]);
    
    return (
        <div>
            <Container>
            {loading && <CircularProgress />}
            <Typography variant="h3" sx={{fontWeight: 400, my:4}} component="div">
                Products
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        allProducts.map(pd => <Product key={pd._id} product={pd}></Product>)
                    }
                </Grid>
            </Box>
        </Container>
        </div>
    );
};

export default Products;