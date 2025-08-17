// 'use client';
import SubHero from "@/components/(site)/subhero/subhero";
import styles from "./page.module.css";
import Label from "@/components/(site)/label/label";
import Image from "next/image";
import Events from "@/components/(site)/events/events";
import Link from "next/link";
// import { useEffect, useState } from 'react';
import { FaRegClock, FaLocationDot, FaFlagCheckered, FaRegCalendar } from "react-icons/fa6";
import { getEventsDataBySlug } from "@/services/data.service";

export default async function Page({ params }) {
  const slug = params.slug;
  const event = await getEventsDataBySlug(slug);

  if (!event) return <div>Eventet findes ikke</div>;

  const { title, startDate, endDate, image, racetrack, test } =
    event.attributes;
  // const {test} = event.attributes.children.text;

  // const [eventsData, setEventsData] = useState([]);

  // useEffect(() => {
  //     const fetchEventsData = async () => {
  //         try {
  //             const data = await getEventsDataByID(params.id);
  //             console.log('Fetched Events data by id:', data);
  //             setEventsData(data);
  //         } catch (error) {
  //             console.error('Error fetching events data by id:', error);
  //         }
  //     };
  //     fetchEventsData();
  // }, [params.id]);

  // const subheroConfig = {
  //   title: "Event",
  //   subtitle: "Events",
  //   image: "/Heros/Om-os.jpg",
  // };

  return (
    <>
      {/* <SubHero config={subheroConfig} /> */}
      <div className={styles.header}>
        <div className={styles.imageContainer}>
          {image?.data && (
            <Image
              src={image.data.attributes.url}
              alt={image.data.attributes.alternativeText || ""}
              width={image.data.attributes.width}
              height={image.data.attributes.height}
              className="rounded-xl mb-6"
            />
          )}
        </div>
      </div>

      <div className="wrapper">
        <div className={styles.eventContainer}>
          <div className={styles.eventDescription}>
            <div>
              <h2>{title}</h2>
                            
              <section className="prose max-w-none">
                {test?.map((block, index) => {
                  if (block.type === "heading") {
                    const HeadingTag = `h${block.level}`;
                    return (
                      <HeadingTag key={index}>
                        {block.children.map((child, i) => child.text).join("")}
                      </HeadingTag>
                    );
                  }

                  if (block.type === "paragraph") {
                    return (
                      <p key={index}>
                        {block.children.map((child, i) => child.text).join("")}
                      </p>
                    );
                  }

                  return null;
                })}
              </section>
            </div>
          </div>
          <div className={styles.eventDetails}>
            <div className={styles.eventInfo}>
              <h3>Event Information</h3>
              <div className={styles.info}>
                <span>
                  <FaRegCalendar className={styles.icon}/>
                  {new Date(startDate).toLocaleDateString()} –{" "}
                  {new Date(endDate).toLocaleDateString()}
                </span>
              </div>
              <div className={styles.info}>
                <span>
                      <FaRegClock className={styles.icon}/>
                      kl {event.attributes.startDate && new Date(event.attributes.startDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', })}
                    </span>
              </div>
              <div className={styles.info}>
                <span>
                  <FaLocationDot className={styles.icon}/> {racetrack.data.attributes.name} –{" "}
                  {racetrack.data.attributes.location}
                </span>
              </div>
              <div className={styles.info}>
                <span>
                  <FaFlagCheckered className={styles.icon}/>
                  {Number(racetrack.data.attributes.distance).toLocaleString(
                    "da-DK"
                  )}{" "}
                  km
                </span>
              </div>
            </div>
            <div className={styles.eventTicket}>
              <h3>Get Your Tickets</h3>
              <p>Dont miss this incredible racing experience. Secure your tickets now!</p>
              <Link href="https://example.com/tickets" target="_blank" rel="noopener noreferrer" className={styles.ticketLink}>
                Køb billet
              </Link>
            </div>
          </div>
          
        </div>

        {/* <Events /> */}
      </div>
    </>
  );
}
