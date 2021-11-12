import React from 'react';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        fetch('https://nameless-basin-78356.herokuapp.com/allproduct',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(result => {
            console.log(result);
            if(result.insertedId) {
                alert('added successfully');
                reset();
            }
        })
    }
    return (
        <div>
            <Typography variant="h5" component="div" sx={{ mb: 2 }}>
                Add New Product
            </Typography>
            <Box>
                <form onSubmit={handleSubmit(onSubmit)} className="review-form">

                    <input placeholder="Product name" {...register("prodctName", { required: true })} /><br />
                    {errors.name && <span>This field is required</span>}

                    <textarea placeholder="Description.." {...register("description", { required: true })} /><br />
                    {errors.description && <span>This field is required</span>}

                    <input placeholder="Price" type="number" {...register("price", { required: true })} />
                    {errors.price && <span>This field is required</span>}<br />

                    <input placeholder="image url" {...register("img", { required: true })} />
                    {errors.img && <span>This field is required</span>}<br />

                    {/* <input type="submit" /> */}
                    <Button type="submit" sx={{ m: 2 }} color="secondary" variant="contained">Add Product</Button>
                </form>
            </Box>
        </div>
    );
};

export default AddProduct;