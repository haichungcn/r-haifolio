import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import { Row, Col, Figure } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

// function useInterval(callback, delay) {
//     const savedCallback = useRef();

//     // Remember the latest callback.
//     useEffect(() => {
//         savedCallback.current = callback;
//     }, [callback]);

//     // Set up the interval.
//     useEffect(() => {
//         function tick() {
//             savedCallback.current();
//         }
//         if (delay !== null) {
//             let id = setInterval(tick, delay);
//             return () => clearInterval(id);
//         }
//     }, [delay]);
// }

export default function HomePage(props) {
    return (
        <div id="home" className="homePageSection">
            <header title='top'>
                <div className="parallax-wrapper background">
                    <Header
                        position={props.position}
                    />
                </div>
            </header>
            <section title='sec1' className="sec1" id="about">
                <Row className="px-5 w-100">
                    <div className="glitch" data-text="ABOUT HAI">ABOUT HAI</div>
                </Row>
                <Row className="px-5 w-100">
                    <Col lg={4}>
                        <Figure.Image
                            alt="Haifly"
                            src={require(`../haivatar1.png`)}
                        />
                    </Col>
                    <Col lg={8}>
                        <p>Hai's a freelance Fullstack Web Developer and Designer based in Ho Chi Minh City, Vietnam.</p>
                        <p>Starting to code seriously from 2019, He has worked on many projects from mini games, simple to-do app to full complex React web apps.
                            Hai has a great passion in design, coding and technology that always pushes him to keep learning and discovering new techniques. He believes in creating products that inspired other people.</p>
                        <p>Hai loves to work with people from around the world who are passionate and fun.</p>
                    </Col>
                </Row>
                <Row className="px-5 w-100 mt-5 pt-5">
                    <Col lg={4} className="vertical-align-center text-left hisskills">
                        <div className="glitch smallHeading" data-text="HIS SKILLS:">HIS SKILLS:</div>
                    </Col>
                    <Col lg={8}>
                        <Row>
                            <Col lg={4} sm={6} className="text-right">
                                <Figure.Image
                                    className="mt-3"
                                    alt="html5"
                                    width={100}
                                    src={require(`../html-5.png`)}
                                />
                            </Col>
                            <Col lg={8} sm={6} className="text-left vertical-align-center">
                                <h1 className="magenta text-shadow-light">HTML 5</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={8} sm={6} className="text-right vertical-align-center justify-content-end">
                                <h1 className="cyan  text-shadow-light-magenta">CSS 3</h1>
                            </Col>
                            <Col lg={4} sm={6} className="text-left">
                                <Figure.Image
                                    className="mt-3"
                                    alt="css3"
                                    width={100}
                                    src={require(`../css-3.png`)}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4} sm={6} className="text-right">
                                <Figure.Image
                                    className="mt-3"
                                    alt="javascript"
                                    width={100}
                                    src={require(`../js.png`)}
                                />
                            </Col>
                            <Col lg={8} sm={6} className="text-left vertical-align-center">
                                <h1 className="magenta text-shadow-light">Javascript ES6</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={8} sm={6} className="text-right vertical-align-center justify-content-end text-shadow-light-magenta">
                                <h1 className="cyan text-shadow-light-magenta">ReactJs</h1>
                            </Col>
                            <Col lg={4} sm={6} className="text-left">
                                <Figure.Image
                                    className="mt-3"
                                    alt="react"
                                    width={150}
                                    src={require(`../react.png`)}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4} sm={6} className="text-right">
                                <Figure.Image
                                    className="mt-3"
                                    alt="redux"
                                    width={130}
                                    src={require(`../redux.png`)}
                                />
                            </Col>
                            <Col lg={8} sm={6} className="text-left vertical-align-center">
                                <h1 className="magenta text-shadow-light">Redux</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={8} sm={6} className="text-right vertical-align-center justify-content-end text-shadow-light-magenta">
                                <h1 className="cyan text-shadow-light-magenta">Python Backend</h1>
                            </Col>
                            <Col lg={4} sm={6} className="text-left">
                                <Figure.Image
                                    className="mt-3"
                                    alt="python"
                                    width={120}
                                    src={require(`../python.png`)}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </section>

            <section className="parallax-wrapper sec2 mt-2" id="works">
                <Row className="w-100 mb-5">
                    <div className="glitch" data-text="HAI'S WORKS">HAI'S WORKS</div>
                </Row>
                <Row className="w-100">
                    <Col lg={4} sm={6}>
                        <a className="thumnail" href="https://brave-knuth-eb47ee.netlify.com/" _target="blank">
                        <Figure.Image
                            className="mt-3 border-shadow"
                            alt="htmlcanvasgame"
                            width={400}
                            src={require(`../game1.png`)}
                        /></a>
                        <h2 className="magenta text-shadow-light">HTML5 Canvas Game</h2>
                    </Col>
                    <Col lg={4} sm={6}>
                        <h2 className="magenta text-shadow-light">Number Guessing Game</h2>
                        <a className="thumnail" href="https://github.com/haichungcn/number-guessing-game" _target="blank">
                        <Figure.Image
                            className="mt-3 border-shadow"
                            alt="numberguessinggame"
                            width={400}
                            src={require(`../game2.png`)}
                        /></a>
                    </Col>
                    <Col lg={4} sm={6}>
                        <a className="thumnail" href="https://romantic-hawking-b197a1.netlify.com/" _target="blank">
                        <Figure.Image
                            className="mt-3 border-shadow"
                            alt="reacttictactoe"
                            width={400}
                            src={require(`../game3.png`)}
                        /></a>
                        <h2 className="magenta text-shadow-light">React Tic-Tac-Toe with Facebook login</h2>
                    </Col>
                </Row>
                <Row className="w-100 mt-5">
                    <Col lg={4} sm={6}>
                        <h2 className="magenta text-shadow-light">Currency Converter using API</h2>
                        <a className="thumnail" href="https://github.com/haichungcn/currencyconverter" _target="blank">
                            <Figure.Image
                                className="mt-3 border-shadow"
                                alt="currencyconverter"
                                width={400}
                                src={require(`../app1.png`)}
                            />
                        </a>
                    </Col>
                    <Col lg={4} sm={6}>
                        <a className="thumnail" href="https://r-weather.netlify.com/" _target="blank">
                        <Figure.Image
                            className="mt-3 border-shadow"
                            alt="reactweatherapp"
                            width={400}
                            src={require(`../app2.png`)}
                        /></a>
                        <h2 className="magenta text-shadow-light">React Weather App with API</h2>
                    </Col>
                    <Col lg={4} sm={6}>
                        <h2 className="magenta text-shadow-light">React Movie Database App with API</h2>
                        <a className="thumnail" href="https://clever-goldberg-9d03a2.netlify.com/" _target="blank">
                        <Figure.Image
                            className="mt-3 border-shadow"
                            alt="moviedatabase"
                            width={400}
                            src={require(`../app3.png`)}
                        /></a>
                    </Col>
                </Row>
                <Row className="w-100 mt-5">
                    <Col lg={4} sm={6}>
                        <a className="thumnail" href="https://determined-turing-e577a7.netlify.com/" _target="blank">
                        <Figure.Image
                            className="mt-3 border-shadow"
                            alt="twitter"
                            width={400}
                            src={require(`../app4.png`)}
                        /></a>
                        <h2 className="magenta text-shadow-light">Twitter</h2>
                    </Col>
                    <Col lg={4} sm={6}>
                        <a className="thumnail" href="https://app.netlify.com/sites/upbeat-meninsky-5ab86c/deploys" _target="blank">
                        <Figure.Image
                            className="mt-3 border-shadow"
                            alt="todoapp"
                            width={400}
                            src={require(`../app5.png`)}
                        /></a>
                        <h2 className="magenta text-shadow-light">To-do App</h2>
                    </Col>
                    <Col lg={4} sm={6}>
                        <a className="thumnail" href="https://github.com/chloe-shin/r-githubissue" _target="blank">
                        <Figure.Image
                            className="mt-3 border-shadow"
                            alt="reactgithub"
                            width={400}
                            src={require(`../app6.png`)}
                        /></a>
                        <h2 className="magenta text-shadow-light">React-Github</h2>
                    </Col>
                </Row>                    
            </section>

            <section title='sec3' className="sec3" id="contact">
                <Row className="w-100">
                    <div className="glitch" data-text="CONTACT HAI:">CONTACT HAI:</div>
                </Row>
                <Row className="w-100">
                    <Col>
                    </Col>
                    <Col lg={6}>
                        <ContactForm />
                    </Col>
                    <Col></Col>
                </Row>
                <Figure.Image
                    className="mt-3 formImage"
                    alt="haiavatar2"
                    src={require(`../hai2.png`)}
                />
            </section>
            <Footer />
        </div>
    )
}
