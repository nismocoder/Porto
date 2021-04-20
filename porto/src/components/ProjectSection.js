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

      <ul>
        <li>
          <Image2>
            <img src={seaFood} alt="seaFood" />
          </Image2>
        </li>
        <li>
          <Image2>
            <img src={Itouge} alt="Itouge" />
          </Image2>
        </li>
        <li>
          <Image2>
            <img src={ngrid} alt="ngrid" />
          </Image2>
        </li>
      </ul>
    </Home>
  );
};

const Home = styled.div`
  min-height: 90vh;
  width: 100vw;
  overflow: hidden;
  justify-content: center;
  position: relative;

  h1 {
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 28px;
  }
  h2 {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-decoration: underline;
    font-size: 40px;
  }
  ul {
    display: flex;
    position: absolute;
    top: 50%;
    width: 100vw;
    justify-content: center;
  }
`;

export default ProjectSection;
