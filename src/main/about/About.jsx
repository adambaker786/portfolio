import React from 'react';
import styles from './About.module.css'
import ava from '../../img/avatar.jpg'
import CV from '../../img/CV_Sadulaev.pdf'

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
                    I'm Adam Sadulaev, a frontend developer. 
                    I love creating websites and find peace in this. I'm interesting in horizontal development.
                    Currently working on PET Projects and every day I'm learning something new. 
                    All my Projects are created on React. <br></br>
                    If you are interested in my portfolio, then I will be happy to take advantage of the opportunity for career growth within your company.
                    I will be glad to become a part of your team.
                </p>
                <div className={styles.download_buttons}>
                    <div className="cv_download">
                        <a href={CV} download>
                        <button type="button" className={styles.cv_download_button} download>Download CV</button>
                        </a>
                    </div>
                    <div className={styles.more_info}>
                        <a className={styles.more_info_button} href="https://hh.kz/resume/c020f194ff04fb92b20039ed1f79666e357345?hhtmFrom=resume_list" target="_blank">More</a>
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