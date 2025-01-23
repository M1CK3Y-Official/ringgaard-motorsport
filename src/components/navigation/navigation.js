'use client';
import { useState, useEffect } from 'react';
import styles from './navigation.module.css';
import { FaBars, FaXmark } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getMenuData } from '@/services/data.service';

const Navigation = () => {

    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [menuData, setMenuData] = useState([]);

    useEffect( () => {
        const getData = async () => {
            try {
                const data = await getMenuData();
                console.log("Data fetched:", data);
                setMenuData(data);
            } catch (error) {
                console.log("Error fetching menu data:", error);
            }
        }
        getData();
    }, []);

    return (

        <nav className={styles.nav}>

            <div className={styles.navBar}>
                <div className={styles.logo}>
                    <Link href='/'><Image src='/Logos/Blue/Logo_Landscape.svg' alt='logo' width={2691} height={517} /></Link>
                </div>

                <div className={styles.actions}>

                    {isOpen !== true ? <FaBars className={styles.bars} onClick={ () => setIsOpen(!isOpen)} /> : <FaXmark className={styles.bars} onClick={ () => setIsOpen(!isOpen)} />}

                    <div className={styles.menus}>
                        {menuData.map( (menu, index) => (

                                <Link key={index} href={menu.link} className={pathname === menu.link ? styles.active : ''}>{menu.icon && <span className={styles.menuIcon}>{menu.icon}</span>} {menu.name}</Link>
                            
                            ))}
                    </div>

                </div>
            </div>

            <div className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}>
                {menuData.map( (menu, index) => (
                    <Link key={index} href={menu.link} className={pathname === menu.link ? styles.active : ''}>{menu.name}</Link>
                ))}
            </div>

        </nav>

    )

};

export default Navigation;