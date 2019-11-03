import React, {useState, useEffect} from 'react';
import Typing from 'react-typing-animation';

const Header = (props) => {

    return (
        <header title='top'>
            <div className="parallax-wrapper background">
                <h1 className="headerTitle"><span className='startingSymbol'>></span>
                    <Typing loop={true} speed={70} startDelay={2000} hideCursor={true}>
                        <span className='line1'><span className="cyan">Initialzing</span> $message...{' '}
                        <Typing.Backspace delay={2000} count={40} speed={5} />
                        <Typing.Speed ms={70} />
                            Welcome to <br /><span className="cyan">Hai Chung</span>'s portfolio.{' '}
                        <Typing.Backspace delay={2000} count={40} speed={30} />
                        <Typing.Speed ms={70} />
                            <span className="cyan">Hai</span>'s <u className="magenta">a Web Designer.</u>
                            <span className="typing-emoji" role="img">✨</span>{' '}
                        <Typing.Delay ms={2000} />
                            <br />&nbsp;└─ <u className="magenta">a Fullstack Web Developer.</u>{' '}
                        <Typing.Delay ms={2000} />
                            <br />&nbsp;└─ <u className="magenta">a React App Developer.</u>{' '}
                        <Typing.Delay ms={2000} />
                            <br />&nbsp;└─ <span className="magenta">and ... (fill in the blank)</span>{' '}
                        <Typing.Delay ms={3000} />
                        <Typing.Backspace count={130} speed={20} />
                        <Typing.Speed ms={70} />
                            Let's scroll down <br />to see more about him.{' '}
                        <Typing.Delay ms={3000} />
                        </span>
                        <Typing.Backspace count={60} speed={40} />
                        <Typing.Delay ms={3000} />
                    </Typing>
                </h1>
            </div>
        </header>
    );
}

export default Header;
