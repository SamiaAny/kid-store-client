import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../images/New folder/bg.jpg';
import banner1 from '../../../images/New folder/shirota-yuri-p0hDztR46cw-unsplash.jpg';

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img style={{ opacity: '0.7',height:'80vh' }} src={banner} className="d-block w-100" alt="..." />
                        <div className="carousel-caption  d-md-block text-dark">
                            <h2>Best Toy For Your Kid</h2>
                            <p>Always stay here to choose best one for your little one.</p>
                            {/* <Link to="/product"><button className="btn btn-dark">Explore More</button></Link> */}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img style={{ opacity: '0.7',height:'80vh' }} src={banner1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-md-block text-dark">
                            <h2>The Widest Range of Toys</h2>
                            <p>Always try to provide best qualitifull product.</p>
                            {/* <Link to="/product"><button className="btn btn-dark">Explore More</button></Link> */}
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    );
};

export default Banner;