import Navigation from "@/components/navigation/navigation";
import styles from './layout.module.css';
import Footer from "@/components/footer/footer";

export default function siteLayout({children}) {
    return <>
        <div className={styles.body}>
            <Navigation />
            <div className={styles.layout}>
            {children}
            </div>
            <Footer />
        </div>
    </>
}