import Navigation from "@/components/navigation/navigation";
import styles from './layout.module.css';
import Footer from "@/components/footer/footer";
import ToTopBtn from "@/components/totopbtn/totopbtn";

export default function siteLayout({children}) {
    return (
    <>
        <div className={styles.body}>
            <Navigation />
            <ToTopBtn />
            <div className={styles.layout}>
            {children}
            </div>
            <Footer />
        </div>
    </>
    );
}