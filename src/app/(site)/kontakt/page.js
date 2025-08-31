import Label from '@/components/(site)/label/label';
import styles from './page.module.css';
import Car from '@/components/(site)/car/car';
import SubHero from '@/components/(site)/subhero/subhero';
import Image from "next/image"
import Link from 'next/link'

export const metadata = {
    title: "Kontakt",
}

export default function Page() {

    const subheroConfig = {
        title: 'Kontakt',
        subtitle: 'Kontakt',
        image: '/Heros/Om-os.jpg'
    }

    return (

        <>
        
            <SubHero config={subheroConfig} />

            <div className='wrapper'>

                <div className={'textContainer'}>
                    <Label>HENVENDELSER</Label>
                    <h2>Kontakt os</h2>
                    <div className='body'>
                        <p>
                            Hvis du har spørgsmål til mig eller teamet omkring et eller andet, eller hvis du gerne vil lave et samarbejde med os, så tøv ikke med at kontakte os! 
                        </p>

                        <form action={''}>
                            <div className={styles.formContainer}>
                                <label htmlFor="name">Navn:</label>
                                <input type="text" id="name" name="name" required />

                                <label htmlFor="email">E-mail:</label>
                                <input type="email" id="email" name="email" required />

                                <label htmlFor="message">Besked:</label>
                                <textarea className={styles.message} id="message" name="message" rows="4" required></textarea>

                                <button type="submit">Send</button>
                            </div>
                        </form>

                        <p >
                            Vi kan kontaktes på:
                        </p>
                        
                        <p style={{ display: "flex", flexDirection: "column" }}>

                            <span>
                                Tlf: 30 32 47 51
                            </span>
                            <span>
                                Mail: m.ringgaard@icloud.com
                            </span>
                        </p>

                        <p>
                            Eller på facebooksiden Mathias Ringgaard Motorsport, hvor du altid kan skrive til os på Messenger.
                        </p>

                        
                    </div>
                </div>

            </div>
        
        </>

    )
}