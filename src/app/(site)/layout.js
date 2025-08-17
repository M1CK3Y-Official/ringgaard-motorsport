import Navigation from "@/components/(site)/navigation/navigation";
import styles from './layout.module.css';
import Footer from "@/components/(site)/footer/footer";
import ToTopBtn from "@/components/(site)/totopbtn/totopbtn";
import Blob from "@/components/(site)/blob/blob";

export default function siteLayout({children}) { 
    return (
    <>
        <div className={styles.body}>
            <Navigation />
            <ToTopBtn />
            <div className={styles.layout}>
                <main>

                    <Blob />
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    </>
    );
}