"use client";
import Image from 'next/image';
import styles from './footer.module.css';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaEnvelope, FaPhone } from 'react-icons/fa6';
import { useState, useEffect } from 'react';
import { getFooterData } from '@/services/data.service';

const Footer = () => {
  const [footerData, setFooterData] = useState([]);

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const fetchedFooterData = await getFooterData();
        console.log("Footer Data fetched:", fetchedFooterData);
        setFooterData(fetchedFooterData.content); // Extract the content array
      } catch (error) {
        console.log("Error fetching footer data:", error);
      }
    };
    fetchFooterData();
  }, []);

  const iconMap = {
    Mail: <FaEnvelope />,
    Phone: <FaPhone />,
    Instagram: <FaInstagram />,
    Facebook: <FaFacebookF />,
    TikTok: <FaTiktok />,
    YouTube: <FaYoutube />,
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.container}>
          {footerData.length > 0 ? (
            footerData.map((footerItem) => (
              <div key={footerItem.id} className={styles.footerGroup}>
                {/* Title and Subtitle */}
                {footerItem.subTitle ? (
                  <div className={styles.headingContainer}>
                    <h3 className={styles.footerHeading}>{footerItem.title}</h3>
                    <p>{footerItem.subTitle}</p>
                  </div>
                ) : (
                  <h3 className={styles.footerHeading}>{footerItem.title}</h3>
                )}

                {/* Menus or Groups */}
                {footerItem.group && (
                  <div className={styles.footerContact}>
                    <div className={styles.contactInfo}>
                      {footerItem.group.map((info, index) => (
                        <div className={styles.contact} key={index}>
                          {info.icon && ( // Only render the icon if it exists
                            <div className={styles.icon}>
                              {iconMap[info.icon]} {/* Render the icon dynamically */}
                            </div>
                          )}
                          <div>
                            {info.icon === "Mail" ? (
                              <Link href={`mailto:${info.href}`} target="_self">
                                {info.text}
                              </Link>
                            ) : info.icon === "Phone" ? (
                              <Link href={`tel:${info.href}`} target="_self">
                                {info.text}
                              </Link>
                            ) : (
                              <Link href={info.href} target="_self">
                                {info.text}
                              </Link>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Description and Socials */}
                {footerItem.description && (
                  <div className={styles.footerIntro}>
                    <div className={styles.description}>{footerItem.description}</div>
                    {footerItem.socials && (
                      <div className={styles.footerSocials}>
                        {footerItem.socials.map((social) => (
                          <Link key={social.id} href={social.href} target="_blank">
                            {iconMap[social.platform] || <span>{social.platform}</span>}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))
          ) : (
            ''
          )}
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; 2025 Mathias Ringgaard Motorsport. All rights reserved</p>
        <span className={styles.designby}>
          Designed by <Link href={'https://mikeboldsen.dk'}>Mike Boldsen</Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;