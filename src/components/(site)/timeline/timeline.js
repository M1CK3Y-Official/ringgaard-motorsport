import { FaCar, FaChild } from 'react-icons/fa';
import Label from '../label/label';
import styles from './timeline.module.css';
import {FaCalendar, FaFlagCheckered, FaGlobe, FaLocationDot, FaTrophy, FaCalendarXmark} from "react-icons/fa6";

const TimeLine = () => {
  return (
    <section className={styles.timeline}>
        <div className='sectionWrapper'>
            <div className={'textContainer'} >
                {/* <Label >Racing Rejse</Label> */}
                <h2 className={styles.title} data-aos="fade-right" data-aos-once="true"><span>Mathias´s </span>Karriere</h2>
                <p data-aos="fade-right" data-aos-once="true" className={styles.intro} >Følg Mathias´s karriere-fremskridt fra karting til mesterskabs deltager i den danske Legend Car Cup.</p>
            </div>

            <div className={styles.tree}>
                <div className={styles.wrap}>
                    <div className={styles.middle}></div>

                    <div className={styles.container}>
                        <div className={styles.contentContainer}>
                            <div className={styles.content}>
                                <div className={styles.dot}></div>
                                <div className={styles.contentTitle}>
                                    <div className={styles.icon}>
                                        <FaChild/>
                                    </div>
                                    <div>
                                        <h3>2015</h3>
                                        <h3>Første gokart</h3>
                                    </div>
                                </div>
                                <p className={styles.description}>Mathias fik sin første gokart, og begyndte sin karriere i dansk motorsport.</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.contentContainer}>
                            <div className={styles.content}>
                                <div className={styles.dot}></div>
                                <div className={styles.contentTitle}>
                                    <div className={styles.icon}>
                                        <FaTrophy/>
                                    </div>
                                    <div>
                                        <h3>2018</h3>
                                        <h3>2. Plads i DM</h3>
                                    </div>
                                </div>
                                <p className={styles.description}>2. Plads til DM Gokart</p>
                                <p className={styles.result}><span className={styles.icon}><FaTrophy/></span>DM Gokart - 2. Plads</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.contentContainer}>
                            <div className={styles.content}>
                                <div className={styles.dot}></div>
                                <div className={styles.contentTitle}>
                                    <div className={styles.icon}>
                                        <FaGlobe/>
                                    </div>
                                    <div>
                                        <h3>2020</h3>
                                        <h3>Første udenlandske løb</h3>
                                    </div>
                                </div>
                                <p className={styles.description}>Nordisk mesterskab gokart?</p>
                                {/* <p className={styles.result}><span className={styles.icon}><FaTrophy/></span>Regional Karting Championship - 3rd Place</p> */}
                            </div>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.contentContainer}>
                            <div className={styles.content}>
                                <div className={styles.dot}></div>
                                <div className={styles.contentTitle}>
                                    <div className={styles.icon}>
                                        <FaCar/>
                                    </div>
                                    <div>
                                        <h3>2023</h3>
                                        <h3>Første test i racerbil</h3>
                                    </div>
                                </div>
                                <p className={styles.description}>Første test af racerbil på bane, hvor der blev testet både Legend Car og Formel 5 racere.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.contentContainer}>
                            <div className={styles.content}>
                                <div className={styles.dot}></div>
                                <div className={styles.contentTitle}>
                                    <div className={styles.icon}>
                                        <FaTrophy/>
                                    </div>
                                    <div>
                                        <h3>2024</h3>
                                        <h3>4-Cylindret Legend Car Cup</h3>
                                    </div>
                                </div>
                                <p className={styles.description}>Gennemførte vores første sæson i dansk banesport, og endte som nr. 4 i den 4-cylindrede klasse.</p>
                                <p className={styles.result}><span className={styles.icon}><FaTrophy/></span>Legend Car Cup - 4. Plads</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.contentContainer}>
                            <div className={styles.content}>
                                <div className={styles.dot}></div>
                                <div className={styles.contentTitle}>
                                    <div className={styles.icon}>
                                        <FaTrophy/>
                                    </div>
                                    <div>
                                        <h3>2025</h3>
                                        <h3>3-Cylindret Legend Car Cup</h3>
                                    </div>
                                </div>
                                <p className={styles.description}>Vi slutter som bedste kører af dem, der har kørt deres første sæson i den 3-cylindrede klasse.</p>
                                <p className={styles.result}><span className={styles.icon}><FaTrophy/></span>Legend Car Cup - 11. Plads</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>
  )
};

export default TimeLine;
