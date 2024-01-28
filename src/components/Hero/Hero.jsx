import React from "react";
import "./hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1 id="c">
              Discover <br />
              The Perfect property <br /> for you
            </h1>
          </div>
          <div className="hero-des">
            <span className="secondaryText">Find a variety of properties that suit you well</span>
            <span className="secondaryText">
              <br />
              Finding a residence is as easy as a search
            </span>
          </div>

          <div className="flexSpace searchbar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" name="" id="" />
            <button className="button">Search</button>
          </div>
          <div className="flexSpace stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9302} duration={4} />
                <span>
                +  <br />
                </span>
               <span className="secondaryText"> Premium Products
              </span></span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={3000} duration={4} />
                <span>
                 + <br />
                </span>
                <span className="secondaryText"> Happy Clients
              </span>
              </span>
            </div>

            <div className="flexColCenter stat">
              <span>
                    <CountUp start={10} end={35} duration={2} />
                 <span>
                     + <br />
                 </span>
                 <span className="secondaryText"> Awards Won
              </span>
              </span>
             
            </div>
          </div>
        </div>
        <div className=" flexColEnd  hero-right">
          <div className="image-container">
            <img id="fo" src="./hero-image.png" alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
