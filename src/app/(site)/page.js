import Footer from '@/components/footer/footer';
import styles from './page.module.css';
import Hero from '@/components/hero/hero';

export default function Page() {

    return (

        <div className={styles.container}>
            <Hero></Hero>
            <div id='introduction' className={styles.introduction}>
                <h2>3-Cylindret Legend Car i 2025</h2>

                <div className={styles.textContainer}>
                    <p>I 2025 tager vi endnu et år i Legend Car Cuppen, men denne gang i den 3-cylindrede klasse, som er klassen med den nyeste og også hurtigste motor!</p>

                    <p>I 2024 har vi nemlig kørt i den 4-cylindrede klasse, som er den lidt billigere og mere begyndervenlige klasse! Her er det gået rigtig godt med flere sejre og en samlet 4. plads i DM! </p>

                    <p>Vi er dog rigtig ambitiøse og det er derfor vi rykker over i den anden klasse! Vi skal med helt frem hvor det er rigtig sjovt! Vi skal frem og vinde!</p>
                </div>
                
            </div>
            {/* <Introduction></Introduction> */}
            {/* <Newsletter></Newsletter> */}
        </div>

    )
}