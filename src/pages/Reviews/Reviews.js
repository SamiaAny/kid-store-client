import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Review from '../Review/Review';



const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])
    return (
        <div>
            <Container>
                <Typography variant="h3" sx={{ fontWeight: 400, my: 4 }} component="div">
                    What Our Client say
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            reviews.map(review=> <Review key={review._id} review={review}></Review>)
                        }
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default Reviews;