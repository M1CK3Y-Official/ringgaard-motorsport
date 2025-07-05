"use client";
import Link from "next/link";
import Label from "../../label/label";
import styles from "./eventsTeaserBig.module.css";
import Image from "next/image";
import { FaCalendar, FaFlagCheckered, FaLocationDot } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { getEventsTeaserBigData } from "@/services/data.service";
import Countdown from "react-countdown";

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

const renderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
  startDate,
  endDate,
}) => {
  const now = new Date();

  if (now >= startDate && now <= endDate) {
    return <div className={styles.eventActive}>Sker lige nu!</div>;
  }

  if (completed && now > endDate) {
    return <span>Tiden er gået!</span>;
  }

  const formatNumber = (num) => num.toString().padStart(2, "0");

  return (
    <>
      <div className={styles.eventCountdownItem}>
        <span>{formatNumber(days)}</span>
        <span>DAGE</span>
      </div>
      <div className={styles.eventCountdownItem}>
        <span>{formatNumber(hours)}</span>
        <span>TIMER</span>
      </div>
      <div className={styles.eventCountdownItem}>
        <span>{formatNumber(minutes)}</span>
        <span>MINUTTER</span>
      </div>
      <div className={styles.eventCountdownItem}>
        <span>{formatNumber(seconds)}</span>
        <span>SEKUNDER</span>
      </div>
    </>
  );
};

const EventsTeaserBig = () => {
  const [eventsData, setEventsData] = useState([]);

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

  return (
    <section className={styles.eventsTeaserBig}>
      <div className="sectionWrapper">
        {eventsData.map((event) => (
          <div className={styles.eventContainer} key={event.id}>
            <div className={styles.eventImage}>
              <Image
                src={event.attributes.image.data.attributes.url}
                alt={event.attributes.title}
                width={event.attributes.image.data.attributes.width}
                height={event.attributes.image.data.attributes.height}
              />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.eventInfo}>
              <Label>Næste Løb</Label>

              <h2
                className={styles.title}
                data-aos="fade-right"
                data-aos-once="true"
              >
                <span>{event.attributes.title}</span>
              </h2>

              <div className={styles.eventData}>
                <div className={styles.eventDetails}>
                  <div
                    className={styles.eventDate}
                    data-aos="fade-right"
                    data-aos-once="true"
                  >
                    <span>
                      <FaCalendar className={styles.icon} />
                    </span>
                    <span>
                      {formatEventDate(
                        event.attributes.startDate,
                        event.attributes.endDate
                      )}
                    </span>
                  </div>

                  <div
                    className={styles.eventLocation}
                    data-aos="fade-right"
                    data-aos-once="true"
                    data-aos-delay="50"
                  >
                    <span>
                      <FaLocationDot className={styles.icon} />
                    </span>
                    <span>
                      {event.attributes.racetrack.data.attributes.location}
                    </span>
                  </div>

                  <div
                    className={styles.eventRound}
                    data-aos="fade-right"
                    data-aos-once="true"
                    data-aos-delay="100"
                  >
                    <span>
                      <FaFlagCheckered className={styles.icon} />
                    </span>
                    <span>15 Omgange</span>
                  </div>
                </div>

                <div
                  className={styles.eventButtons}
                  data-aos="fade-right"
                  data-aos-once="true"
                  data-aos-delay="150"
                >
                  <Link className={styles.button} href="/events">
                    Se Detaljer
                  </Link>
                  <Link className={styles.button} href="/events">
                    Løbskalender
                  </Link>
                </div>

                <div
                  className={styles.eventCountdown}
                  data-aos="fade-right"
                  data-aos-once="true"
                  data-aos-delay="200"
                >
                  <Countdown
                    date={new Date(event.attributes.startDate)}
                    renderer={(props) =>
                      renderer({
                        ...props,
                        startDate: new Date(event.attributes.startDate),
                        endDate: new Date(event.attributes.endDate),
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsTeaserBig;
