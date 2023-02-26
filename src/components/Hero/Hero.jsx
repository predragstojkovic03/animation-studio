import React from 'react';

import styles from './Hero.module.css';

const Hero = () => {
  return (
    //"container " + nekaKlasa        ""
    <div className={`container ${styles.hero}`}>
      <div className={styles.content}>
        <h1>OPEN THE DOOR TO THE MAGIC WORLD OF VFX</h1>
        <p className='lead'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi qui
          est ipsam eos explicabo ullam maxime a neque fugit nobis.
        </p>
        <button className={styles.btn}>Explore</button>
      </div>
    </div>
  );
};

export default Hero;
