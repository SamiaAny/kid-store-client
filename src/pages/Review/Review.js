import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
// import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const Review = (props) => {
    const { name, comment, ratings } = props.review;
    return (
        <Grid item xs={4} sm={4} md={4} >
            <Paper elevation={3} sx={{p:4}} style={{height:250}}>
                <Typography variant="caption" display="block" gutterBottom>
                    {comment}
                </Typography>
                <Typography variant="h6" gutterBottom component="div">
                    {name}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    Ratings:{ratings}
                </Typography>
                <Rating name="read-only" value={parseInt(ratings)} readOnly />
            </Paper>
        </Grid>
    );
};

export default Review;