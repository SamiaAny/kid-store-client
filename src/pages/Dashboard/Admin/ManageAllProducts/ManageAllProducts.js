import React, {useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import ManageProduct from '../ManageProduct/ManageProduct';



const ManageAllProducts = () => {
    const [allProducts, setAllPorducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allproduct')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllPorducts(data);
            });
    }, [allProducts])
    return (
        <Container>
            <Typography variant="h3" sx={{ fontWeight: 300, my: 3 }} component="div">
                Manage All Products
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        allProducts.map(pd => <ManageProduct key={pd._id}
                            allProducts= {allProducts}
                            setAllPorducts = {setAllPorducts}
                            singleproduct={pd}></ManageProduct>)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default ManageAllProducts;