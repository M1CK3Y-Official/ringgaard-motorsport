import styles from './page.module.css';
import Car from '@/components/car/car';
import Image from "next/image"
import Link from 'next/link'

export default function Page() {

    return (

        <div className={styles.container}> 
            <div className={styles.hero}>

                <Image src='/Heros/Bilen.jpg' alt="hero" width={4246} height={2830}></Image>

                <div className={styles.overlay}></div>

                <div className={styles.header}>
                    <h1>Om Bilerne</h1>
                    <p>Legend Car</p>
                </div>

            </div>
            <Car></Car>
        </div>

    )
}