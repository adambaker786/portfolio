import React from 'react';
import ava from '../img/avatar.jpg'

const Main = () => {
    return (
        <div className='main'>
            <section className='avatarka'>
                <div className='avatarka_content'>
                     <img src={ava} alt="здесь должна была быть аватарка" />
                </div>
            </section>
            <section className='projects'>
                <div className="pet-projects">
                    <h2>PET Projects</h2>
                </div>
            </section>
        </div>
    );
};

export default Main;