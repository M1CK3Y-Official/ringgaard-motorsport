// 'use client';
import EventHero from "@/components/(site)/subhero/eventhero";
import styles from "./page.module.css";
import Label from "@/components/(site)/label/label";
import Image from "next/image";
import Events from "@/components/(site)/events/events";
import Link from "next/link";
import { FaRegClock, FaLocationDot, FaFlagCheckered, FaRegCalendar, FaTicket } from "react-icons/fa6";
import { FaCheckCircle, FaInfoCircle  } from "react-icons/fa";
import { getEventsDataBySlug } from "@/services/data.service";


// 🔹 Dynamisk metadata
export async function generateMetadata({ params }) {
  const slug = params.slug;
  const event = await getEventsDataBySlug(slug);

  if (!event) {
    return {
      title: "Event ikke fundet",
      description: "Dette event kunne ikke findes",
    };
  }

  const { title, image } = event.attributes;

  return {
    title: `${title}`, // Dynamisk title
    description: `Se detaljer om ${title}`,
    openGraph: {
      title: title,
      description: `Se detaljer om ${title}`,
      images: [
        {
          url: image?.data?.attributes?.url || "/fallback.jpg",
          width: image?.data?.attributes?.width || 1200,
          height: image?.data?.attributes?.height || 630,
          alt: image?.data?.attributes?.alternativeText || title,
        },
      ],
    },
  };
}







export default async function Page({ params }) {
  const slug = params.slug;
  const event = await getEventsDataBySlug(slug);

  if (!event) return <div>Eventet findes ikke</div>;

  const { title, startDate, endDate, image, racetrack, description, ticket, address } = event.attributes;


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

  const eventDate = (
      <>
        {formatEventDate(startDate,endDate)}
      </>
  )
  const eventTime = (
      <>
        {event.attributes.startDate && new Date(event.attributes.startDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', })}
      </>
  )

  const eventheroConfig = {
    title: title,
    slug: title,
    racetrack: racetrack.data.attributes.name,
    location: racetrack.data.attributes.location,
    address: racetrack.data.attributes.address,
    date: eventDate, 
    time: eventTime,
    image: {
      'url' : image.data.attributes.url,
      'width' : image.data.attributes.width,
      'height' : image.data.attributes.height,
      'alt' : image.data.attributes.alternativeText || title || "Event billede",
    }
  };

  return (
    <>
      <EventHero config={eventheroConfig} />

      <div className="wrapper">
        <div className={styles.eventContainer}>
          <article className={styles.eventDescription}>
            <div>
              <h2>{title}</h2>
                            
              <div className="prose max-w-none">
                {description?.map((block, index) => {
                  if (block.type === "heading") {
                    const HeadingTag = `h${block.level}`;
                    return (
                      <HeadingTag key={index} className={styles.headingtag}>
                        {block.children.map((child, i) => child.text).join("")}
                      </HeadingTag>
                    );
                  }

                  if (block.type === "paragraph") {
                    return (
                      <p key={index} className={styles.paragraph}>
                        {block.children.map((child, i) => child.text).join("")}
                      </p>
                    );
                  }

                  if (block.type === "list") {
                    return (
                    <div className={styles.eventHighlights} key={index}>
                    <h4>Event Højdepunkter</h4>
                      <ul  className={styles.list} >
                        {block.children.map((item, i) => (

                        <li key={i} >
                          <span>
                            <FaCheckCircle className={styles.bulletIcon} />
                          </span>
                          {item.children.map((child, j) => child.text).join("")}
                        </li>
                        ))}
                      </ul>
                      </div>
                    );
                  }

                  return null;
                })}
              </div>
            </div>
          </article>
          <aside className={styles.eventDetails}>
            <div className={styles.eventInfo}>
              <h3> <FaInfoCircle />Event Information</h3>
              <div className={styles.content}>
                <div className={styles.info}>
                  <time dateTime={startDate}>
                    <FaRegCalendar className={styles.icon}/>
                    {eventDate}
                  </time>
                </div>
                <div className={styles.info}>
                  <time dateTime={eventTime}>
                    <FaRegClock className={styles.icon}/>
                    Kl {eventTime}
                  </time>
                </div>
                <div className={styles.info}>
                  <address>
                    <FaLocationDot className={styles.icon}/> 
                    {racetrack.data.attributes.address}
                  </address>
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
            </div>
            <div className={styles.eventTicket}>
              <h3><FaTicket /> Billetter</h3>
              <p>Tag familie og venner med til en uforglemmelig motorsportsweekend!</p>
              <Link href={ticket} target="_blank" rel="noopener noreferrer" className={styles.ticketLink}>
                  <FaTicket /> Køb billetter
              </Link>
            </div>
          </aside>
          
        </div>

        {/* <Events /> */}
      </div>
    </>
  );
}
