"use client";
import styles from './totopbtn.module.css';
import { FaAngleUp } from "react-icons/fa6";
import { useEffect, useState } from 'react';


const ToTopBtn = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // console.log("Window Scroll Y:", window.scrollY);
            if (window.scrollY > 300) {
                setIsVisible(true);
            } 
            else if (window.scrollY < window.innerHeight-300) {
                setIsVisible(false);
            }
            else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // console.log("ToTopBtn rendered");


  return (
        <button className={`${styles.scrollToTop} ${isVisible ? styles.visible : ""}`} onClick={scrollToTop}>
            <FaAngleUp className={styles.toTopBtn} />
        </button>
  )
};

export default ToTopBtn
