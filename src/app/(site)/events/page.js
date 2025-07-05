import SubHero from '@/components/(site)/subhero/subhero';
import styles from './page.module.css';
import Label from '@/components/(site)/label/label';
import Image from 'next/image';
import Events from '@/components/(site)/events/events';

export default function Page() {

    const subheroConfig = {
        title: 'Om Os',
        subtitle: 'Om Os',
        image: '/Heros/Om-os.jpg'
    }

    return (
        <>
            <SubHero config={subheroConfig} />

            <div className="wrapper">
                
                <div className={'textContainer'}>
                    Events
                </div>

            <Events />

        </div>

        </>

    )
}