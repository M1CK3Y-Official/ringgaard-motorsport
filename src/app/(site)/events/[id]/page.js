// 'use client';
import SubHero from "@/components/(site)/subhero/subhero";
import styles from "./page.module.css";
import Label from "@/components/(site)/label/label";
import Image from "next/image";
import Events from "@/components/(site)/events/events";
// import { useEffect, useState } from 'react';
import { getEventsDataByID } from "@/services/data.service";

export default async function Page({ params }) {
  const id = params.id;
  const event = await getEventsDataByID(id);

  const subheroConfig = {
    title: "Event",
    subtitle: "Events",
    image: "/Heros/Om-os.jpg",
  };

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

  return (
    <>
      {/* <SubHero config={subheroConfig} /> */}
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

      <div className="wrapper">


        <div className={"textContainer"}>
          <h3>{title}</h3>
          <p>
            {new Date(startDate).toLocaleDateString()} –{" "}
            {new Date(endDate).toLocaleDateString()}
          </p>

          
          {/* <p>{test}</p> */}
          {racetrack?.data && (
            <p className="text-md mb-4">
              <strong>Bane:</strong> {racetrack.data.attributes.name} –{" "}
              {racetrack.data.attributes.location}
            </p>
          )}
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

        {/* <Events /> */}
      </div>
    </>
  );
}
