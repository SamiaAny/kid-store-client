import React, {useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Product from '../Product/Product';



// const products = [
//     {
//         prodctName: "Funscool Teddy",
//         price: 100,
//         description: "lorem ipose hgjghguh uyuiyuiy uyuyiy",
//         img: puzzle
//     },
//     {
//         prodctName: "Baby Play Sets",
//         price: 100,
//         description: "lorem ipose hgjghguh uyuiyuiy uyuyiy",
//         img: puzzle
//     },
//     {
//         prodctName: "Toys Box fro Babys",
//         price: 100,
//         description: "lorem ipose hgjghguh uyuiyuiy uyuyiy",
//         img: puzzle
//     },
//     {
//         prodctName: "Toys Zip Car",
//         price: 100,
//         description: "lorem ipose hgjghguh uyuiyuiy uyuyiy",
//         img: puzzle
//     },
//     {
//         prodctName: "Mini Teddy",
//         price: 100,
//         description: "lorem ipose hgjghguh uyuiyuiy uyuyiy",
//         img: puzzle
//     },
//     {
//         prodctName: "Puzzle Box",
//         price: 100,
//         description: "lorem ipose hgjghguh uyuiyuiy uyuyiy",
//         img: puzzle
//     }
// ]


const Products = () => {
    const [allProducts,setAllPorducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/allproduct')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllPorducts(data);
            });
    },[])
    return (
        <div>
            <Container>
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