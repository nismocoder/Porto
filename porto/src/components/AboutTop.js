import React from "react";
import styled from "styled-components";
import plane from "../img/plane.jpg";

const AboutTop = () => {
  return (
    <div className="GreetWrapper">
      <Home>
        <Etc>
          <h1>Come FLY with me..</h1>
          <img src={plane} alt="blank" />
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
    color: rgb(82, 80, 80);
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
