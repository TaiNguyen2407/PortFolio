import React from 'react';

import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from "react-scroll";
import "./Home.css"
import { TypeAnimation } from 'react-type-animation';


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
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>

        <div className="logo-container">
          <a
            href="https://www.linkedin.com/in/tai-nguyen-173625169/"
            rel="noreferrer"
          >
            <div className="logo">
              <FaLinkedinIn />
            </div>
          </a>
          <a href="https://github.com/TaiNguyen2407" rel="noreferrer">
            <div className="logo">
              <FaGithub />
            </div>
          </a>
        </div>

        <div className="link-container">
          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1500}
            className="link"
          >
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
