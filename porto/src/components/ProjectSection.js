import React from "react";
import styled from "styled-components";
import seaFood from "../img/seaFood.png";
import Itouge from "../img/Itouge.png";
import ngrid from "../img/ngrid.png";
import { Image2 } from "../styles";

const ProjectSection = () => {
  return (
    <Home>
      <h1>Recent Works</h1>
      <h2>My Projects</h2>
      <PhotoContainer>
        <ul>
          <li>
            <Image2>
              <img src={seaFood} alt="seaFood" />
            </Image2>
            <p>Sea Food</p>
          </li>

          <li>
            <Image2>
              <img src={Itouge} alt="Itouge" />
            </Image2>
            <p>Imperial Touge</p>
          </li>

          <li>
            <Image2>
              <img src={ngrid} alt="ngrid" />
            </Image2>
            <p>Print Shop</p>
          </li>
        </ul>
      </PhotoContainer>
    </Home>
  );
};

const Home = styled.div`
  min-height: 90vh;
  max-height: 200vh;
  width: 100vw;
  overflow: auto;
  justify-content: center;
  position: relative;

  h1 {
    position: absolute;
    top: 18%;
    left: 50vw;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 28px;
  }
  h2 {
    position: absolute;
    top: 30%;
    left: 50vw;
    transform: translate(-50%, -50%);
    color: white;
    text-decoration: underline;
    font-size: 40px;
    text-align: center;
  }
  ul {
    display: flex;
    position: absolute;
    top: 35%;
    width: 100vw;
    justify-content: center;
    @media (max-width: 1000px) {
      flex-direction: column;
      height: 200vh;
      top: 5%;
      overflow: auto;
    }
  }

  p {
    display: flex;
    position: relative;
    justify-content: center;
    font-size: 22px;
    top: 0px;
    font-family: "Poppins", sans-serif;
    color: #fff;
  }
`;

const PhotoContainer = styled.div`
  width: 100vw;
  justify-content: center;
`;

export default ProjectSection;
