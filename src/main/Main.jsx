import React from 'react';
import Projects from './projects/Projects';
import About from './about/About';

const Main = () => {

    return (
        <div className='main'>
            <About></About>
            
            <Projects></Projects>
           
        </div>
    );
};

export default Main;