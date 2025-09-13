import SubHero from '@/components/(site)/subhero/subhero';
import styles from './page.module.css';
import Label from '@/components/(site)/label/label';
import Image from 'next/image';
import TimeLine from '@/components/(site)/timeline/timeline';
import Team from '@/components/(site)/team/team';

export const metadata = {
    title: "Om Os",
}

export default function Page() {

    const subheroConfig = {
        title: 'Om Os',
        subtitle: 'Om Os',
        image: '/Heros/Om-os.jpg'
    }

    return (
        <>
            <SubHero config={subheroConfig} />

            <Team></Team>
            <TimeLine></TimeLine>
            

            <div className="wrapper">
                
                <div className={'textContainer'}>
                    <Label>HOLDET</Label>
                    <h2>Hvem er vi?</h2>
                    <div className='body'>
                        <p>
                        Mathias Ringgaard Motorsport er et dansk motorsports team med ambitionerne helt i top!
                        </p>

                        <p>
                        Teamet har siden 2015 deltaget i flere store gokartserier, men tog i 2023 beslutningen om at rykke i banesport! 2024 har været teamets debutsæson, som er foregået i Legend Car Cup, hvor det blev til en flot 4 plads i DM!
                        </p>

                        <p>
                        Igen i 2025 giver teamet den gas i Legend Car Cuppen, hvor målet nu er at slutte helt i top og kæmpe med om DM titlen!
                        </p>

                        <p>
                        Mathias Ringgaard Motorsport er et team i konstant udvikling, og fremtiden kommer til at byde på en masse spændende!
                        </p>

                        <p>
                        Ambitionen er helt sikkert at blive et stort og anerkendt team i Dansk Motorsport, og samtidig er det også at kunne skabe et stort erhvervsnetværk herom!
                        </p>

                        <p>
                        Alle fortjener at opleve hvad motorsporten, og racerverdenen kan, og vi vil rigtig gerne være med til at sørge for at endnu flere unge får øjnene op for den fede sportsgren! Derfor er det også en stor ambition for os, at hjælpe andre unge i gang med sporten og brede sporten blandt folket!
                        </p>
                    </div>
                </div>


                <div className={'textContainer'}>
                    <Label>GRUNDLÆGGER</Label>
                    <h2>Lidt om mig</h2>
                    <div className={styles.imageContainer}>
                        <Image className={styles.image} src="/People/Mathias2.jpg" alt="Mathias Ringgaard" width={4702} height={3134}></Image>
                        <div className={styles.overlay}></div>
                    </div>
                    <div className='body'>
                        <p>
                        Mit navn er Mathias Ringgaard, og det er mig der har den fantastiske fornøjelse af at være racerkører! Jeg er 18 år gammel, jeg bor i Ikast og så er jeg til hverdag ved at uddanne mig som mekaniker hos STS biler Ikast
                        </p>

                        <p>
                        Jeg har altid haft massere af benzin i blodet, som nok kommer fra at både min mor og min morbror også selv har kørt ræs i mange år!
                        </p>

                        <p>
                        Jeg startede i lidt udlejningsgokart i 2013, og fik min første rigtig gokart som 9-årig i 2015. Siden da har min far og jeg kørt land og rige rundt for at deltage i alverdens gokartløb weekend efter weekend! Her blev det bl.a. til 2x DM bronze, og et år fik vi også Bronze til det Nordisk mesterskab! Heriblandt er også flere sejre i forskellige afdelinger.
                        </p>

                        <p>
                        I vinteren 2023 tog vi så beslutningen om at vi ville prøve noget andet og efter nogle få test i en Legend Car blev det det vi skulle! Det koster rigtig rigtig mange penge, så jeg var selv ude og finde sponsorater for 250.000! Det var svært og lidt hård men nødvendigt når man dyrker sådan en dyr sport!
                        </p>

                        <p>
                        Og det var så starten på et kapitel der forhåbentligt varer mange år endnu!
                        </p>

                    </div>
                </div>

        </div>

        </>

    )
}