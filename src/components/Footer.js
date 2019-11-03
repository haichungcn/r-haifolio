import React from 'react';

export default function Footer() {
    return (
        <footer className="row container-fluid d-flex justify-content-center m-0 pt-3">
            <div className="container-fluid pt-5 mb-5 footer pl-4 pr-5">
                <div className="row mb-3">
                    <div className="col-12 col-sm-6 col-md-3 col-lg-3 d-fex justify-content-center align-items-center px-5">
                        <h2 className='Haifolio text-center' data-text="Haifolio">Haifolio</h2>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                        <h5 className="footer-h5">My Links</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="/" onClick={e => window.scrollTo(0,0)}>Home</a></li>
                            <li><a className="text-muted" href="#about">About me</a></li>
                            <li><a className="text-muted" href="#works">Works</a></li>
                            <li><a className="text-muted" href="#contact">Contact</a></li>
                            <li><a className="text-muted" href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3 col-lg-2">
                        <h5 className="footer-h5">Support</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#">Shipping</a></li>
                            <li>
                                <a className="text-muted" href="#">International Shipping</a>
                            </li>
                            <li><a className="text-muted" href="#">Return Policy</a></li>
                            <li><a className="text-muted" href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3 col-lg-2">
                        <h5 className="footer-h5">Useful Links</h5>
                        <ul className="list-unstyled text-small">
                            <li><a className="text-muted" href="#">Cool stuff</a></li>
                            <li><a className="text-muted" href="#">Random feature</a></li>
                            <li><a className="text-muted" href="#">Team feature</a></li>
                            <li><a className="text-muted" href="#">Another one</a></li>
                            <li><a className="text-muted" href="#">Last time</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-sm-6 col-md-6 col-lg-3 social-af">
                        <div className="row d-flex justify-content-lg-end justify-content-md-around ">
                            <a className="social-btn" href="https://www.facebook.com/haichungvisual">
                                <i className="fab fa-facebook-square fa-3x" aria-hidden="true"></i>
                            </a>
                            <a className="social-btn" href="https://www.github.com/haichungcn">
                                <i className="fab fa-github-square fa-3x ml-md-3" aria-hidden="true"></i>
                            </a>
                            <a className="social-btn" href="https://www.linkedin.com/in/hai-chung-77a08773/">
                                <i className="fab fa-linkedin fa-3x ml-md-3" aria-hidden="true"></i>
                            </a>
                        </div>
                        <div className="row d-flex justify-content-lg-end justify-content-md-around mt-4">
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-11 col-md-5 col-lg-4 text-muted">
                        <p className="container-fluid text-left pl-0">
                            @ 2018-2019 Hai Chung.
                                </p>
                    </div>
                    <div className="col-1 col-sm-3 col-md-3 col-lg-5"></div>
                    <div className="col-12 col-md-4 col-lg-3 text-muted text-md-right text-sm-center">
                        <ul className="list-unstyled list-inline d-flex flex-nowrap d-flex justify-content-md-end">
                            <li className="list-inline-item mr-lg-5 mr-md-3 mr-sm-2">
                                <a className="text-muted" href="#">Privacy</a>
                            </li>
                            <li className="list-inline-item mr-lg-5 mr-md-3 mr-sm-2">
                                <a className="text-muted" href="#">Terms</a>
                            </li>
                            <li className="list-inline-item mr-lg-1 mr-md-auto">
                                <a className="text-muted" href="#">Support</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
