import React from "react";
import styled from "styled-components";
import blank from "../img/blank.jpg";

const HomeSection = () => {
  return (
    <GreetWrapper>
      <Home>
        <Etc>
          <h1>Hi, I'm Andrae a front-end web developer.</h1>
          <img src={blank} alt="blank" />
        </Etc>
      </Home>
    </GreetWrapper>
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
    left: 35%;
    transform: translate(-50%, -50%);
    color: #ffffff;
    font-size: 2rem;
    line-height: 30px;
    text-align: center;
    @media (max-width: 1000px) {
      left: 50%;
    }
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
