import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link logo="logo" to="/home">
          Andrae
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/About">1. About Me</Link>
        </li>
        <li>
          <Link to="/Projects">2. Projects</Link>
        </li>
        <li>
          <Link to="/Contact">3. Contact</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  a {
    color: white;
    text-decoration: none;
    font-family: "Courgette", cursive;
    font-weight: lighter;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 2rem;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
`;

export default Nav;
