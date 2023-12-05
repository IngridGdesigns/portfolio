import * as React from 'react'
import styles from '../page.module.css'
import Image from 'next/image'

export default function Projects() {
    return (
        <div className={styles.greeting}>
            <h1>Hello from my Projects Section</h1>
            <div className={styles.responsiveTwoColumns}>
                <div>
                    <Image className={styles.responsiveImage} src={`/images/catWallpaper.jpg`} alt="cat wearing sunglasses" width={500} height={400} />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div>
                    <Image className={styles.responsiveImage} src={`/images/catWallpaper.jpg`} alt="cat wearing sunglasses" width={500} height={400} />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                 <div>
                    <Image className={styles.responsiveImage} src={`/images/catWallpaper.jpg`} alt="cat wearing sunglasses" width={500} height={400} />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div>
                    <Image className={styles.responsiveImage} src={`/images/catWallpaper.jpg`} alt="cat wearing sunglasses" width={500} height={400} />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
        </div>
    )
}