import AdminNavigation from '@/components/(admin)/adminNavigation/adminNavigation';
import styles from './layout.module.css';
import { ralewayFont } from '@/utils/fonts';

export const metadata = {
    title: 'Mathias Ringgaard Motorsport - ADMIN',
    description: 'Admin panel for ringgaardmotorsport.dk',
}
  
export default function adminLayout({ children }) {
    return <div className={`${styles.layout} ${ralewayFont.className}`}>
        <AdminNavigation />
        <div className={styles.container}>
            {children}
        </div>
    </div>
}