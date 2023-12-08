'use client'
import Image from 'next/image'
import styles from './Header.module.scss'
import {useState,useEffect} from 'react'
import { IoIosMenu } from "react-icons/io";

import {AiFillHome,AiOutlineUser, AiFillSetting} from 'react-icons/ai'

const Header = () => {

    const [showDrawerIcon, setShowDrawerIcon] = useState(false);

    const [visibleDrawer, setVisibleDrawer] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 830) {
                setShowDrawerIcon(true);
            } else {
                setShowDrawerIcon(false);
            }
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);
    return(
        <div className={styles.mainWrapper}>
            <div className={styles.navbarWrapper}>
                <div className={styles.navbar}>
                    <h2 className={styles.logo}>DoggyDose</h2>
                    {
                        showDrawerIcon ? <IoIosMenu className={styles.menuIcon} onClick={() => setVisibleDrawer(!visibleDrawer)}/> : <div className={styles.navList}>
                        <span className={styles.navListItem}>Blog</span>
                        <span className={styles.navListItem}>Projects</span>
                        <span className={styles.navListItem}>About</span>
                        <span className={styles.navListItem}>Newsletter</span>
                        
                    </div>
                    }
                    
                </div>
            </div>
            {
                visibleDrawer && 
            <div className={styles.DrawerWrapper} >
                <ul className={styles.drawerList}>
                    <li><AiFillHome/>Home</li>
                    <li><AiOutlineUser/>Account</li>
                    <li><AiFillSetting/>Settings</li>
                </ul>
                <br/>
                <br/>
                <p onClick={() => setVisibleDrawer(!visibleDrawer)}>CloseNigga</p>
            </div>
            }
            <div className={styles.bannerWrapper}>
                <div className={styles.banner}>
                    <Image
                    src={'/assets/banner.png'}
                    alt='banner'
                    height={243}
                    width={1300}
                    className={styles.bannerImg}
                    
                    layout='responsive'
                    />
                </div>
            </div>
        </div>
    )
}
export default Header