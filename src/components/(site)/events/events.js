"use client";
import { useEffect, useState } from "react";
import styles from "./events.module.css";
import { getEventsData } from "@/services/data.service";
import Image from "next/image";
import Link from "next/link";
import { FaCircleInfo, FaRegCalendar, FaLocationDot, FaTrophy, FaRegClock, FaFlagCheckered, FaFilter   } from "react-icons/fa6";
import { FaExternalLinkAlt  } from "react-icons/fa";

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

const Events = () => {
  const [eventsData, setEventsData] = useState([]);
  const [selected, setSelectedTab] = useState("all");

  useEffect(() => {
    const fetchEventsData = async () => {
      try {
        const fetchedEventsData = await getEventsData();
        console.log("Fetched Events data:", fetchedEventsData);

        setEventsData(fetchedEventsData);
      } catch (error) {
        console.error("Error fetching Events data:", error);
      }
    };
    fetchEventsData();
  }, []);


  const filteredEvents = eventsData.filter(event => {
    if (selected === "all") return true;
    if (selected === "upcoming") {
      return new Date(event.attributes.startDate) > new Date(); 
    }
    return event.attributes.type?.toLowerCase() === selected.toLowerCase();
  });

  const eventTypes = ["All", ...new Set(eventsData.map(event => event.attributes.type))];

  const typeColors = {
    "legend car cup": "#025bff",
    "special event": "#FF5733",
    "upcoming": "#28a745",
    "default": "#CCCCCC"
  }



  return (
    <div>
      <div className={styles.wrapper}>

        <div className={styles.eventsContainer}>

          <div className={styles.bar}>
            <div className={styles.options}>
              {eventTypes.map((type) => (
                <div key={type} className={styles.option} role="tab" aria-selected={selected === type.toLowerCase()} onClick={() => setSelectedTab(type.toLowerCase())}>{type}</div>
              ))}
              
            </div>
            <span className={styles.filter}><FaFilter /> Sorteret efter: {(selected === "all" ? "Alle Events" : selected).split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}</span>
          </div>

          <div className={styles.eventsList}>
          {filteredEvents.map((event) => (
            <div key={event.id} className={styles.eventCard}>

              <div className={styles.eventImage}>

                  <Image
                    src={event.attributes.image.data.attributes.url}
                    alt={`${event.attributes.image.data.attributes.alternativeText} : ''`}
                    width={event.attributes.image.data.attributes.width}
                    height={event.attributes.image.data.attributes.height}
                    className={styles.eventImage}
                  />
                <div className={styles.overlay}>
                  <div className={styles.eventType} style={{ backgroundColor: typeColors[event.attributes.type?.toLowerCase()] || typeColors.default}}>
                    {event.attributes.type}
                  </div>
                </div>
              </div>

              <div className={styles.eventDetails}>
                <h3 className={styles.eventTitle}><FaTrophy className={styles.icon} /><span>{event.attributes.title}</span></h3>
                <p className={styles.eventRacetrack}>
                  {event.attributes.racetrack.data.attributes.name}
                </p>
                <div className={styles.eventInfo}>
                  <div className={styles.eventDate} title="Begivenhedens dato">
                    <span>
                      <FaRegCalendar className={styles.icon}/>
                      {formatEventDate(event.attributes.startDate,event.attributes.endDate)}
                    </span>
                  </div>
                  <div className={styles.eventTime} title="Begivenhedens tidspunkt">
                    <span>
                      <FaRegClock className={styles.icon}/>
                      kl {event.attributes.startDate && new Date(event.attributes.startDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', })}
                    </span>
                  </div>
                  <div className={styles.eventLocation} title="Begivenhedens lokation">
                    <span>
                      <FaLocationDot className={styles.icon}/>
                      {event.attributes.racetrack.data.attributes.location}
                    </span>
                  </div>
                  <div className={styles.eventRaceDistance} title="Banens distance">
                    <span>
                      <FaFlagCheckered className={styles.icon}/>
                      {Number(event.attributes.racetrack.data.attributes.distance).toLocaleString("da-DK")} km
                    </span>
                  </div>
                </div>

                <div className={styles.eventDescription}>
                  {event.attributes.test &&
                    event.attributes.test.map((item, idx) => {
                      if (item.type === "paragraph") {
                        return (
                          <div key={idx} className={styles.paragraph}>
                            
                              {item.children.map((child, cidx) => {
                                if (child.type === "link") {
                                  return (
                                    <Link key={cidx} href={child.url} target="_blank" rel="noopener noreferrer" className={styles.ticketLink}>
                                      {child.children &&
                                        child.children.map((linkChild, lidx) => (
                                          <p key={lidx}>{linkChild.text}</p>
                                        ))}
                                    </Link>
                                  );
                                }
                                return <p key={cidx}>{child.text}</p>;
                              })}
                            
                          </div>
                        );
                      }
                      // Optionally handle other types here
                      return null;
                    })}

                    
                </div>

                <div className={styles.buttonGroup}>

                  <div className={styles.eventButton}>
                    <Link href={`/events/${event.id}`} className={styles.button}>Flere Detaljer <FaCircleInfo /></Link>
                  </div>
                  <div className={styles.eventButton}>
                    <Link href={event.attributes.ticket} target="_blank"  className={styles.button}>Køb Biletter <FaExternalLinkAlt /></Link>
                  </div>
                </div>

              </div>

            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
