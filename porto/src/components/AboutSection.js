import React from "react";
import laptop from "../img/laptop.jpg";
//styled
import styled from "styled-components";
import { About1, Description, Image, Hide } from "../styles";

const AboutSection = () => {
  return (
    <About1>
      <Description>
        <div className="title">
          <Hide>
            <h2>A little</h2>
          </Hide>
          <Hide>
            <h2>
              bit <span>about </span>myself.
            </h2>
          </Hide>
          <Hide>
            <h2></h2>
          </Hide>
        </div>
        <p>
          I’m a web developer and graphic designer with a passion for
          technology. I focus my time between design and code while working on
          awesome projects. Currently my skillset has me focused mainly on
          front-end development, but I'm ready to tackle any challenge. <br />
          <br />
          On my personal time I love traveling and playing video games.
        </p>
        {/* <button>Contact</button> */}
      </Description>
      <Image>
        <img src={laptop} alt="nitro5!" />
      </Image>
    </About1>
  );
};

//styled components
export default AboutSection;
