import React from 'react';
import styles from './Main.module.css'
import Projects from './projects/Projects';
import About from './about/About';

const Main = () => {

    return (
        <div className={styles.main}>
            <About></About>
            <Projects></Projects>
           
        </div>
    );
};

export default Main;