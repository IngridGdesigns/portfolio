import * as React from 'react'
import Link from 'next/link'
import styles from '../styles.module.css'

export default function Navbar() {
    return (
       
            <div className={styles.row}>
                <nav className={styles.nav} role="navigation">
                    
                    <ul className={styles.nav__items}>
                        <li className={styles.nav__item}><Link className={styles.nav__link} href="#projects">Projects</Link></li>
                        <li className={styles.nav__item}><Link className={styles.nav__link} href="#about">About</Link></li>
                        <li className={styles.nav__item}><Link className={styles.nav__link} href="#contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
       
       
    )
}