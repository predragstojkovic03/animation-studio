import React from 'react';

import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={`container ${styles.hero}`}>
      <div className={styles.content}></div>
    </div>
  );
};

export default Hero;
