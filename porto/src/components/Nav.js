import React from "react";
import styled from 'styled-components';

const Nav = () => {
    return (
<StyledNav>
    <h1><a logo="logo" hfref="#">Andrae</a></h1>
    <ul>
        <li>
            <a href="#">1. About Me</a>
        </li>
        <li>
            <a href="#">2. Projects</a>
        </li>
        <li>
            <a href="#">3. Contact</a>
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
    font-family: 'Courgette', cursive;
    font-weight: lighter;
}
ul{
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