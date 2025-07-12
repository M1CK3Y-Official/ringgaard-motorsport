'use client';
import SubHero from '@/components/(site)/subhero/subhero';
import styles from './page.module.css';
import Label from '@/components/(site)/label/label';
import Image from 'next/image';
import Events from '@/components/(site)/events/events';
import { useEffect, useState } from 'react';

export default function Page({params}) {
    console.log(params);


    const [eventsData, setEventsData] = useState([]);

    const subheroConfig = {
        title: 'Event',
        subtitle: 'Events',
        image: '/Heros/Om-os.jpg'
    }

    useEffect(() => {
        const fetchEventsData = async () => {
            try {
                const data = await getEventsDataByID(params.id);
                console.log('Fetched Events data:', data);
                setEventsData(data);
            } catch (error) {
                console.error('Error fetching events data:', error);
            }
        };
        fetchEventsData();
    }, [params.id]);

    return (
        <>
            <SubHero config={subheroConfig} />

            <div className="wrapper">
                
                <div className={'textContainer'}>
                    <h3>{eventsData.title}</h3>
                </div>

            {/* <Events /> */}

        </div>

        </>

    )
}
