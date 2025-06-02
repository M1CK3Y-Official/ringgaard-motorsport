'use client'
import styles from './teamTeaser.module.css';
import Label from '../label/label';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaRegCalendarDays , FaTrophy, FaMedal, FaClock    } from "react-icons/fa6";



const TeamTeaser = () => {
  useEffect(() => {
    AOS.init();
  }, []);

return (
    <section className={styles.teamTeaser}>
        {/* <div className={styles.blobRight}></div>
        <div className={styles.blobLeft}></div> */}
        <div className='sectionWrapper'>
            <div className={'textContainer'} >
                <Label >Mød Holdet</Label>
                <h2 className={styles.title} data-aos="fade-right" data-aos-once="true"  ><span>Bag </span>Rattet</h2>
                {/* <Link className={styles.button} href="/team" data-aos="fade-right" data-aos-once="true" >Hele Teamet</Link> */}
            </div> 

            <div className={styles.driverContainer} >

                    <div className={styles.imageContainer} data-aos="fade-right" data-aos-once="true" >
                        <Image src="/People/Mathias1.jpg" alt="Mathias Ringgaard" width={3704} height={2470} className={styles.image} />
                        <div className={styles.imageOverlay}></div>
                        <span className={styles.driverNumber}>#56</span>
                    </div>
                    <div className={styles.info} data-aos="fade-right" data-aos-once="true" >
                            <div>
                                    <h3 className={styles.name} data-aos="fade-right" data-aos-once="true" >Mathias Ringgaard</h3>
                                    <p className={styles.role} data-aos="fade-right" data-aos-once="true" >Teamleder & Kører</p>
                                    <p className={styles.description} data-aos="fade-right" data-aos-once="true">
                                            Mathias er hjertet i Ringgaard Motorsport. Med en passion for racerløb og en dedikation til at udvikle teamet, arbejder han utrætteligt for at sikre, at alle aspekter af holdet fungerer optimalt. Fra strategisk planlægning til praktisk udførelse, er Mathias altid på forkant med udfordringerne på banen.
                                    </p>
                            </div>
                            <div className={styles.stats} data-aos="fade-right" data-aos-once="true">
                            <div className={styles.stat}>
                                    <div className={styles.statTitle}>
                                            <span className={styles.statIcon}><FaTrophy className={styles.icon}/></span>
                                            <span className={styles.statLabel}>Karrieresejre</span>
                                    </div>
                                    <span className={styles.statValue}>15</span>
                            </div>
                            <div className={styles.stat}>
                                    <div className={styles.statTitle}>
                                            <div className={styles.statIcon}><FaMedal  className={styles.icon}/></div>
                                            <span className={styles.statLabel}>Podieplaceringer</span>
                                    </div>
                                    <span className={styles.statValue}>28</span>
                            </div>
                            <div className={styles.stat}>
                                    <div className={styles.statTitle}>
                                            <span className={styles.statIcon}><FaRegCalendarDays  className={styles.icon}/></span>
                                            <span className={styles.statLabel}>Erfaring</span>
                                    </div>
                                    <span className={styles.statValue}>8+ år</span>
                            </div>
                            <div className={styles.stat}>
                                    <div className={styles.statTitle}>
                                            <span className={styles.statIcon}><FaClock  className={styles.icon}/></span>
                                            <span className={styles.statLabel}>Bedste omgang</span>
                                    </div>
                                    <span className={styles.statValue}>1:24.5</span>
                            </div>
                            </div>

                            <div className={styles.quote} data-aos="fade-right" data-aos-once="true" >
                                    <p>
                                            &quot;Racing handler ikke kun om fart – det handler om præcision, strategi og den utrættelige jagt på perfektion. Hver omgang er en mulighed for at presse grænserne.&quot; 
                                    </p>
                                    <span className={styles.quoteAuthor}>- Mathias Ringgaard</span>
                    </div>

                            <div className={styles.buttonContainer} data-aos="fade-right" data-aos-once="true" >

                            <Link href="/team/mathias" className={styles.button}>Lær mere om Mathias</Link>
                            <Link href="/team" className={styles.button}>Mød hele teamet</Link>
                            </div>
                    </div>
             
            </div>
        </div>
    </section> 
)
};

export default TeamTeaser;
