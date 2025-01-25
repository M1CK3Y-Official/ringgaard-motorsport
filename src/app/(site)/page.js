import Footer from '@/components/footer/footer';
import styles from './page.module.css';
import Hero from '@/components/hero/hero';

export default function Page() {
    return (

        <div className={styles.container}>
            <Hero></Hero>
            <div id='introduction' className={styles.introduction}>fefe</div>
            {/* <Introduction></Introduction> */}
            {/* <Newsletter></Newsletter> */}
        </div>

    )
}