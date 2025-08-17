import SubHero from '@/components/(site)/subhero/subhero';
import styles from './page.module.css';
import Label from '@/components/(site)/label/label';
import Image from 'next/image';
import Events from '@/components/(site)/events/events';

export default function Page() {

    const subheroConfig = {
        title: 'Kommende Events',
        subtitle: 'Events',
        image: '/Heros/Om-os.jpg'
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
                        Join us trackside for the thrilling Danish Legend Car Cup season. Below you&apos;ll find our complete racing schedule, featuring events at Denmark&apos;s premier racing circuits. Each event offers a unique challenge for our team and an exciting experience for spectators.
                        </p>
                    </div>
                </div>

            <Events />

        </div>

        </>

    )
}