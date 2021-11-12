import React from 'react';
import { useHistory } from 'react-router';
import errorimg from '../../images/undraw_Page_not_found_re_e9o6.png';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';
import './NotFound.css';

const NotFound = () => {
    const history = useHistory();
    const handleBack = () => {
        history.push('/');
    }
    return (
        <div>
            <Header></Header>
            <div className="error">
                <div className="error-img">
                    <img src={errorimg} alt="notfound"></img>
                    <button className="error-btn" onClick={handleBack}>Go Back</button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;