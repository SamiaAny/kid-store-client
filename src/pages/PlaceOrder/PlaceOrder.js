import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css';
import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';

const PlaceOrder = () => {
    const { productId } = useParams();
    const [singleProduct, setSingleProduct] = useState({});
    const { user } = useAuth();
    const { register, handleSubmit,reset, formState: { errors } } = useForm({
        defaultValues: {
            productName: '',
            price: ''
        }
    });

    useEffect(() => {
        const url = `https://nameless-basin-78356.herokuapp.com/allproduct/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setSingleProduct(data);
            })
    }, [productId]);

    //for default values setting
    useEffect(() => {
        let defaults = {
            productname: singleProduct?.prodctName,
            price: singleProduct?.price,
            name: user?.displayName,
            email: user?.email
        }
        reset(defaults);
    }, [singleProduct, user, reset]);

    const onSubmit = data => {
        data.status = "pending";
        // console.log(data);
        fetch('https://nameless-basin-78356.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(result => {
            // console.log(result);
            if(result.insertedId) {
                alert('Place your order successfully');
                reset();
            }
        })
    }
    return (
        <div>
            <Header></Header>
            <>
                <Box component="div">
                    <Container>
                        <Grid container spacing={2} sx={{ mt: 4 }}>
                            <Grid item xs={12} sm={12} md={6}>
                                <Card sx={{ minWidth: 275, textAlign: 'left', boxShadow: 0, mt:2 }}>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        style={{ width: '100%', objectFit:'cover' }}
                                        image={singleProduct?.img}
                                        alt=""
                                    />
                                    <CardContent>
                                        <Typography variant="h4" sx={{fontWeight: 500, my:2}} component="div">
                                            {singleProduct?.prodctName}
                                        </Typography>
                                        {singleProduct?.category && 
                                            <Typography variant="h6">
                                              Category:{singleProduct?.category}
                                        </Typography>
                                        }
                                        <Typography variant="body1">
                                            {singleProduct?.description}
                                        </Typography>
                                        <Typography variant="body1">
                                            {singleProduct?.features}
                                        </Typography>
                                        <Typography variant="h5" component="div">
                                           Price: ${singleProduct?.price}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <Typography variant="h5" component="div">
                                    Place This Product
                                </Typography>
                                <form onSubmit={handleSubmit(onSubmit)} className="booking-form">
                                    
                                    <input  {...register("productname")} /><br/>
                                    
                                    <input {...register("price")} /><br/>
                                    
                                    <input {...register("name")} /><br/>
                                    
                                    <input type="email" {...register("email", { required: true })} /><br/>
                                    {errors.exampleRequired && <span>This field is required</span>}
                                    
                                    <input placeholder="phone number" type="number" {...register("phone", { required: true })} /><br/>
                                    {errors.exampleRequired && <span>This field is required</span>}
                                   
                                    <input placeholder="Address" {...register("address", { required: true })} /><br/>

                                    <Button type="submit" sx={{m:2}} color="secondary" variant="outlined">Place Order</Button>
                                </form>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </>
            <Footer></Footer>
        </div>
    );
};

export default PlaceOrder;