import React from 'react';
import Reviews from '../../Reviews/Reviews';
import Footer from '../../shared/Footer/Footer';
import LimitProduct from '../LimitProduct/LimitProduct';
import Header from '../../shared/Header/Header';
import About from '../About/About';
import Contact from '../Contact/Contact';
import TopBanner from '../../shared/TopBanner/TopBanner';
import Faq from '../../Faq/Faq';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <TopBanner></TopBanner>
            <About></About>
            <LimitProduct></LimitProduct>
            <Contact></Contact>
            <Reviews></Reviews>
            <Faq></Faq>
            <Footer></Footer>
        </div>
    );
};

export default Home;