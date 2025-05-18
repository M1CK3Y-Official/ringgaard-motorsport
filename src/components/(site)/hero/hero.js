import styles from './hero.module.css'
import Image from "next/image"
import Link from 'next/link'
import { FaAnglesDown } from 'react-icons/fa6'
import NextRace from '../nextrace/nextrace'


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
            <Image src='/Heros/Forside.jpg' alt="hero" width={4246} height={2830}></Image>
            <div className={styles.overlay}></div>
            <div className={styles.header}>
                <NextRace></NextRace>
                <h1>
                    <span>Mathias Ringgaard</span>
                    <span>MOTORSPORT</span> 

                    {/* <span className={styles.title}>
                        {title.split(" ").slice(0, -1).join(" ")}{" "}
                        <span className={styles.lastWord}>{title.split(" ").slice(-1)}</span>
                    </span> */}
                </h1>
                <p>Legend Car Cup</p>
                <Link href={'#introduction'}><FaAnglesDown className={styles.icon}></FaAnglesDown></Link>
            </div>
        </section>
    )

}

export default Hero