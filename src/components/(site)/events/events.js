"use client";
import { useEffect, useState } from "react";
import styles from "./events.module.css";
import { getEventsData } from "@/services/data.service";
import Image from "next/image";

const Events = () => {
  const [eventsData, setEventsData] = useState([]);

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
        <div className={styles.textContainer}>Events</div>

        <div className={styles.eventsContainer}>
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

              <p className={styles.eventDate}>
                {new Date(event.attributes.startDate).toLocaleDateString()}
              </p>

              <div className={styles.eventDescription}>
                {event.attributes.test &&
                  event.attributes.test.map((item, idx) => (

                    <div key={idx}>
                      {item.type === "paragraph" &&
                        item.children.map((child, cidx) => (
                          <p key={cidx}>{child.text}</p>
                        ))}
                    </div>

                  ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
