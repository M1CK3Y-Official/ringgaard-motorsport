import Navigation from "@/components/(site)/navigation/navigation";
import styles from './layout.module.css';
import Footer from "@/components/(site)/footer/footer";
import ToTopBtn from "@/components/(site)/totopbtn/totopbtn";

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