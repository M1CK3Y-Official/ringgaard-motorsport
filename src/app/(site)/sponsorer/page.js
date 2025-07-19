import Label from '@/components/(site)/label/label';
import styles from './page.module.css';
import Car from '@/components/(site)/car/car';
import SubHero from '@/components/(site)/subhero/subhero';
import Image from "next/image"
import Link from 'next/link'

export default function Page() {

    const subheroConfig = {
        title: 'Teamet\'s Sponsorer',
        subtitle: 'Sponsorer',
        image: '/Heros/Om-os.jpg'
    }

    return (

        <>
        
            <SubHero config={subheroConfig} />

            <div className='wrapper'>

                <div className={'textContainer'}>
                    <Label>samarbejdspartnere</Label>
                    <h2>Kontakt os</h2>
                    <div className='body'>
                        <p>
                            Hvis du har spørgsmål til mig eller teamet omkring et eller andet, eller hvis du gerne vil lave et samarbejde med os, så tøv ikke med at kontakte os! 
                        </p>

                        <p>
                            Vi kan kontaktes på:
                        </p>
                        
                    </div>
                </div>

            </div>
        
        </>

    )
}