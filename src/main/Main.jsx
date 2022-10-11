import React from 'react';
import ava from '../img/avatar.jpg'
import Projects from './projects/Projects';

const Main = () => {

    return (
        <div className='main'>
            <section className='avatarka'>
                <div className='avatarka_content'>
                     <img src={ava} alt="здесь должна была быть аватарка" />
                </div>
            </section>
            <Projects></Projects>
           
        </div>
    );
};

export default Main;