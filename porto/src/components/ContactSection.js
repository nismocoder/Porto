import React from "react";
import styled from "styled-components";
import gate from "../img/gate.jpg";
import { About1 } from "../styles";

const contactSection = () => {
  return (
    <div className="Main">
      <ContactWrapper>
        <Tcontainer>
          <h1>
            <span>GET IN TOUCH</span>
            <div className="faq-line"></div>
          </h1>

          <h2>
            Here's some info on how you can get in contact.
            <br /> Also a link to my resume.
          </h2>
        </Tcontainer>
        <Bcontainer>
          <button class="resume" href="#">
            Resume
          </button>
          <h3>Andrae Torres</h3>
          <h4>Based in Orlando, FL</h4>
          <a class="email" href="mailto:boostedrb240sx@gmail.com">
            boostedrb240sx@gmail.com
          </a>
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
  height: 40vh;
  position: absolute;
  display: flex;
  align-items: center;
  font-family: "Jost", sans-serif;
  justify-content: center;

  h1 {
    font-size: 30px;
    position: absolute;
    bottom: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  h2 {
    position: absolute;
    bottom: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 26px;
    text-align: center;
  }
`;

const Bcontainer = styled.div`
  flex-basis: 15rem;
  width: 100vw;
  height: 50vh;
  position: absolute;
  display: flex;
  align-items: center;
  font-family: "Jost", sans-serif;
  font-weight: lighter;
  transition: 0.7 ease-in-out;
  bottom: 0;
  justify-content: center;

  button {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-family: "Jost", sans-serif;
    font-weight: lighter;
    font-size: 26px;
    transition: 0.5 ease-in-out;
  }
  h3 {
    font-size: 26px;
    position: absolute;
    top: 36%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-family: "Jost", sans-serif;
    font-weight: lighter;
  }
  h4 {
    position: absolute;
    top: 46%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 26px;
    font-family: "Jost", sans-serif;
    font-weight: lighter;
  }
  /* a {
    transition: 0.5 ease-in-out;
    justify-content: center;
  } */
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
    top: 56%;
    transform: translate(-50%, -50%);
    color: white;
    font-family: "Jost", sans-serif;
    font-weight: lighter;
    font-size: 26px;
    justify-content: center;
    left: 50%;
  }

  /* .resume {
    position: absolute;
    top: 46%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-family: "Jost", sans-serif;
    font-weight: lighter;
    font-size: 25px;
    transition: 0.5 ease-in-out;
  } */
`;

export default contactSection;
