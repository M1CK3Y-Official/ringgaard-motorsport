import styles from './page.module.css';
import Car from '@/components/(site)/car/car';
import Image from "next/image"
import Link from 'next/link'
import SubHero from '@/components/(site)/subhero/subhero';

export default function Page() {
    
    const subheroConfig = {
        title: 'Om Bilen',
        subtitle: 'Om Bilen',
        image: '/Heros/Bilen.jpg'
    }

    return (

        <> 

            <SubHero config={subheroConfig}></SubHero>
            
            <div className='wrapper'> 

                <div className={styles.cars}>

                    <div className={styles.introduction}>

                        <div className={'textContainer'}>
                            <h1>Legend Car</h1>
                                <p className='body'>I 2025 tager vi endnu et år i Legend Car Cuppen, men denne gang i den 3-cylindrede klasse, som er klassen med den nyeste og også hurtigste motor! I 2024 har vi nemlig kørt i den 4-cylindrede klasse, som er den lidt billigere og mere begyndervenlige klasse! Her er det gået rigtig godt med flere sejre og en samlet 4. plads i DM!
                                <br/><br/>
                                Vi er dog rigtig ambitiøse og det er derfor vi rykker over i den anden klasse! Vi skal med helt frem hvor det er rigtig sjovt! Vi skal frem og vinde!
                                <br/><br/>
                                Herunder kan du læse mere om vores biler, deres specifikationer og ydeevne.
                                </p>
                        </div>
                        
                    </div>

                    <Car></Car>
                </div>
            </div>
        </>

    )
}