"use client";
import { useEffect, useState } from "react";
import { getSponsorsData } from "@/services/data.service";
import styles from './sponsors.module.css';
import Image from "next/image";
import Link from "next/link";



const Sponsors = () => {

    const [sponsorsData, setSponsorsData] = useState([]);
    useEffect(() => {
        const fetchSponsorsData = async () => {
            try {
                const fetchedSponsorsData = await getSponsorsData();
                console.log("Fetched Sponsors data:", fetchedSponsorsData);
                setSponsorsData(fetchedSponsorsData);
            } catch (error) {
                console.error("Error fetching Sponsors data:", error);
            }
        };
        fetchSponsorsData();
    }, []);

    // if (!sponsorsData || sponsorsData.length === 0) {
    //     return <div className={styles.loading}>Loading Sponsors...</div>;
    // }

  return (
    <div className={styles.sponsors}>
    {Array.isArray(sponsorsData) && sponsorsData.map((sponsor) => (
      <div key={sponsor.id} className={styles.sponsor}>
        <Link href={sponsor.attributes?.url || "#"} target="_blank" rel="noopener noreferrer">
          {sponsor.attributes?.logo?.data?.attributes?.url ? (
            <Image
              src={sponsor.attributes.logo.data.attributes.url}
              alt={sponsor.attributes.name || "Sponsor logo"}
              width={sponsor.attributes.logo.data.attributes.width || 100}
              height={sponsor.attributes.logo.data.attributes.height || 100}
              className={styles.sponsorLogo}
              
            />
          ) : (
            <span className={styles.noLogo}>{sponsor.attributes.name || "Intet logo"}</span>
          )}
        </Link>
      </div>
    ))}
  </div>
  )
};

export default Sponsors;
