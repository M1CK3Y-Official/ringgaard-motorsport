'use client';
import { useState } from 'react';
import styles from './navigation.module.css';
import { FaBars, FaXmark, FaPhone } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {

    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    let menu = [
        { 
            name: 'Forside', 
            link: '/'
        },
        { 
            name: 'Bilen', 
            link: '/car'
        },
        { 
            name: 'Om mig', 
            link: '/about'
        },
        { 
            name: 'Sponsorer', 
            link: '/sponsors'
        },
        { 
            name: 'Kontakt', 
            link: '/contact',
            icon: <FaPhone className={styles.menuIcon}/>
        },
    ]

    

    return (

        <nav className={styles.nav}>

            <div className={styles.navBar}>
                <div className={styles.logo}>
                    <Link href='/'><Image src='/Logos/Blue/Logo_Landscape.svg' alt='logo' width={2691} height={517} /></Link>
                </div>

                <div className={styles.actions}>

                    {isOpen !== true ? <FaBars className={styles.bars} onClick={ () => setIsOpen(!isOpen)} /> : <FaXmark className={styles.bars} onClick={ () => setIsOpen(!isOpen)} />}

                    <div className={styles.menus}>
                        {menu.map( (menu, index) => (
                                <Link key={index} href={menu.link} className={pathname === menu.link ? styles.active : ''}>{menu.icon ? menu.icon : ''} {menu.name}</Link>
                        ))}
                    </div>

                </div>
            </div>

            <div className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}>
                {menu.map( (menu, index) => (
                    <Link key={index} href={menu.link}>{menu.name}</Link>
                ))}
            </div>

        </nav>

    )

};

export default Navigation;