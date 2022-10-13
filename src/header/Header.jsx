import React from 'react';
import styles from './Header.module.css'
import whatsapp from '../img/whatsapp.png'
import facebook from '../img/facebook.png'
import instagram from '../img/instagram.png'
import linkedin from '../img/linkedin.png'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header_content}>
                <div className={styles.find_me}>
                    <div>Fin Me on</div>
                    <div className={styles.social_icon}><img src={whatsapp} alt='whatsapp icon'/></div>
                    <div className={styles.social_icon}><img src={facebook} alt='facebook icon'/></div>
                    <div className={styles.social_icon}><img src={instagram} alt='facebook icon'/></div>
                    <div className={styles.social_icon}><img src={linkedin} alt='facebook icon'/></div>
                </div>
                <nav className='menu'>
                    <ul>
                        <li><a href="#about_me">Обо мне</a></li>
                        <li><a href="#my_projects">Мои проекты</a></li>
                        <li><a href="my_adress">Мои данные</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;