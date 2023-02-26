import React from 'react';

import styles from './Menu.module.css';

const Menu = ({ menuOpen }) => {
  const getMenuDisplay = () => {
    return menuOpen ? '' : 'display-none';
  };

  return (
    //true: menu ' '    //false: menu display-none
    <div className={`${styles.menu} ${getMenuDisplay()}`}>
      <ul className={styles.items}>
        <li className={styles.item}>
          <button className={styles.linkItem}>Character animation</button>
        </li>
        <li className={styles.item}>
          <button className={styles.linkItem}>Environment modeling</button>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
