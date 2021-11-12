import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Typography from '@mui/material/Typography';
import ManageAllOrder from '../Admin/ManageAllOrder/ManageAllOrder';
import MyOrder from '../MyOrder/MyOrder';

const DashboardHome = () => {
    const { admin,user } = useAuth();
    return (
        <div>
            <Typography variant="h4" sx={{mt:8}} component="div">
                        Welcome to Kid Store Dashboard<br/>
                        {user?.email}
            </Typography>
            {/* {admin ? 
            <ManageAllOrder></ManageAllOrder> :
            <MyOrder></MyOrder>} */}
        </div>
    );
};

export default DashboardHome;