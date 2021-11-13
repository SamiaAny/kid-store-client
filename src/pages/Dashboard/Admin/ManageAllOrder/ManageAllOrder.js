import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './ManageAllOrder.css';

// import useAuth from '../../../hooks/useAuth';
import { Button, Typography } from '@mui/material';

const ManageAllOrder = () => {
    const [allOrder, setAllOrder] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch('https://nameless-basin-78356.herokuapp.com/allorder')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setAllOrder(data);
            })
    }, [control]);

    const handleUpdateOrder = id => {
        const url = `https://nameless-basin-78356.herokuapp.com/allorder/${id}`;
        fetch(url, {
            method: 'PUT'
        }).then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
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
            fetch(`https://nameless-basin-78356.herokuapp.com/allorder/${id}`, {
                method: 'DELETE'
            }).then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        alert('delete successfully');
                        //manually
                        const remaining = allOrder.filter(item => item._id !== id);
                        setAllOrder(remaining);
                    }
                })
        }
    }
    return (
        <Box component="div">
            <Typography sx={{ my: 2 }} variant="h5" component="div">
                Manage All Order
            </Typography>
            <Box component="div" sx={{ mx: 4 }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 400 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Email</TableCell>
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
                                    <TableCell align="right">{row?.email}</TableCell>
                                    <TableCell align="right">{row?.address}</TableCell>
                                    <TableCell align="right">{row?.phone}</TableCell>
                                    <TableCell align="right">{row?.productname}</TableCell>
                                    <TableCell align="right">${row?.price}</TableCell>
                                    <TableCell align="right">{row?.status}</TableCell>
                                    <TableCell align="right"><Button onClick={() => { handleUpdateOrder(row?._id) }} variant="outlined" size="small" sx={{ mr: { lg: 2 } }}>
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
            </Box>
        </Box>
    );
};

export default ManageAllOrder;