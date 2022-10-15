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
                    <div className={styles.social_icon}><a href="https://wa.me/79881146445" target='_blank'><img src={whatsapp} alt='whatsapp icon'/></a></div>
                    <div className={styles.social_icon}><a href=""><img src={facebook} alt='facebook icon'/></a></div>
                    <div className={styles.social_icon}><a href="https://www.instagram.com/adam.baker.786/" target="_blank"><img src={instagram} alt='facebook icon'/></a></div>
                    <div className={styles.social_icon}><a href=""><img src={linkedin} alt='facebook icon'/></a></div>
                </div>
                <div ></div>
                <nav className={styles.about_me_nav}>
                    <ul className={styles.about_me_menu}>
                        <li><a className={styles.white_style} href="#about_me">Home</a></li>
                        <li><a className={styles.white_style} href="#my_projects">About</a></li>
                        <li><a className={styles.white_style} href="#project">Project</a></li>
                        <li><a className={styles.contact_me_button} href="https://t.me/sad_adam" target="_blank">Contact Me</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;