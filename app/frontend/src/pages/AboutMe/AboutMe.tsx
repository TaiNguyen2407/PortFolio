import { RoughNotation } from "react-rough-notation";

const AboutMe = () => {
    return (
        <div
          id="about"
          className="aboutme"
        >
          <div className="aboutme-container">
            <div>
              <p className="aboutme-text">
                About Me
              </p>
              <h2 className="aboutme-text-introduction">
                Hello! I'm Loc, a{" "}
                <RoughNotation
                  type="highlight"
                  show={true}
                  color="#ddccff"
                  animate={true}
                  animationDuration={7000}
                  order="1"
                >
                  developer
                </RoughNotation>{" "}
                based in Helsinki
              </h2>
              <p className="aboutme-text-details">
                I love building tools that are user-friendly, simple and delightful websites and systems
              </p>
              <p className="aboutme-text-details">
                I'm currently looking for a kick-start to my carrer in technology.{" "}
                <RoughNotation
                  type="circle"
                  show={true}
                  color="#ff3333"
                  animate={true}
                  animationDuration={7000}
                  order="1"
                >
                  Hire me?
                </RoughNotation>{" "}
              </p>
            </div>
          </div>
        </div>
    )
}

export default AboutMe;