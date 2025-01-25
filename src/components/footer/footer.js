"use client";
import Image from 'next/image';
import styles from './footer.module.css';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube  } from 'react-icons/fa6';
import { useState, useEffect } from 'react';
import { getFooterData } from '@/services/data.service';

const Footer = () => {

    const [footerData, setFooterData] = useState([]);
    
        useEffect( () => {
            const getData = async () => {
                try {
                    const data = await getFooterData();
                    console.log("Data fetched:", data);
                    setFooterData(data);
                } catch (error) {
                    console.log("Error fetching footer data:", error);
                }
            }
            getData();
        }, []);



  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Link href='/'><Image src="/logos/White/Logo_Landscape_White.svg" alt="logo" width={2691} height={517} /></Link>
      </div>
      
      <div className={styles.container}>

        <div className={styles.footerLeft}>

            {footerData.map( (footerItem) => {
              return ( <div key={footerItem.id} className={styles.footerMenu}>
                <h3 className={styles.footerHeading}>{footerItem.name}</h3>
                <div className={styles.menus}>

                {footerItem.menus.map( (menu, index) => {
                  return (
                    <Link key={index} href={menu.link}>{menu.name}</Link>
                  );
                })}

                </div>
              </div>
              );
            })}
          
        </div>

        <div className={styles.footerRight}>
          <div className={styles.footerFollow}>

            <h3 className={styles.footerHeading}>Følg os</h3>

            <div className={styles.newsletterField}>
              <input className={styles.newsletterInput} type="email" placeholder="Indtast din email" />
              <button className={styles.newsletterSend}>Tilmeld</button>
            </div>

            <div className={styles.footerSocials}>
              <Link href='https://www.facebook.com/MathiasRinggaardMotorsport' target='_blank'><FaFacebookF className={styles.icon} /></Link>
              <Link href='https://www.instagram.com/Mathias_Ringgaard_Motorsport' target='_blank'><FaInstagram className={styles.icon} /></Link>
              <Link href='https://www.tiktok.com/@mathiasringgaard56' target='_blank'><FaTiktok className={styles.icon} /></Link>
              <Link href='https://www.youtube.com/channel/UCyde5KRpJY6RZJ64SczI1vw' target='_blank'><FaYoutube className={styles.icon} /></Link>
            </div>

          </div>
        </div>
      
      

      </div>

      <div className={styles.footerBottom}>
        <p>&copy; 2025 Mathias Ringgaard Motorsport. All rights reserved</p>
      </div>

    </footer>
  )
};

export default Footer
