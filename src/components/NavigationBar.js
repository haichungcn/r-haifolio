import React, { useState, useEffect } from "react";
// import {Nav, Navbar} from 'react-bootstrap';



export default function NavigationBar(props) {

    return (
        <nav className={`navigationSection nav ${props.activeClass}`}>
            <div className="nav-brand">
                <h2 data-text="Haifolio">Haifolio</h2>
            </div>
            <ul>
                <li>
                    <a href="/" active="true">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#about">About me</a>
                </li>
                <li>
                    <a href="#works">Works</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            {/* <div class="menu-wrap">
                <select type="checkbox" class="toggler">
                    <div class="hamburger"></div>
                    <div class="menu">
                        <div>
                            <div>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="#about">About me</a></li>
                                    <li><a href="#works">Works</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </select>
            </div> */}
        </nav>
            );
        }
