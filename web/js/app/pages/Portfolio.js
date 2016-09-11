import React from 'react';

class Portfolio extends React.Component {

    render() {
        return (
            <div>
                <header>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <img className="img-responsive" src="img/profile.png" alt="" />
                                    <div className="intro-text">
                                        <span className="name">awesome goReactApi</span>
                                        <hr className="star-light" />
                                            <span className="skills">Potfolio Project - React SPA - goReactApi</span>
                                    </div>
                            </div>
                        </div>
                    </div>
                </header>
                <section id="portfolio">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2>Portfolio</h2>
                                <hr className="star-primary" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4 portfolio-item">
                                <a href="#" className="portfolio-link" data-toggle="modal">
                                    <div className="caption">
                                        <div className="caption-content">
                                            <i className="fa fa-search-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img src="img/portfolio/cabin.png" className="img-responsive" alt="" />
                                </a>
                            </div>
                            <div className="col-sm-4 portfolio-item">
                                <a href="#" className="portfolio-link" data-toggle="modal">
                                    <div className="caption">
                                        <div className="caption-content">
                                            <i className="fa fa-search-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img src="img/portfolio/cake.png" className="img-responsive" alt="" />
                                </a>
                            </div>
                            <div className="col-sm-4 portfolio-item">
                                <a href="#" className="portfolio-link" data-toggle="modal">
                                    <div className="caption">
                                        <div className="caption-content">
                                            <i className="fa fa-search-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img src="img/portfolio/circus.png" className="img-responsive" alt="" />
                                </a>
                            </div>
                            <div className="col-sm-4 portfolio-item">
                                <a href="#" className="portfolio-link" data-toggle="modal">
                                    <div className="caption">
                                        <div className="caption-content">
                                            <i className="fa fa-search-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img src="img/portfolio/game.png" className="img-responsive" alt="" />
                                </a>
                            </div>
                            <div className="col-sm-4 portfolio-item">
                                <a href="#" className="portfolio-link" data-toggle="modal">
                                    <div className="caption">
                                        <div className="caption-content">
                                            <i className="fa fa-search-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img src="img/portfolio/safe.png" className="img-responsive" alt="" />
                                </a>
                            </div>
                            <div className="col-sm-4 portfolio-item">
                                <a href="#" className="portfolio-link" data-toggle="modal">
                                    <div className="caption">
                                        <div className="caption-content">
                                            <i className="fa fa-search-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <img src="img/portfolio/submarine.png" className="img-responsive" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Portfolio;
