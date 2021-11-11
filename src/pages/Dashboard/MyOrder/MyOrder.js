import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../hooks/useAuth';
import { Button, Typography } from '@mui/material';


const MyOrder = () => {
    const { user } = useAuth();
    const [orderInfo, setorderInfo] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/allorder/${user?.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setorderInfo(data);
            })
    }, [user?.email]);

    //for delete order
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
                        const remaining = orderInfo.filter(item => item._id!== id);
                        setorderInfo(remaining);
                    }
                })
        }


    }
    return (
        <>
            <Typography sx={{ mb: 2 }} variant="h5" component="div">
                My Order
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                        {orderInfo?.map((row) => (
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
                                <TableCell align="right"><Button onClick={() => { handleDeleteOrder(row?._id) }} variant="outlined" color="error" size="small">
                                    Cancel
                                </Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default MyOrder;