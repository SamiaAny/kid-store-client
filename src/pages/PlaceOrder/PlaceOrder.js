import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import Navmenu from '../shared/Navmenu/Navmenu';
import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css';

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
        const url = `http://localhost:5000/allproduct/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSingleProduct(data);
            })
    }, []);

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
        console.log(data);
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(result => {
            console.log(result);
            if(result.insertedId) {
                alert('Place your order successfully');
                reset();
            }
        })
    }
    return (
        <div>
            <Navmenu></Navmenu>
            <>
                <Box component="div">
                    <Container>
                        <Grid container spacing={2} sx={{ mt: 4 }}>
                            <Grid item xs={12} sm={12} md={6}>
                                <Card sx={{ minWidth: 275, textAlign: 'left', boxShadow: 0 }}>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        style={{ width: '100%' }}
                                        image={singleProduct?.img}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography variant="h5" component="div">
                                            {singleProduct?.prodctName}
                                        </Typography>
                                        <Typography variant="body2">
                                            {singleProduct?.description}
                                        </Typography>
                                        <Typography variant="h5" component="div">
                                            ${singleProduct?.price}
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

                                    {/* <input type="submit" /> */}
                                    <Button type="submit" sx={{m:2}} variant="contained">Place Order</Button>
                                </form>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </>
        </div>
    );
};

export default PlaceOrder;