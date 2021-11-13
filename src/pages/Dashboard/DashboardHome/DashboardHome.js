import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Typography from '@mui/material/Typography';
import ManageAllOrder from '../Admin/ManageAllOrder/ManageAllOrder';
import MyOrder from '../MyOrder/MyOrder';
import { Divider } from '@mui/material';

const DashboardHome = () => {
    const { admin,user } = useAuth();
    return (
        <div>
            <Typography variant="h6" sx={{my:2}} component="div">
                        Welcome to Kid Store Dashboard<br/>
                        {user?.email}
            </Typography>
            <Divider/>
            {admin ? 
            <ManageAllOrder></ManageAllOrder> :
            <MyOrder></MyOrder>}
        </div>
    );
};

export default DashboardHome;