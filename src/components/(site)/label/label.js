'use client';
import styles from './label.module.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const Label = ({children}) => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);
  return (
    <div className={styles.label} data-aos="fade-right">
      {children}
    </div>
  )
};

export default Label
