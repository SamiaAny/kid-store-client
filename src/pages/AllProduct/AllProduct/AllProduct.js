import React from 'react';
import Products from '../../Products/Products';
import Footer from '../../shared/Footer/Footer';
import Navmenu from '../../shared/Navmenu/Navmenu';

const AllProduct = () => {
    return (
        <div>
            <Navmenu></Navmenu>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default AllProduct;