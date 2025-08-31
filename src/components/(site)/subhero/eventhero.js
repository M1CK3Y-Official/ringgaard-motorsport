import styles from './eventhero.module.css'
import Image from "next/image"
import Link from 'next/link'
import {FaChevronRight, FaRegCalendar, FaRegClock, FaLocationDot, FaArrowLeft, FaShareNodes } from 'react-icons/fa6';

function formatEventDate(start, end) {
  const optionsMonth = { month: "long" };
  const optionsYear = { year: "numeric" };

  const startDate = new Date(start);
  const endDate = new Date(end);

  const month = startDate.toLocaleDateString("da-DK", optionsMonth);
  const year = startDate.toLocaleDateString("da-DK", optionsYear);

  const dayStart = startDate.getDate(); // ingen punktum
  const dayEnd = endDate.getDate(); // ingen punktum

  // Hvis start og slutdato er samme måned og år
  if (
    startDate.getMonth() === endDate.getMonth() &&
    startDate.getFullYear() === endDate.getFullYear()
  ) {
    return `${month} ${dayStart}-${dayEnd}, ${year}`;
  }

  // Hvis måned eller år er forskellig
  const startFormatted = `${startDate.getDate()} ${startDate.toLocaleDateString(
    "da-DK",
    optionsMonth
  )} ${startDate.getFullYear()}`;
  const endFormatted = `${endDate.getDate()} ${endDate.toLocaleDateString(
    "da-DK",
    optionsMonth
  )} ${endDate.getFullYear()}`;

  return `${startFormatted} - ${endFormatted}`;
}

const EventHero = ({config}) => {
    

    return (
        <header className={styles.eventhero}>
            <Image 
                src={config.image.url} 
                alt={config.image.alt} 
                width={config.image.width} 
                height={config.image.height}
            />
            
            <div className={styles.overlay}></div>
            <div className={styles.overlay}></div>

            <div className={styles.buttonGroup}>
                <Link href={'/events'} className={styles.button}><span><FaArrowLeft/>Tilbage til Events</span></Link>
                <Link href={'/events'} className={styles.button}><span><FaShareNodes />Del Event</span></Link>
            </div>

            <div className={styles.header}>
                <div className={styles.breadCrumbs}>
                    {config.slug ? <p><Link href="/events">Events</Link> <FaChevronRight/> {config.slug}</p> : ''}
                </div>
                <div className={styles.heading}>
                    <h1 className={styles.title}>{config.title}</h1>
                    <h2>{config.racetrack}</h2>
                </div>

                <div className={styles.eventInfo}>
                    <span>
                        <FaRegCalendar className={styles.icon}/>
                        {config.date}
                    </span>
                    <span>
                        <FaRegClock className={styles.icon}/>
                        {config.time}
                    </span>
                    <span>
                        <FaLocationDot className={styles.icon}/>
                        {config.location}
                    </span>
                </div>

            </div>
        </header>
    )

}

export default EventHero