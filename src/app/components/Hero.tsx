import * as React from 'react'
import styles from '../styles.module.css'

export default function Hero() {
    return (
        
        <div className={`${styles.header__text} ${styles.row}`}>
            <div className={styles.header__text}>
                <h1 className={styles.headingPrimary}>
                    <span>Ingrid Garcia</span>
                </h1>
                <p>Collaborative Software Engineer ☕ Passion for building user-friendly and maintainable code</p>
                <a href="#contact" className={`${styles.btn} ${styles.btnPink}`}>Get in touch</a>
            </div>
        </div>
    )
}