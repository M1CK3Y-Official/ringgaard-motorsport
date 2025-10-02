import styles from './teamIntro.module.css';
import Label from '@/components/(site)/label/label';
import Image from 'next/image';

const TeamIntro = () => {
  return (
    <section className="wrapper">
                
                <div className={`${styles.textContainer} textContainer`}>
                    <Label>HOLDET</Label>
                    <h2 className={styles.title}>
                        <span>Hvem er </span>vi?
                    </h2>
                    <div className={`${styles.body} body`}>
                        <p>
                        Mathias Ringgaard Motorsport er et dansk motorsports team med ambitionerne helt i top! Teamet har siden 2015 deltaget i flere store gokartserier, men tog i 2023 beslutningen om at rykke i banesport! 2024 har været teamets debutsæson, som er foregået i Legend Car Cup, hvor det blev til en flot 4 plads i DM! Vi er et team i konstant udvikling, og fremtiden kommer til at byde på en masse spændende!
                        </p>

                        <p>
                        Igen i 2025 giver teamet den gas i Legend Car Cuppen, hvor målet nu er at slutte helt i top og kæmpe med om DM titlen! Ambitionen er helt sikkert at blive et stort og anerkendt team i Dansk Motorsport, og samtidig er det også at kunne skabe et stort erhvervsnetværk herom!
                        </p>

                        <p>
                        Alle fortjener at opleve hvad motorsporten, og racerverdenen kan, og vi vil rigtig gerne være med til at sørge for at endnu flere unge får øjnene op for den fede sportsgren! Derfor er det også en stor ambition for os, at hjælpe andre unge i gang med sporten og brede sporten blandt folket!
                        </p>
                    </div>

                    <hr className={styles.line}></hr>
                    <div className={styles.teamInfo}>
                        <div className={styles.infoGroup}>
                            <h3>2020</h3>
                            <span>Team Founded</span>
                        </div>
                        <div className={styles.infoGroup}>
                            <h3>6</h3>
                            <span>Team Members</span>
                        </div>
                        <div className={styles.infoGroup}>
                            <h3>15+</h3>
                            <span>Race Victories</span>
                        </div>
                    </div>
                </div>

            </section>
  )
};

export default TeamIntro;
