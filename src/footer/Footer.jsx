import React from 'react';
import styles from './Footer.module.css';
import copyright from '../img/C.png';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_content}>
                <div className={styles.footer_img}>
                    <img src={copyright} alt="copyright pictur" />
                </div>
                <div className={styles.footer_text}>
                    Adam Sadulaev
                </div>
            </div>
        </div>
    );
};

export default Footer;