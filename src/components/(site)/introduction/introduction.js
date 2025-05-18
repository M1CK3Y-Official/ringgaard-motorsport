'use client';
import styles from './introduction.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FaGear, FaTrophy, FaShield   } from "react-icons/fa6";
import Image from 'next/image';
import Link from 'next/link';
import Label from '../label/label';


const Introduction = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);
  return (
    <section className={styles.introduction}>
      <div className='sectionWrapper'>
        <div className={'textContainer'} >
          <Label >fremhævet</Label>
          <h2 className={styles.title} data-aos="fade-right" ><span>Vores </span>Styrker</h2>
          <p data-aos="fade-right" >Hos Ringgaard Motorsport kombinerer vi passionen for racerløb med teknisk præcision og en målrettet indsats. Selvom vi er nye i feltet, stræber vi konstant efter at udvikle os, levere solide resultater og skabe stærke relationer både på og uden for banen.</p>
        </div>
          <div className={styles.cards} data-aos="fade-right" >
            <div className={styles.card}>
              <div className={styles.icon}><FaTrophy/></div>
              <h3>Høje Ambitioner</h3>
              <p>Selvom vi er nye i klassen, går vi målrettet efter podiet. Med stærk vilje og hurtige fremskridt viser vi, at vi hører til i toppen af Danish Legend Car Cup.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}><FaGear/></div>
              <h3>Teknisk Perfektion</h3>
              <p>Vi går aldrig på kompromis. Vores biler bliver klargjort med største præcision for at sikre maksimal ydeevne og driftssikkerhed – hver gang.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}><FaShield/></div>
              <h3>Stærke Samarbejder</h3>
              <p>Vi er stolte af at samarbejde med passionerede sponsorer og partnere, der deler vores fokus på kvalitet, innovation og udvikling.</p>
            </div>
          </div>
          
      </div>
    </section>
  )
};

export default Introduction
