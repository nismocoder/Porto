import React from 'react';
import laptop from '../img/laptop.jpg';

const AboutSection = () => {
    return (
<div>
    <div className='description'>
        <div className='title'>
            <div className='hide'>
                <h2>blah blah</h2>
            </div>
            <div className='hide'>
                <h2>Lorem <span>ipsum </span>dolor.</h2>
            </div>
            <div className='hide'>
                <h2>blah</h2>
            </div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <button>Contact</button>
    </div>
    <div className="image">
        <img src={laptop} alt="nitro5!" />
    </div>
</div>
    );
};

export default AboutSection;