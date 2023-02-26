import React from 'react';
import Hero from '../../components/Hero/Hero';
import HomepageSection from '../../components/HomepageSection/HomepageSection';

import styles from './Homepage.module.css';

const Homepage = () => {
  return (
    <>
      <Hero />
      <HomepageSection imageSrc='https://picsum.photos/750/400'>
        <h2 className={styles.heading}>Charater animation</h2>
        <h2 className={styles.subHeading}>presentation</h2>
        <p className='lead'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
          perspiciatis, voluptates fugiat ipsum velit consequatur et assumenda.
          Maxime, facere! Optio dicta, quod aspernatur delectus enim corporis
          quasi veritatis quos eos?
        </p>
      </HomepageSection>
      <HomepageSection theme='dark' imageSrc='https://picsum.photos/751/400'>
        <h3>Ovo je druga sekcija</h3>
      </HomepageSection>
    </>
  );
};

export default Homepage;
