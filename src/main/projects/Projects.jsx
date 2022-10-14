import React from 'react';
import styles from './Projects.module.css'
import estate from '../../img/group.png'

const Projects = () => {
    return (
        <div className={styles.projects}>
            <div className={styles.project_text}>
                <div className={styles.project_big_text}>
                    MY PROJECT
                </div>
                <div className={styles.project_text}>
                    MY PROJECTS
                </div>
            </div>
            <div className={styles.project_cards}>
                <div className={styles.project_cards_content}>
                    <div className={styles.project_card_img}>
                        <img src={estate} alt="project estate img should be here" />
                    </div>
                    <div className={styles.project_card_type}>
                        <div className={styles.project_name}>Real Estate</div>
                        <div className={styles.project_type}>Landing Page</div>
                        <div className={styles.project_button}>
                            <button>View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;