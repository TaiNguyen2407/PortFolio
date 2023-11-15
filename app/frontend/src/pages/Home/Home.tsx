import React from 'react';

import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import "./Home.css"
import { TypeAnimation } from 'react-type-animation';
import LogoLink from '../../components/LogoLink/LogoLink';


const YourComponent: React.FC = () => {
  return (
    <div id='home' className="home">
        {/* Container */}
        <div className="home-container">
            <p className="home-text-introduction-1">Hi, my name is</p>
            <h1 className="home-text-name">
            Tai Nguyen
            </h1>
            <h2 className="home-text-introduction-2">
                I'm
                <TypeAnimation
                    sequence={[
                        'a developer',
                        1000,
                        'a coder',
                        1500,
                        'a tech lover',
                        5000,
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    className="animation-style"
                />
            </h2>
            <p className="home-text-introduction-3">
                Hei, it's nice that you are here reading this. <br /> 
                Like a guest in my home, I'll show you around. <br /> 
                It'd be great if you can navigate through the pages in the <strong>navigation bar above</strong>
            </p>
            <div className="logo-container">
                <LogoLink 
                    href={'https://www.linkedin.com/in/tai-nguyen-173625169/'}
                    Icon={FaLinkedinIn} 
                    iconSize={35}/>
                <LogoLink 
                    href={'https://github.com/TaiNguyen2407'} 
                    Icon={FaGithub} 
                    iconSize={35}/>
            </div>
        </div>
    </div>
  );
};

export default YourComponent;
