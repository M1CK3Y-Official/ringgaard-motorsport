import Label from '@/components/(site)/label/label';
import styles from './page.module.css';
import Car from '@/components/(site)/car/car';
import SubHero from '@/components/(site)/subhero/subhero';
import Image from "next/image"
import Link from 'next/link'
import Sponsors from '@/components/(site)/sponsors/sponsors';

export default function Page() {

    const subheroConfig = {
        title: 'Teamet\'s Sponsorer',
        subtitle: 'Sponsorer',
        image: '/Heros/Om-os.jpg'
    }

    return (

        <div className={styles.page}>
        
            <SubHero config={subheroConfig} />

            <div className='wrapper'>

                <div className={'textContainer'} style={{ textAlign: 'center' }}>
                    <Label>samarbejdspartnere</Label>
                    <h2>Der skal lyde en stor tak</h2>
                    <div className='body'>
                        <p>
                            Motorsport er dyrt, og intet af det i ser og læser her på siden ville aldrig kunne lade sig gøre uden vores fantastiske samarbejdspartnere.💙
                        </p>

                        <p>
                            Der skal derfor lyde en kæmpe stor tak til vores sponsorer herunder, som gør det muligt for os at køre med i de danske mesterskaber. 🙏
                        </p>
                        
                    </div>
                </div>

                <Sponsors />

            </div>
        
        </div>

    )
}