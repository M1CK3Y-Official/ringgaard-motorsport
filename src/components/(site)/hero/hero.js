import styles from './hero.module.css'
import Image from "next/image"
import Link from 'next/link'
import { FaAnglesDown } from 'react-icons/fa6'

const Hero = () => {

    return (
        <div className={styles.hero}>
            <Image src='/Heros/Forside.jpg' alt="hero" width={4246} height={2830}></Image>
            <div className={styles.overlay}></div>
            <div className={styles.header}>
                <h1>Mathias Ringgaard</h1>
                <h1>MOTORSPORT</h1>
                <p>Legend Car Cup</p>
                <Link href={'#introduction'}><FaAnglesDown className={styles.icon}></FaAnglesDown></Link>
            </div>
        </div>
    )

}

export default Hero