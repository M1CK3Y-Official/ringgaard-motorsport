import styles from './hero.module.css'
import Image from "next/image"
import Link from 'next/link'
import { FaAnglesDown } from 'react-icons/fa6'

const Hero = () => {

    return (
        <section className={styles.hero}>
            <Image src='/Heros/Forside.jpg' alt="hero" width={4246} height={2830}></Image>
            <div className={styles.overlay}></div>
            <div className={styles.header}>
                <h1>
                    <span>Mathias Ringgaard</span>
                    <span>MOTORSPORT</span> 
                </h1>
                <p>Legend Car Cup</p>
                <Link href={'#introduction'}><FaAnglesDown className={styles.icon}></FaAnglesDown></Link>
            </div>
        </section>
    )

}

export default Hero