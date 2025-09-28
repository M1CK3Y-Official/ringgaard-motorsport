'use client';
import Link from 'next/link';
import styles from './nextrace.module.css';
import { FaRegCalendar, FaChevronRight, FaLocationDot, FaFlagCheckered, FaXmark } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { getEventsTeaserBigData } from '@/services/data.service';




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

const NextRace = () => {

  const [eventsData, setEventsData] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  
    useEffect(() => {
      const fetchEventsTeaserBigData = async () => {
        try {
          const fetchedEventsTeaserBigData = await getEventsTeaserBigData();
          console.log("Fetched EventsTeaser data:", fetchedEventsTeaserBigData);
  
          setEventsData(fetchedEventsTeaserBigData);
        } catch (error) {
          console.error("Error fetching EventsTeaser data:", error);
        }
      };
      fetchEventsTeaserBigData();
    }, []);



    useEffect(() => {
        AOS.init({
        duration: 500,
        });
    }, []);
    console.log(eventsData.length)
  return (

    
    <div className={styles.nextRace} data-aos="fade-left">
      
      <div className={`${styles.mobile} ${isExpanded ? styles.open : ''}`} onClick={() => setIsExpanded(!isExpanded)}>
        <FaFlagCheckered className={styles.icon} />
      </div>
      <div className={`${styles.content} ${isExpanded ? styles.open : ''}`}>

        <div className={styles.actions}>
          
          <div className={styles.status}>
            <div className={styles.dot}></div>
            <span className={styles.title}>NÆSTE LØB</span>
          </div>

          <div className={`${styles.mobileClose} ${isExpanded ? styles.open : ''}`} onClick={() => setIsExpanded(!isExpanded)}>
            <FaXmark className={styles.icon} />
          </div>

        </div>

        {eventsData.map((event) => (
        <div className={styles.event} key={event.id}>
          <h4 className={styles.track}>{event.attributes.title}</h4>
          <span className={styles.racetrack}>
            <FaLocationDot/>
            {event.attributes.racetrack.data.attributes.name}
          </span>
          <span className={styles.date}>
            <FaRegCalendar/>
            {formatEventDate(event.attributes.startDate,event.attributes.endDate)}
          </span>
          <Link className={styles.button} href={`/events/${event.attributes.slug}`}>Details <FaChevronRight/></Link>
        </div>
        ))}
        
      </div>
    </div>
  )
};

export default NextRace
