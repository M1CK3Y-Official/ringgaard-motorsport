import styles from './teaser.module.css'
import Image from "next/image"

const Teaser = ({config}) => {

    return (
        <header className={styles.teaser}>
            <Image src={config.image} alt="teaser" width={4246} height={2830}></Image>

            <div className={styles.overlay}></div>

            <div className={styles.header}>
                <h1>{config.title}</h1>
                <p>{config.subtitle}</p>
            </div>
        </header>
    )

}

export default Teaser