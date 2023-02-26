import React, { useRef } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { HiBars3 } from 'react-icons/hi2';

import styles from './Navbar.module.css';

const Navbar = ({ setMenuOpen }) => {
  const { scrollY } = useScroll();
  const navbarRef = useRef();

  const toggleMenu = () => {
    setMenuOpen((previousState) => {
      return !previousState;
    });
  };

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest >= 150) navbarRef.current?.classList.add(styles.scrolled);
    else navbarRef.current?.classList.remove(styles.scrolled);
  });

  return (
    <header ref={navbarRef} className={`container`}>
      <h4 className={styles.logo}>Storm</h4>
      <button onClick={toggleMenu} className={styles.menuToggle}>
        <HiBars3 />
      </button>
    </header>
  );
};

export default Navbar;
