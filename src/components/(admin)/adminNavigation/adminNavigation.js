'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './adminNavigation.module.css';
import { FaBars, FaXmark } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getAdminMenuData } from '@/services/data.service';

const Navigation = () => {

    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [menuData, setMenuData] = useState([]);
    const [isSticky, setIsSticky] = useState(false);

    const menuRef = useRef(null);

    useEffect( () => {

        // window.scrollTo(0, 0);

        const navbar = document.querySelector("nav");

        const getData = async () => {
            try {
                const data = await getAdminMenuData();
                console.log("Data fetched:", data);
                setMenuData(data);
            } catch (error) {
                console.log("Error fetching menu data:", error);
            }
        }
        getData();

    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => document.removeEventListener('click', handleClickOutside);
    }, [isOpen]);

    

    return (

        <nav id='nav' className={`${styles.nav} ${isSticky ? styles.sticky : ''}`}>

            <div className={`${styles.navBar} ${isSticky ? styles.sticky : ''}`}>
                <div className={styles.logo}>
                    <Link href='/'>Ringgaard Motorsport</Link>
                </div>

                <div className={styles.actions}>

                    {isOpen !== true ? (
                        <FaBars className={styles.bars} onClick={ () => setIsOpen(!isOpen)} /> 
                    ) : (
                        <FaXmark className={styles.bars} onClick={ () => setIsOpen(!isOpen)} /> 
                    )}

                </div>
            </div>

            <div className={styles.navSub}>
                <div className={styles.menus}>
                    {menuData.map( (menu, index) => (

                        <Link ref={menuRef} key={index} href={menu.link} className={pathname === menu.link ? styles.active : ''}>{menu.icon && <span className={styles.menuIcon}>{menu.icon}</span>} {menu.name}</Link>
                            
                    ))}
                </div>
            </div>

            <div className={`${styles.overlay} ${isOpen ? styles.open : ''}`}></div>

            <div ref={menuRef} className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}>
                {menuData.map( (menu, index) => (
                    <Link key={index} href={menu.link} className={pathname === menu.link ? styles.active : ''}>{menu.name}</Link>
                ))}
            </div>

        </nav>

    )

};

export default Navigation;