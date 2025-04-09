import styles from './subhero.module.css'
import Image from "next/image"
import Link from 'next/link'

const SubHero = ({config}) => {

    const titleParts = config.title.split(' '); // Split the title into words
    const lastWord = titleParts.pop(); // Extract the last word
    const restOfTitle = titleParts.join(' '); // Join the rest of the title back together

    

    return (
        <header className={styles.subhero}>
            <Image src={config.image} alt="subhero" width={4246} height={2830}></Image>

            <div className={styles.overlay}></div>

            <div className={styles.header}>
                <span className={styles.title}>
                    {restOfTitle} <span className={styles.lastWord}>{lastWord}</span>
                </span>

                {config.subtitle ? <p><Link href="/">Forside &gt; </Link>{config.subtitle}</p> : ''}
            </div>
        </header>
    )

}

export default SubHero