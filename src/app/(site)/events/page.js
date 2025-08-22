import SubHero from '@/components/(site)/subhero/subhero';
import styles from './page.module.css';
import Label from '@/components/(site)/label/label';
import Image from 'next/image';
import Events from '@/components/(site)/events/events';

export default function Page() {

    const subheroConfig = {
        title: 'Kommende Events',
        subtitle: 'Events',
        image: '/Heros/Events.jpg'
    }

    return (
        <>
            <SubHero config={subheroConfig} />

            <div className="wrapper">
                
                <div className={'textContainer'}>
                    <Label>2025 Sæson</Label>
                    <h2>Kommende Events</h2>
                    <div className='body'>
                        <p>
                        I 2025 tager vi endnu et år i Legend Car Cuppen, men denne gang i den 3-cylindrede klasse, som er klassen med den nyeste og også hurtigste motor!
                        <br />
                        <br />
                        I 2024 har vi nemlig kørt i den 4-cylindrede klasse, som er den lidt billigere og mere begyndervenlige klasse! Her er det gået rigtig godt med flere sejre og en samlet 4. plads i DM! 
                        <br />
                        <br />
                        Vi er dog rigtig ambitiøse og det er derfor vi rykker over i den anden klasse! Vi skal med helt frem hvor det er rigtig sjovt! Vi skal frem og vinde!

                        </p>
                    </div>
                </div>

            <Events />

        </div>

        </>

    )
}