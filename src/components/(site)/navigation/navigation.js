'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './navigation.module.css';
import { FaBars, FaXmark, FaRegCalendar, FaHouse, FaUserGroup, FaHandshake, FaRegMessage, FaCarSide  } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getMenuData } from '@/services/data.service';

const iconMap = {
    'Forside': <FaHouse />,
    'Bilen': <FaCarSide />,
    'Om os': <FaUserGroup />,
    'Events': <FaRegCalendar />,
    'Sponsorer': <FaHandshake />,
    'Kontakt': <FaRegMessage />
}


const Navigation = () => {

    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [menuData, setMenuData] = useState([]);
    const [isSticky, setIsSticky] = useState(false);

    const menuRef = useRef(null);

    useEffect( () => {

        // window.scrollTo(0, 0);

        const navbar = document.querySelector("nav");
        const navbarHeight = navbar.offsetHeight;        

        const fetchMenuData = async () => {
            try {
                const fetchedMenuData = await getMenuData();
                console.log("Fetched Menu Data:", fetchedMenuData);


                setMenuData(fetchedMenuData);
            } catch (error) {
                console.log("Kunne ikke hente menu data:", error);
            }
            // console.log('testing this shit', menuData)
;        }
        fetchMenuData();

        const handleScroll = () => {
            if (window.scrollY > navbarHeight) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);

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
                    {menuData.logoLink?.image?.data?.attributes && (

                        <Link href={menuData.logoLink.href || '/'}>
                            {menuData.logoLink?.image?.data?.attributes?.url && (
                                <Image 
                                    src={menuData.logoLink.image.data.attributes.url} 
                                    alt={menuData.logoLink.image.data.attributes.alternativeText || 'Logo'} 
                                    width={menuData.logoLink.image.data.attributes.width} 
                                    height={menuData.logoLink.image.data.attributes.height} 
                                />
                            )}
                        </Link>
                    )}
                </div>

                <div className={styles.actions}>

                    {isOpen !== true ? (
                        <FaBars className={styles.bars} onClick={ () => setIsOpen(!isOpen)} /> 
                    ) : (
                        <FaXmark className={styles.bars} onClick={ () => setIsOpen(!isOpen)} /> 
                    )}

                    <div className={styles.menus}>
                        {Array.isArray(menuData.link) &&
                            menuData.link.map( (menu) => (

                                

                                <Link 
                                    ref={menuRef} 
                                    key={menu.id} 
                                    href={menu.href} 
                                    className={pathname === menu.href ? styles.active : ''}
                                >
                                    {iconMap[menu.text] && (
                                        <>
                                        {iconMap[menu.text]}
                                        
                                        </>
                                    )}
                                    {/* {menu?.icon && <span className={styles.menuIcon}>{menu?.icon}</span>} {menu.link.text}</Link> */}
                                    <span>{menu.text}</span>
                                </Link>
                            
                            ))}
                    </div>

                </div>
            </div>

            <div className={`${styles.overlay} ${isOpen ? styles.open : ''}`}></div>

            <div ref={menuRef} className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}>
                {Array.isArray(menuData.link) &&
                    menuData.link.map( (menu) => (
                    <Link 
                        key={menu.id} 
                        href={menu.href} 
                        className={pathname === menu.href ? styles.active : ''}
                    >
                        {iconMap[menu.text] && (
                            <>
                                {iconMap[menu.text]}
                            </>
                        )}
                        <span>{menu.text}</span>
                    </Link>
                ))}
            </div>

        </nav>

    )

};

export default Navigation;