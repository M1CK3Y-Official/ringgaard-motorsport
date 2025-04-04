import styles from './page.module.css';
import Car from '@/components/(site)/car/car';
import Image from "next/image"
import Link from 'next/link'
import SubHero from '@/components/(site)/subhero/subhero';

export default function Page() {
    
    const subheroConfig = {
        title: 'Om Bilen',
        subtitle: 'Legend Car Cup',
        image: '/Heros/Bilen.jpg'
    }

    return (

        <> 

            <SubHero config={subheroConfig}></SubHero>
            
            <div className={styles.wrapper}> 

                <div className={styles.cars}>

                    <div id='introduction' className={styles.introduction}>
                        <h2>3-Cylindret Legend Car i 2025</h2>

                        <div className={styles.textContainer}>
                            <p>I 2025 tager vi endnu et år i Legend Car Cuppen, men denne gang i den 3-cylindrede klasse, som er klassen med den nyeste og også hurtigste motor! I 2024 har vi nemlig kørt i den 4-cylindrede klasse, som er den lidt billigere og mere begyndervenlige klasse! Her er det gået rigtig godt med flere sejre og en samlet 4. plads i DM!</p>

                            <p>Vi er dog rigtig ambitiøse og det er derfor vi rykker over i den anden klasse! Vi skal med helt frem hvor det er rigtig sjovt! Vi skal frem og vinde!</p>

                            <p>Herunder kan du læse mere om vores biler, deres specifikationer og ydeevne.</p>
                        </div>
                        
                    </div>

                    <Car></Car>
                </div>
            </div>
        </>

    )
}