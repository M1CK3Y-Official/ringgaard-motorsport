'use client';
import Link from 'next/link';
import Label from '../label/label';
import styles from './sponsorsTeaser.module.css';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useState, useEffect } from 'react';
import { getSponsorsTeaserData } from '@/services/data.service';
import Image from 'next/image';


const SponsorsTeaser = () => {

  const [sponsorsData, setSponsorsData] = useState([]);

  useEffect( () => {
    const fetchSponsorsTeaserData = async () => {
      try {
        const fetchedSponsorsTeaserData = await getSponsorsTeaserData();
        console.log("Fetched SponsorsTeaser data:", fetchedSponsorsTeaserData);
        
        setSponsorsData(fetchedSponsorsTeaserData);
      } catch (error) {
        console.error("Error fetching SponsorsTeaser data:", error);
      }
    }
    fetchSponsorsTeaserData();
  
  }, []);

  return (
    <section className={styles.sponsorsTeaser}>
      <div className='sectionWrapper'>
        <div className={'textContainer'}>
          <Label>Vores Samarbejdspartnere</Label>
          <h2 className={styles.title} data-aos="fade-right"><span>Stolte</span> Sponsorer</h2>
          <p data-aos="fade-right">Vi er stolte af at samarbejde med vores dedikerede partnere, som støtter os hele vejen mod sejren.</p>
        </div>

          <div className={styles.sponsors} data-aos="fade-right">
            {sponsorsData.map((sponsor) => (
              console.log(sponsor),
              <div className={styles.sponsor} key={sponsor.id}>
                <Link href={sponsor.attributes.url} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={sponsor.attributes.logo.data.attributes.url}
                    alt={sponsor.attributes.name}
                    width={sponsor.attributes.logo.data.attributes.width}
                    height={sponsor.attributes.logo.data.attributes.height}
                    className={styles.sponsorLogo}
                  />
                  {/* <p>{sponsor.attributes.name}</p> */}
                </Link>
              </div>
            ))}

          </div>

          <Link href="/sponsors" data-aos="fade-right" className={styles.button}>Se alle sponsorer <FaArrowRightLong /></Link>
          
      </div>
    </section>
  )
};

export default SponsorsTeaser
