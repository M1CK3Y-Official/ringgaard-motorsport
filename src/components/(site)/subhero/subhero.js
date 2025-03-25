import styles from './subhero.module.css'
import Image from "next/image"

const SubHero = ({config}) => {

    return (
        <header className={styles.subhero}>
            <Image src={config.image} alt="subhero" width={4246} height={2830}></Image>

            <div className={styles.overlay}></div>

            <div className={styles.header}>
                <h1>{config.title}</h1>
                {config.subtitle ? <p>{config.subtitle}</p> : ''}
            </div>
        </header>
    )

}

export default SubHero