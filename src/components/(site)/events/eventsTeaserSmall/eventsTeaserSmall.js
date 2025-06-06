// 'use client';
import Link from 'next/link';
import Label from '../../label/label';
import styles from './eventsTeaserSmall.module.css';


const EventsTeaserSmall = () => {
  return (
    <section className={styles.eventsTeaserSmall}>
        <div className='sectionWrapper'>

            <div className='textContainer'>
                <Label>2025 Sæson</Label>
                <h2 className={styles.title} data-aos="fade-right" data-aos-once="true"><span>Kommende </span>Events</h2>
            </div>

            <div className={styles.eventsContainer}>
                <div className={styles.eventCard} >
                    <h3 className={styles.eventTitle}>Event 1</h3>
                    <p className={styles.eventDate}>Dato: 1. januar 2025</p>
                </div>
                <div className={styles.eventCard} >
                    <h3 className={styles.eventTitle}>Event 2</h3>
                    <p className={styles.eventDate}>Dato: 15. februar 2025</p>
                </div>
                <div className={styles.eventCard} >
                    <div className={styles.eventImage}>
                        {/* <img src="/Events/event3.jpg" alt="Event 3" /> */}
                    </div>
                    <div className={styles.eventInfo}>
                        <h3 className={styles.eventTitle}>Event 3</h3>
                        <div className={styles.eventDetails}>
                            <p className={styles.eventDate}>June 12-13, 2023</p>
                            <p className={styles.eventDate}>Silkeborg, Denmark</p>
                        </div>
                        <Link className={styles.button} href="/events"  >View Details</Link>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
};

export default EventsTeaserSmall
