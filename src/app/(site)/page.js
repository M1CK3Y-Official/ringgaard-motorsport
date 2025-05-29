import Footer from '@/components/(site)/footer/footer';
import styles from './page.module.css';
import Hero from '@/components/(site)/hero/hero';
import Car from '@/components/(site)/car/car';
import Introduction from '@/components/(site)/introduction/introduction';
import SponsorsTeaser from '@/components/(site)/sponsorsTeaser/sponsorsTeaser';
import TeamTeaser from '@/components/(site)/teamTeaser/teamTeaser';

export default function Page() {

    return (

        <div className={styles.container}>
            <Hero></Hero>
                <Introduction></Introduction>
                <TeamTeaser></TeamTeaser>
                <SponsorsTeaser></SponsorsTeaser>
                {/* <Newsletter></Newsletter> */}
                {/* <Car></Car> */}
        </div>

    )
}