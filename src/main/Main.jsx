import React from 'react';
import ava from '../img/avatar.jpg'

const Main = () => {
    return (
        <div className='main'>
            <section className='avatarka'>
                <img src={ava} alt="здесь должна была быть аватарка" />
            </section>
        </div>
    );
};

export default Main;