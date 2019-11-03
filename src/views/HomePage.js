import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';

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

export default function HomePage() {

    return (
        <div className="homePageSection">
            <Header/>
            <section title='sec1' className="sec1" id="about">
                    <div className="glitch" data-text="ABOUT HAI">ABOUT HAI</div> 
                    <p>
                        Hai's a freelance Fullstack Web Developer and Designer based in Ho Chi Minh City, Vietnam.
                    </p>
                    <p>
                        Starting to code seriously from 2019, He has worked on many projects from mini games, simple to-do app to full complex React web apps.
                        Hai has a great passion in design, coding and technology that always pushes him to keep learning and discovering new techniques. He believes in creating products that inspired other people.
                    </p>
                    <p>
                        Hai loves to work with people from around the world who are passionate and fun.
                    </p>
            </section>
            
            <section className="parallax-wrapper section" id="works">
                        <div className="glitch" data-text="HAI'S WORKS">HAI'S WORKS</div> 
                        <p>
                            Hai's a freelance Fullstack Web Developer and Designer based in Ho Chi Minh City, Vietnam.
                        </p>
                        <p>
                            Starting to code seriously from 2019, He has worked on many projects from mini games, simple to-do app to full complex React web apps.
                            Hai has a great passion in design, coding and technology that always pushes him to keep learning and discovering new techniques. He believes in creating products that inspired other people.
                        </p>
                        <p>
                            Hai loves to work with people from around the world who are passionate and fun.
                        </p>
            </section>
            
                <section title='sec1' className="sec1" id="contact">
                    
                        <div className="glitch" data-text="CONTACT HAI:">CONTACT HAI:</div> 
                        <p>
                            Hai's a freelance Fullstack Web Developer and Designer based in Ho Chi Minh City, Vietnam.
                        </p>
                        <p>
                            Starting to code seriously from 2019, He has worked on many projects from mini games, simple to-do app to full complex React web apps.
                            Hai has a great passion in design, coding and technology that always pushes him to keep learning and discovering new techniques. He believes in creating products that inspired other people.
                        </p>
                        <p>
                            Hai loves to work with people from around the world who are passionate and fun.
                        </p>
                </section>
        </div>
    )
}
