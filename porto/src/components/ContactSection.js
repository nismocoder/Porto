import React from "react";
import styled from "styled-components";
import gate from "../img/gate.jpg";
import { About1, Description, Image } from "../styles";

const contactSection = () => {
  return (
    <div className="Main">
      <ContactWrapper>
        <Mcontainer>
          <h1>Andrae Torres</h1>
          <h2>Based in ORLANDO, FL</h2>
          <a class="email" href="mailto:boostedrb240sx@gmail.com">
            boostedrb240sx@gmail.com
          </a>
          <img src={gate} alt="blank" />
        </Mcontainer>
      </ContactWrapper>
    </div>
  );
};

const Main = styled(About1)`
  position: relative;
  text-align: center;
  height: 90vh;
`;

const ContactWrapper = styled.div`
  min-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
`;

const Mcontainer = styled.div`
  width: 50vw;
  height: 90vh;
  position: relative;

  h1 {
    font-size: 25px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    height: 50%;
    width: 50%;
  }
  h2 {
    position: absolute;
    height: 35%;
    width: 50%;
    top: 55%;
    left: 60%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 25px;
  }
  img {
    width: 100vw;
    height: 90vh;
    object-fit: cover;
    background-size: contain;
    position: "absolute";
  }
  /* .separator {
    border-bottom: 4rem;
    padding-bottom: 4rem;
    width: 4rem;
    height: 2px;
    color: white;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
  } */
  .email {
    position: absolute;
    height: 5rem;
    width: 5rem;
    top: 50%;
    left: 60%;
    transform: translate(-50%, -50%);
    color: white;
  }
`;

export default contactSection;
