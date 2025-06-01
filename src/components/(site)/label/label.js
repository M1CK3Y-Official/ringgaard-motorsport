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
    <div className={styles.label} data-aos="fade-right" data-aos-once="true" >
      {children}
    </div>
  )
};

export default Label
