import React from 'react';
import ava from '../img/avatar.jpg'
import Projects from './projects/Projects';

const Main = () => {

    const currentTime = () =>{
        const clockTime = document.querySelector(".clock-time");
        const markingSeconds = document.querySelector(".marking-seconds");

        let date = new Date();
        let hh = date.getHours();
        let mm = date.getMinutes();
        let ss = date.getSeconds();

        hh = hh < 10 ? `0${hh}` : hh;
        mm = mm < 10 ? `0${mm}` : mm;
        ss = ss < 10 ? `0${ss}` : ss;

        const ssDegrees = (ss / 60) * 360;
        markingSeconds.style.transform = `rotate(${ssDegrees}deg)`;

        let time = `${hh} : ${mm}`;
        clockTime.innerText = time;
    }

    currentTime();
    setInterval(currentTime, 1000);

    return (
        <div className='main'>
            <section className='avatarka'>
                <div className='avatarka_content'>
                     <img src={ava} alt="здесь должна была быть аватарка" />
                </div>
            </section>
            <Projects></Projects>
            <div className="clock-main">   
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
        </div>
    );
};

export default Main;