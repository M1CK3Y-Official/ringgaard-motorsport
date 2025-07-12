"use client";
import Link from "next/link";
import Label from "../../label/label";
import styles from "./eventsTeaserSmall.module.css";
import Image from "next/image";
import {
  FaCalendar,
  FaFlagCheckered,
  FaLocationDot,
  FaTrophy,
} from "react-icons/fa6";
import { useEffect, useState } from "react";
import { getEventsTeaserSmallData } from "@/services/data.service";


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

const EventsTeaserSmall = () => {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    const fetchEventsTeaserSmallData = async () => {
      try {
        const fetchedEventsTeaserSmallData = await getEventsTeaserSmallData();
        console.log("Fetched EventsTeaser data:", fetchedEventsTeaserSmallData);

        setEventsData(fetchedEventsTeaserSmallData);
      } catch (error) {
        console.error("Error fetching EventsTeaser data:", error);
      }
    };
    fetchEventsTeaserSmallData();
  }, []);

  return (
    <div className={styles.eventsTeaserSmall}>
      <div className={`${styles.textContainer} textContainer`}>
        <Label>2025 Sæson</Label>
        <h2 className={styles.title}>
          <span>Kommende </span>Events
        </h2>
        <p className={styles.description}>
          Følg med når det går løs for Mathias Ringgaard når han deltager i
          Danish Legend Car Cup. Her kan du se de kommende events og tage med os
          på banen!
        </p>
      </div>

      <div className={styles.eventsContainer}>
        {eventsData.map((event) => (
          <div className={styles.eventCard} key={event.id}>
            <div className={styles.eventImage}>
              <Image
                src={event.attributes.image.data.attributes.url}
                alt={event.attributes.title}
                width={event.attributes.image.data.attributes.width}
                height={event.attributes.image.data.attributes.height}
              />
              <span className={styles.round}>2025</span>
            </div>
            <div className={styles.eventInfo}>
              <h3 className={styles.eventTitle}>
                <div className={styles.iconBig}>
                  <FaTrophy />
                </div>
                <p>
                  {event.attributes.title}<span>{event.attributes.racetrack.data.attributes.name}</span>
                </p>
              </h3>
              <div className={styles.eventDetails}>
                <div className={styles.eventDate}>
                  <FaCalendar /> 
                  <span>
                    {formatEventDate(event.attributes.startDate, event.attributes.endDate)}
                  </span>
                </div>
                <div className={styles.eventLocation}>
                  <FaLocationDot /> 
                  <span>
                    Silkeborg, Denmark
                  </span>
                </div>
              </div>
              <Link className={styles.button} href="/events">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsTeaserSmall;
