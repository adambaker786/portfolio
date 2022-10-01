import React from 'react';

const Header = () => {
    return (
        <div className='header'>
            <nav className='menu'>
                <ul>
                    <li><a href="#about_me">Обо мне</a></li>
                    <li><a href="#my_projects">Мои проекты</a></li>
                    <li><a href="my_adress">Мои данные</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;