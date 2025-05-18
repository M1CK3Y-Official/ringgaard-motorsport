'use client';
import Link from 'next/link';
import styles from './nextrace.module.css';
import { FaRegCalendar, FaChevronRight } from "react-icons/fa6";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const NextRace = () => {
    useEffect(() => {
        AOS.init({
        duration: 500,
        });
    }, []);
  return (
    <div className={styles.nextRace} data-aos="fade-left">
        <div className={styles.status}>
            <div className={styles.dot}></div>
            <span className={styles.title}>NÆSTE LØB</span>
        </div>
      <div className={styles.event}>
        <h4 className={styles.track}>Ring Djursland</h4>
        <span className={styles.date}><FaRegCalendar/>21-22 Juni, 2025</span>
        <Link className={styles.button} href={'/'}>Details <FaChevronRight/></Link>
      </div>
    </div>
  )
};

export default NextRace
