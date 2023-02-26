import React from 'react';

import styles from './HomepageSection.module.css';

const HomepageSection = ({ theme = 'light', imageSrc, children }) => {
  const getTheme = () => {
    return theme === 'dark' ? styles.dark : '';
  };

  return (
    <section
      className={`container flex space-between align-items-center h-100vh ${getTheme()}`}
    >
      <img className={styles.image} src={imageSrc} />
      <div className={styles.text}>{children}</div>
    </section>
  );
};

export default HomepageSection;
