import React from 'react';
import laptop from '../img/laptop.jpg';
//styled
import styled from 'styled-components';

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
const About1 = styled.div`
min-height: 9vh;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5rem 10rem;
color: grey;
`;

const Description = styled.div`
flex: 1;
padding-right: 5rem;
h2{
    font-weight: lighter;
}
`
const Image = styled.div`
flex: 1;
overflow: hidden;
img{
    width: 100%;
    height: 80vh;
    object-fit: cover;
};
`;

const Hide = styled.div`
overflow: hidden;
`

export default AboutSection;