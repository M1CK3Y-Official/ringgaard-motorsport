import styles from "./teamOwner.module.css";
import Label from "@/components/(site)/label/label";
import Image from "next/image";
import {FaRegChessPawn, FaRegHeart } from 'react-icons/fa6';


const TeamOwner = () => {
  return (
    <section className={styles.teamOwner}>

        <div className="sectionWrapper">


            <div className={styles.container}>

                <div className={styles.imageWrapper}>

                    <div className={styles.imageContainer}>
                        <Image
                            className={styles.image}
                            src="https://res.cloudinary.com/dzy6chk1k/image/upload/v1755869626/500117329_1275506471243432_5991277920663873675_n_7b19280782.jpg"
                            alt="Mathias Ringgaard"
                            width={1536}
                            height={2048}
                        ></Image>
                        <div className={styles.overlay}>

                            <div className={styles.profile}>
                                <span className={styles.name}>Mathias Ringgaard</span>
                                <span className={styles.role}>Professional Racing Driver</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.text}>

                    <div className={`${styles.textContainer} textContainer`}>
                        <Label>MØD KØREreN</Label>
                        <h2 className={styles.title}>
                            <span>Hvordan Det Hele </span>Startede
                        </h2>
                        
                        <div className={`${styles.body} body`}>
                            <p>
                                Mit navn er Mathias Ringgaard, og det er mig der har den fantastiske
                                fornøjelse af at være racerkører! Jeg er 18 år gammel, jeg bor i
                                Ikast og så er jeg til hverdag ved at uddanne mig som mekaniker hos
                                STS biler Ikast
                            </p>

                            <p>
                                Jeg har altid haft massere af benzin i blodet, som nok kommer fra at
                                både min mor og min morbror også selv har kørt ræs i mange år!
                            </p>

                            <p>
                                Jeg startede i lidt udlejningsgokart i 2013, og fik min første
                                rigtig gokart som 9-årig i 2015. Siden da har min far og jeg kørt
                                land og rige rundt for at deltage i alverdens gokartløb weekend
                                efter weekend! Her blev det bl.a. til 2x DM bronze, og et år fik vi
                                også Bronze til det Nordisk mesterskab! Heriblandt er også flere
                                sejre i forskellige afdelinger.
                            </p>

                            <p>
                                I vinteren 2023 tog vi så beslutningen om at vi ville prøve noget
                                andet og efter nogle få test i en Legend Car blev det det vi skulle!
                                Det koster rigtig rigtig mange penge, så jeg var selv ude og finde
                                sponsorater for 250.000! Det var svært og lidt hård men nødvendigt
                                når man dyrker sådan en dyr sport!
                            </p>

                            <p>
                                Og det var så starten på et kapitel der forhåbentligt varer mange år
                                endnu!
                            </p>
                        </div>

                        <div className={styles.perks}>
                            <div className={styles.perk}>
                                <div className={styles.icon}>
                                    <FaRegHeart />
                                </div>
                                <div className={styles.perkText}>
                                    <span>Passion</span>
                                    <p>Født med benzin i blodet, og har målet rettet efter toppen!</p>
                                </div>
                            </div>
                            <div className={styles.perk}>
                                <div className={styles.icon}>
                                    <FaRegChessPawn />
                                </div>
                                <div className={styles.perkText}>
                                    <span>Racecraft</span>
                                    <p>Gennemarbejdet og perfektioneret kunsten på banen!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default TeamOwner;
