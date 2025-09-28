import styles from './hero.module.css'
import Image from "next/image"
import Link from 'next/link'
import { FaAnglesDown } from 'react-icons/fa6'
import NextRace from '../nextrace/nextrace'
import Label from '../label/label'


const Hero = () => {

    // const [title, setTitle] = useState("");

    // useEffect(() => {
    //     const fetchTitle = async () => {
    //         try {
    //             const fetchedTitle = await getHeroTitle(); // Fetch the title from the API
    //             setTitle(fetchedTitle || "Mathias Ringgaard MOTORSPORT"); // Fallback title
    //         } catch (error) {
    //             console.error("Error fetching hero title:", error);
    //         }
    //     };
    //     fetchTitle();
    // }, []);

    return (
        <section className={styles.hero}>
            <Image src='https://res.cloudinary.com/dzy6chk1k/image/upload/v1752439039/511035020_1300251972102215_8955799233651876517_n_af99bde234.jpg' alt="hero" width={2048} height={1366}></Image>
                
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <div className={styles.header}>

                    <Label>Mathias Ringgaard Motorsport</Label>
                    <h1 className={styles.title}>
                        Målet er <span>Toppen </span>
                        Ambitionerne er der allerede.
                        
                    </h1>
                    <p className={styles.subTitle}>Oplev suset ved Legend Car-ræs med Mathias Ringgaard Motorsport. Følg med på vores rejse mod toppen af dansk motorsport.</p>

                    <div className={styles.buttons}>
                        <Link href="/bilen" className='button'>Udforsk Bilen</Link>
                        <Link href="/events" className='button'>Løbskalender</Link>
                    </div>

                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <span className={styles.statValue}>30+</span>
                            <span className={styles.statLabel}>Sponsorer</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statValue}>25+</span>
                            <span className={styles.statLabel}>Podieplaceringer</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statValue}>5+</span>
                            <span className={styles.statLabel}>Karrieresejre</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statValue}>10+</span>
                            <span className={styles.statLabel}>Team størrelse</span>
                        </div>
                    </div>

                </div>
            </div>
            <NextRace></NextRace>
        </section>
        
    )

}

export default Hero