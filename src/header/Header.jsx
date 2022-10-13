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
                    <div className={styles.white_style}>Fin Me on</div>
                    <div className={styles.social_icon}><img src={whatsapp} alt='whatsapp icon'/></div>
                    <div className={styles.social_icon}><img src={facebook} alt='facebook icon'/></div>
                    <div className={styles.social_icon}><img src={instagram} alt='facebook icon'/></div>
                    <div className={styles.social_icon}><img src={linkedin} alt='facebook icon'/></div>
                </div>
                <div ></div>
                <nav className={styles.about_me_nav}>
                    <ul className={styles.about_me_menu}>
                        <li><a className={styles.white_style} href="#about_me">Home</a></li>
                        <li><a className={styles.white_style} href="#my_projects">About</a></li>
                        <li><a className={styles.white_style} href="my_adress">Project</a></li>
                        <li><a className={styles.contact_me_button} href="contact">Contact Me</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;