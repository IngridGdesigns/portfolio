import * as React from 'react'
import styles from '../page.module.css'
import Image from 'next/image'

export default function About() {
    return (
        <section className={styles.row}>
            <div className={styles.column}>
            <h1>About Me Section</h1>
                <p>This is me, this is what I do, this is what I been up too.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div className={styles.column}>
                <Image src={`/images/catWallpaper.jpg`} alt="cat wearing sunglasses" width={500} height={400} />
            <ul>
                <li>GitHub link</li>
                <li>LinkedIn link</li>

                </ul>
            </div>
        </section>
    )
}