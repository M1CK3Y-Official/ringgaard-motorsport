"use client";
import { useEffect, useState } from "react";
import styles from "./events.module.css";
import { getEventsData } from "@/services/data.service";
import Image from "next/image";
import Link from "next/link";
import { FaCircleInfo, FaRegCalendar, FaLocationDot, FaTrophy, FaRegClock, FaFlagCheckered, FaFilter   } from "react-icons/fa6";
import { FaExternalLinkAlt  } from "react-icons/fa";
import Spinner from '@/components/(site)/spinner/spinner';

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEventsData = async () => {
      try {
        setIsLoading(true);
        const fetchedEventsData = await getEventsData();
        console.log("Fetched Events data:", fetchedEventsData);

        setEventsData(fetchedEventsData);
        setIsLoading(false);
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

  // const eventTypes = ["All", ...new Set(eventsData.map(event => event.attributes.type))];

  const typeColors = {
    "legend car cup": "#025bff",
    "special event": "#912fd1ff",
    "championship": "#FF5733",
    "default": "#28a745"
  }

  const filters = [
    { key: "all", label: "Alle Events" },
    { key: "legend car cup", label: "Legend Car Cup" },
    { key: "special event", label: "Special Events" },
    { key: "championship", label: "Mesterskab" },
  ];

  const typeLabels = {
    all: "Alle Events",
    championship: "Mesterskab",
    "legend car cup": "Legend Car Cup",
    "special event": "Special Event"
  }


  return (
    <div>
      {isLoading ? (
            <Spinner />
        ) : (
            <div className={styles.wrapper}>

              <div className={styles.eventsContainer}>

                <div className={styles.bar}>

                  <div className={styles.options}>
                    {filters.map(filter => {
                      const hasEvents =
                        filter.key === "all"
                          ? eventsData.length > 0
                          : eventsData.some(event =>
                              event.attributes.type.toLowerCase() === filter.key.toLocaleLowerCase()
                            );
                      return (
                        <button 
                          key={filter.key} 
                          className={styles.option} 
                          role="tab" 
                          aria-selected={selected === filter.key} 
                          onClick={() => hasEvents && setSelectedTab(filter.key)} 
                          disabled={!hasEvents}
                        >
                          {filter.label}
                        </button>
                      );
                    })}
                  </div>

                  <div className={styles.filter}>
                    <FaFilter />{" "}
                    <span className={styles.desktopText}>
                      Sorteret efter: {typeLabels[selected] || selected}
                    </span>
                    
                    <label className={styles.mobileDropdown}>
                      Sorteret efter:
                      <select name="option" value={selected} onChange={e => setSelectedTab(e.target.value)} className={styles.select}>
                        {filters.map(filter => {
                          const hasEvents =
                            filter.key === "all"
                              ? eventsData.length > 0
                              : eventsData.some(event =>
                                event.attributes.type.toLowerCase() === filter.key.toLocaleLowerCase()
                              );
                            return (  
                              <option value={filter.key} disabled={!hasEvents} key={filter.key}>
                                {filter.label}
                              </option>
                            );
                        })}
                        </select>
                      </label>
                    
                  </div>

                  
                  
                </div>

                <div className={styles.eventsList}>
                {filteredEvents.map((event) => (
                  <div key={event.id} className={styles.eventCard}>

                    <div className={styles.eventImage}>

                        {event.attributes?.image?.data?.attributes && (
                          <Image
                          src={event.attributes?.image?.data?.attributes?.url}
                          alt={`${event.attributes?.image?.data?.attributes?.alternativeText} : ''`}
                          width={event.attributes?.image?.data?.attributes?.width}
                          height={event.attributes?.image?.data?.attributes?.height}
                          className={styles.eventImage}/>
                        )}
                      <div className={styles.overlay}>
                        <div className={styles.eventType} style={{ backgroundColor: typeColors[event.attributes.type?.toLowerCase()] || typeColors.default}}>
                          {typeLabels[event.attributes.type?.toLowerCase()] || event.attributes.type}
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
                        {event.attributes.description &&
                          event.attributes.description.map((item, idx) => {
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
                          <Link href={`/events/${event.attributes.slug}`} className={styles.button}>Flere Detaljer <FaCircleInfo /></Link>
                        </div>
                        {event.attributes.ticket && (
                          <div className={styles.eventButton}>
                            <Link href={event.attributes.ticket} target="_blank"  className={styles.button}>Køb Biletter <FaExternalLinkAlt /></Link>
                          </div>
                        )}
                      </div>

                    </div>

                  </div>
                ))}
                </div>
              </div>
            </div>
            )}
    </div>
  );
};

export default Events;
