import React from 'react';
// import Products from '../../Products/Products';
import Navmenu from '../../shared/Navmenu/Navmenu';
import Banner from '../Banner/Banner';
import Reviews from '../../Reviews/Reviews';
import Footer from '../../shared/Footer/Footer';
import LimitProduct from '../LimitProduct/LimitProduct';
import Header from '../../shared/Header/Header';

const Home = () => {
    return (
        <div>
            {/* <Navmenu></Navmenu> */}
            <Header></Header>
            <Banner></Banner>
            <LimitProduct></LimitProduct>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;