import React from 'react';
import styles from './About.module.css'
import ava from '../../img/avatar.jpg'

const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.about_info}>
                <h2 className={styles.greeting}>Hello!</h2>
                <h1 className={styles.me}>I'm <span>Adam Sadulaev</span></h1>
                <div className={styles.frontend}>
                    Frontend Developer
                </div>
                <div className={styles.line}></div>
                <p className={styles.description}>
                    I'm Adam Sadulaev, a frontend developer. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime perspiciatis eveniet sint iste necessitatibus, vero doloribus repellat nisi perferendis, animi inventore porro, sequi maiores qui praesentium. Vel cum nisi deleniti?
                </p>
                <div className={styles.download_buttons}>
                    <div className="cv_download">
                        <button className={styles.cv_download_button}>Download CV</button>
                    </div>
                    <div className={styles.more_info}>
                        <a className={styles.more_info_button} href="#more">More</a>
                    </div>
                </div>
            </div>
            <div className={styles.about_ava}>
                <div className={styles.avatar}>
                    <img src={ava} alt="здесь должна быть аватарка" />
                </div>
            </div>
        </div>
    );
};

export default About;