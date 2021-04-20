import React from "react";
import styled from "styled-components";
import blank from "../img/blank.jpg";
import { About1 } from "../styles";

const HomeSection = () => {
  return (
    <div className="GreetWrapper">
      <Home>
        <Etc>
          <h1>Hi, I'm Andrae a front-end web developer.</h1>
          <img src={blank} alt="blank" />
        </Etc>
      </Home>
    </div>
  );
};

const GreetWrapper = styled.div`
  position: relative;
  text-align: center;
`;

const Home = styled.div`
  min-height: 90vh;
  overflow: hidden;

  h1 {
    position: absolute;
    top: 55%;
    left: 30%;
    transform: translate(-50%, -50%);
    color: white;
  }
`;

const Etc = styled.div`
  img {
    width: 100vw;
    height: 88vh;
    object-fit: cover;
    background-size: contain;
    position: "absolute";
  }
`;

export default HomeSection;
