import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

// import useAuth from '../../../hooks/useAuth';
import { Button, Grid, Typography } from '@mui/material';

const ManageAllOrder = () => {
    const [allOrder, setAllOrder] = useState([]);
    const [control,setControl] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/allorder')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setAllOrder(data);
            })
    }, [control]);

    const handleUpdateOrder = id => {
        const url = `http://localhost:5000/allorder/${id}`;
        fetch(url, {
            method:'PUT'
        }).then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount>0) {
                setControl(!control);
            }
            else {
                setControl(false);
            }
        })
    }

    //for delete process
    const handleDeleteOrder = (id) => {
        const proceed = window.confirm('Are you sure to delete order?');
        if (proceed) {
            fetch(`http://localhost:5000/allorder/${id}`, {
                method: 'DELETE'
            }).then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if(data.deletedCount > 0) {
                        alert('delete successfully');
                        //manually
                        const remaining = allOrder.filter(item => item._id!== id);
                        setAllOrder(remaining);
                    }
                })
        }
    }
    return (
        <Box component="div">
            <Typography sx={{ mb: 2 }} variant="h5" component="div">
                Manage All Order
            </Typography>
            <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                <Grid item xs={12} sm={12} md={12}>
                    <TableContainer component={Paper} >
                        <Table sx={{ minWidth:650}} aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="right">Address</TableCell>
                                    <TableCell align="right">Phone</TableCell>
                                    <TableCell align="right">Product</TableCell>
                                    <TableCell align="right">Price</TableCell>
                                    <TableCell align="right">Status</TableCell>
                                    <TableCell align="right">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {allOrder?.map((row) => (
                                    <TableRow
                                        key={row._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row?.name}
                                        </TableCell>
                                        <TableCell align="right">{row?.address}</TableCell>
                                        <TableCell align="right">{row?.phone}</TableCell>
                                        <TableCell align="right">{row?.productname}</TableCell>
                                        <TableCell align="right">${row?.price}</TableCell>
                                        <TableCell align="right">{row?.status}</TableCell>
                                        <TableCell align="right"><Button onClick={() => { handleUpdateOrder(row?._id) }} variant="outlined" size="small">
                                            Update
                                        </Button>
                                            <Button onClick={() => { handleDeleteOrder(row?._id) }} variant="outlined" color="error" size="small">
                                                Cancel
                                            </Button>
                                        </TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ManageAllOrder;