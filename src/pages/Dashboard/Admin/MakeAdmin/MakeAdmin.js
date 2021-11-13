import { Button,Typography } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    
    const onSubmit = data => {
        // console.log(data);
        fetch('https://nameless-basin-78356.herokuapp.com/users/admin',{
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        }).then(res=>res.json())
            .then(result => {
                // console.log(result);
                if(result.modifiedCount>0) {
                    alert('successfully make admin');
                    reset();
                }
            })
    }
    return (
        <div>
            <Typography variant="h4" component="div" sx={{my:2,fontWeight: 500}}>
                Make Admin
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} className='review-form'>
                <input placeholder="email" style={{padding:'5px',width:'50%'}} type="email" {...register("email", { required: true })} /><br/>
                {errors.exampleRequired && <span>This field is required</span>}
                <Button type="submit" color="secondary" variant="outlined">make admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;