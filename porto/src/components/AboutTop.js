import React from "react";
import styled from "styled-components";
import plane from "../img/plane.jpg";

const AboutTop = () => {
  return (
    <GreetWrapper>
      <Home>
        <Etc>
          <h1>Lets go places together..</h1>
          <img src={plane} alt="blank" />
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
    left: 30%;
    transform: translate(-50%, -50%);
    color: rgb(82, 80, 80);
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

export default AboutTop;
