import React from "react";
import styled from "styled-components";
import seaFood from "../img/seaFood.png";
import Itouge from "../img/Itouge.png";
import GameThumbnail from "../img/GameThumbnail.png";
import { Image2 } from "../styles";

const ProjectSection = () => {
  return (
    <Home>
      <h1>Recent Works</h1>
      <h2>My Projects</h2>
      <PhotoContainer>
        <ul>
          <li>
            <a href="https://nismocoder.github.io/seafoodmain/" target="_blank">
              <Image2>
                <img src={seaFood} alt="seaFood" />
              </Image2>
            </a>
            <p>Sea Food</p>
          </li>

          <li>
            <a
              href="https://nismocoder.github.io/ImperialTouge50/"
              target="_blank"
            >
              <Image2>
                <img src={Itouge} alt="Itouge" />
              </Image2>
            </a>
            <p>Imperial Touge</p>
          </li>

          <li>
            <a href="https://game-antena.com" target="_blank">
              <Image2>
                <img src={GameThumbnail} alt="ngrid" />
              </Image2>
            </a>
            <p>Game-Antena</p>
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
    justify-content: space-evenly;
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
