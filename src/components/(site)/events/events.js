"use client";
import { useEffect, useState } from "react";
import styles from "./events.module.css";
import { getEventsData } from "@/services/data.service";
import Image from "next/image";
import Link from "next/link";

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

  return (
    <div>
      <div className={styles.wrapper}>

        <div className={styles.eventsContainer}>

          <div className={styles.bar}>
            <div className={styles.options}>
              <div className={styles.option} role="tab" aria-selected={selected === "all"} onClick={() => setSelectedTab("all")}>All Events</div>
              <div className={styles.option} role="tab" aria-selected={selected === "upcoming"} onClick={() => setSelectedTab("upcoming")}>Upcoming</div>
              <div className={styles.option} role="tab" aria-selected={selected === "past"} onClick={() => setSelectedTab("past")}>Past Events</div>
              <div className={styles.option} role="tab" aria-selected={selected === "special"} onClick={() => setSelectedTab("special")}>Special Events</div>
            </div>
            <div className={styles.filter}>Filtered by: All Events</div>
          </div>

          {eventsData.map((event) => (
            <div key={event.id} className={styles.eventCard}>
              <Image
                src={event.attributes.image.data.attributes.url}
                alt={`${event.attributes.image.data.attributes.alternativeText} : ''`}
                width={event.attributes.image.data.attributes.width}
                height={event.attributes.image.data.attributes.height}
                className={styles.eventImage}
              />

              <h3 className={styles.eventTitle}>{event.attributes.title}</h3>
              <p className={styles.eventRacetrack}>
                {event.attributes.racetrack.data.attributes.name}
              </p>
              <p className={styles.eventDate}>
                {new Date(event.attributes.startDate).toLocaleDateString()}
              </p>

              <div className={styles.eventDescription}>
                {event.attributes.test &&
                  event.attributes.test.map((item, idx) => {
                    if (item.type === "heading") {
                      return (
                        <h4 key={idx} className={styles.heading}>
                          {item.children.map((child, cidx) => (
                            <span key={cidx}>{child.text}</span>
                          ))}
                        </h4>
                      );
                    }
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
                    if (item.type === "list" && item.format === "unordered") {
                      return (
                        <ul key={idx}>
                          {item.children.map((listItem, liIdx) => (
                            <li key={liIdx}>
                              {listItem.children.map((child, cidx) => (
                                <span key={cidx}>{child.text}</span>
                              ))}
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    // Optionally handle other types here
                    return null;
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
