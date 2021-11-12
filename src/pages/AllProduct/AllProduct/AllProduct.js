import React from 'react';
import Products from '../../Products/Products';
import Footer from '../../shared/Footer/Footer';
// import Navmenu from '../../shared/Navmenu/Navmenu';
import Header from '../../shared/Header/Header';

const AllProduct = () => {
    return (
        <div>
            {/* <Navmenu></Navmenu> */}
            <Header></Header>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default AllProduct;