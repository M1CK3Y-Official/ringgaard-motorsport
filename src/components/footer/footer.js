"use client";
import Image from 'next/image';
import styles from './footer.module.css';
import Link from 'next/link';
import { FaFacebook, FaInstagram  } from 'react-icons/fa6';
import { useState, useEffect } from 'react';
import { getMenuData } from '@/services/data.service';

const Footer = () => {

    const [menuData, setMenuData] = useState([]);
    
        useEffect( () => {
            const getData = async () => {
                try {
                    const data = await getMenuData();
                    console.log("Data fetched:", data);
                    setMenuData(data);
                } catch (error) {
                    console.log("Error fetching menu data:", error);
                }
            }
            getData();
        }, []);



  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Link href='/'><Image src="/logos/Blue/Logo_Landscape.svg" alt="logo" width={2691} height={517} /></Link>
      </div>
      <div className={styles.middleContainer}>
        <div className={styles.socials}>
            <Link href='https://www.facebook.com/MathiasRinggaardMotorsport' target='_blank'><FaFacebook className={styles.icon}/></Link>
            <Link href='https://www.instagram.com/Mathias_Ringgaard_Motorsport' target='_blank'><FaInstagram className={styles.icon}/></Link>
        </div>
        <hr className={styles.divider}/>
        <div className={styles.text}>&#169; 2025 Mathias Ringgaard Motorsport</div>
      </div>
      <div className={styles.menus}>
        {menuData.map( (menu, index) => (
          <Link key={index} href={menu.link}>{menu.name}</Link>
        ))}
      </div>
    </footer>
  )
};

export default Footer
