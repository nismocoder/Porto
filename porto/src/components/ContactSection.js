import React from "react";
import styled from "styled-components";
import gate from "../img/gate.jpg";
import { About1 } from "../styles";

const contactSection = () => {
  return (
    <div className="Main">
      <ContactWrapper>
        <Tcontainer>
          <h1>GET IN TOUCH</h1>
          <h2>
            Here's some info on how we can get in contact.
            <br /> Also a link to my resume.
          </h2>
        </Tcontainer>
        <Bcontainer>
          <h3>Andrae Torres</h3>
          <h4>Based in Orlando, FL</h4>
          <a class="email" href="mailto:boostedrb240sx@gmail.com">
            boostedrb240sx@gmail.com
          </a>
          <button>Resume</button>
        </Bcontainer>
        <img src={gate} alt="blank" />
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
  position: relative;
  min-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  img {
    width: 100vw;
    height: 90vh;
    object-fit: cover;
    background-size: contain;
    position: "absolute";
  }
`;

const Tcontainer = styled.div`
  flex-basis: 15rem;
  width: 100vw;
  height: 90vh;
  position: absolute;
  display: flex;
  align-items: center;
  font-family: "Jost", sans-serif;
  h1 {
    font-size: 25px;
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }
  h2 {
    position: absolute;
    top: 28%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 25px;
    text-align: center;
  }
`;

const Bcontainer = styled.div`
  flex-basis: 15rem;
  width: 100vw;
  height: 90vh;
  position: absolute;
  display: flex;
  align-items: center;
  font-family: "Jost", sans-serif;
  font-weight: lighter;
  h3 {
    font-size: 25px;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-family: "Jost", sans-serif;
    font-weight: lighter;
  }
  h4 {
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 25px;
    font-family: "Jost", sans-serif;
    font-weight: lighter;
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
    position: relative;
    top: 23%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-family: "Jost", sans-serif;
    font-weight: lighter;
    font-size: 25px;
  }
  button {
    position: absolute;
    top: 46%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-family: "Jost", sans-serif;
    font-weight: lighter;
    font-size: 25px;
  }
`;

export default contactSection;
