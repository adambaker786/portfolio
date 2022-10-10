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
            <div className="clock">
                <div className="outer-clock">
                    <div className="marking marking-one"></div>
                    <div className="marking marking-two"></div>
                    <div className="marking marking-three"></div>
                    <div className="marking marking-four"></div>
                    <div className="marking marking-seconds"></div>
                    <div className="inner-clock">
                        <div className="clock-time">12:47</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;