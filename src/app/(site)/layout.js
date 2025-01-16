import Navigation from "@/components/navigation/navigation";
import styles from './layout.module.css';

export default function siteLayout({children}) {
    return <>
        <div className={styles.body}>
            <Navigation />
            <div className={styles.layout}>
            {children}
            </div>
        </div>
    </>
}