import React from 'react';
import laptop from '../img/laptop.jpg';
//styled
import styled from 'styled-components';
import { About1, Description, Image, Hide } from  "../styles";

const AboutSection = () => {
    return (
<About1>
    <Description>
        <div className='title'>
            <Hide>
                <h2>blah blah</h2>
            </Hide>
            <Hide>
                <h2>Lorem <span>ipsum </span>dolor.</h2>
            </Hide>
            <Hide>
                <h2>blah</h2>
            </Hide>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <button>Contact</button>
    </Description>
    <Image>
        <img src={laptop} alt="nitro5!" />
    </Image>
</About1>
    );
};

//styled components
export default AboutSection;