import React, {useState, useEffect} from 'react';
import Typing from 'react-typing-animation';

const Header = (props) => {


    if(props.position < 380) { return (
                <h1 className="headerTitle">
                    <span className='startingSymbol magenta'>{'>'}</span>
                    <Typing loop={true} speed={30} startDelay={1000} hideCursor={true}>
                        <span className='line1'><span className="cyan">Initialzing</span> $message ...{' '}
                        <Typing.Delay ms={1000} />
                        <Typing.Backspace count={40} speed={10} />
                        <Typing.Speed ms={60} />
                            Welcome to <br /><span className="cyan">Hai Chung</span>'s portfolio.{' '}
                        <Typing.Backspace delay={1500} count={60} speed={20} />
                        <Typing.Speed ms={60} />
                            <span className="cyan">Hai</span>'s <u className="magenta">a Web Designer.</u>
                            <span className="typing-emoji" role="img">✨</span>{' '}
                        <Typing.Delay ms={1000} />
                            <br />&nbsp;└─ <u className="magenta">a Fullstack Web Developer.</u>{' '}
                        <Typing.Delay ms={2000} />
                            <br />&nbsp;└─ <u className="magenta">a React App Developer.</u>{' '}
                        <Typing.Delay ms={2000} />
                            <br />&nbsp;└─ <span className="magenta">and ... (fill in the blank)</span>{' '}
                        <Typing.Delay ms={3000} />
                        <Typing.Backspace count={150} speed={10} />
                        <Typing.Speed ms={70} />
                            Let's scroll down <br />to see more about him.{' '}
                        <Typing.Delay ms={2000} />
                        </span>
                        <Typing.Backspace count={50} speed={10} />
                    </Typing>
                </h1>
    )} else return <></>
}

export default Header;
