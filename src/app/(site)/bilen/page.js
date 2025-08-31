import styles from './page.module.css';
import Car from '@/components/(site)/car/car';
import Image from "next/image"
import Link from 'next/link'
import SubHero from '@/components/(site)/subhero/subhero';
import Label from '@/components/(site)/label/label';
import TextContainer from '@/components/(site)/textContainer/textContainer';
import EventsTeaserSmall from '@/components/(site)/events/eventsTeaserSmall/eventsTeaserSmall';

export const metadata = {
    title: "Om Bilen",
}

export default function Page() {
    
    const subheroConfig = {
        title: 'Om Bilen',
        subtitle: 'Om Bilen',
        image: '/Heros/Bilen.jpg'
    }

    return (

        <> 

            <SubHero config={subheroConfig} />
            
            <div className='wrapper'> 

                    {/* <TextContainer /> */}

                        <div className={'textContainer'}>
                            <Label>OM KØRETØJET</Label>
                            <h2>Legend Car</h2>
                            <div className='body'>
                                <p>
                                    Legends Car Cup blev startet i Danmark i 2009 og tæller i dag et af motorsportens største løbsfelter.
                                    Bilerne er meningen at skulle ligne gamle klassiske biler fra USA fra 1930’erne. Selvom de ved første øjekast ikke ser ud af meget, så er der nogle sande bæster der er bygget ene og alene med det formål at køre race.
                                </p>

                                <p>
                                    Racerbilerne er bygget op over en rørramme og et sikkerhedsbur, er forsynet med en meget omdrejningsvillig motorcykelmotor samt et karrosseri, der er en 5/8-udgave af en amerikansk bilmodel.
                                    Bilerne er udstyret med baghjulstræk, hvilket gør dem sjove at køre… og sjove at kigge på.
                                </p>

                                <p>
                                    OK Mobil 1 Legends Car Cuppen er uden tvivl Danmarks sjoveste racerklasse – der er underholdning fra start til mål, når Legends Car Cuppen kører race.
                                </p>
                            </div>
                        </div>                        

                    <Car />

                    <EventsTeaserSmall />
            </div>
        </>

    )
}