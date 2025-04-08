"use client";
import Image from 'next/image';
import styles from './footer.module.css';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaLocationDot , FaPhone, FaEnvelope, FaFacebook  } from 'react-icons/fa6';
import { useState, useEffect } from 'react';
import { getFooterData } from '@/services/data.service';

const Footer = () => {

    const [footerData, setFooterData] = useState([]);
    
        useEffect( () => {
            const getData = async () => {
                try {
                    const data = await getFooterData();
                    console.log("Footer Data fetched:", data);
                    setFooterData(data);
                } catch (error) {
                    console.log("Error fetching footer data:", error);
                }
            }
            getData();
        }, []);



  return (
    <footer className={styles.footer}>
      
      <div className={styles.wrapper}>
        <div className={styles.container}>

              {footerData?.map( (footerItem) => {
                return ( 
                <div key={footerItem.id} className={styles.footerGroup}>
                  {footerItem.subTitle ? <div className={styles.headingContainer}><h3 className={styles.footerHeading}>{footerItem?.name}</h3><p>{footerItem.subTitle}</p></div> : <h3 className={styles.footerHeading}>{footerItem?.name}</h3>}
                  
                  {footerItem?.menus ? (
                    <div className={styles.menus}>

                      {footerItem?.menus?.map( (menu, index) => {
                        return (
                          <Link key={index} href={menu?.link}>{menu?.name}</Link>
                        );
                      })}

                    </div> 
                  ) : footerItem?.description ? (
                  <div className={styles.footerIntro}>
                    <div className={styles.description}>
                      {footerItem?.description}
                    </div>
                    {footerItem?.socials ? <div className={styles.footerSocials}>
                        {footerItem?.socials?.map( (social, index) => {
                          return (
                          <Link key={index} href={social.link} target='_blank'>
                            {social.icon}
                        </Link> )})}
                        
                  
                      </div> : ""}
                  </div>
              ) : footerItem?.contactInfo ? (
                  <div className={styles.footerContact}>
                    <div className={styles.contactInfo}>
                      {footerItem?.contactInfo?.map( (info, index) => {

                        return (
                          <div className={styles.contact} key={index}>
                            <div className={styles.icon}>{info.icon}</div>
                            <div>{info?.mail ? (<Link href={`mailto:${info.mail}`} target='_blank'>{info.text}</Link>) : info.phone ? (<Link href={`tel:+${info.phone}`}>{info.text}</Link>) : ""}</div>
                          </div> 
                          );
                        })}
                      
                    </div>
                  </div>
                  ) : ""}
                
                </div>
                );
              })}

        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; 2025 Mathias Ringgaard Motorsport. All rights reserved</p>
        <span className={styles.designby}>Designed by <Link href={'https://mikeboldsen.dk'} >Mike Boldsen</Link></span>
      </div>

    </footer>
  )
};

export default Footer
