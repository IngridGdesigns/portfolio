import * as React from 'react'
import styles from '../page.module.css'
import Image from 'next/image'
import { ProjectProps } from "../page";

export default function Projects({ projects }: ProjectProps) {
    const project = projects[0];
    
    return (
        <div className={styles.greeting}>
            
            <h1>Hello from my Projects Section</h1>
            <div className={styles.responsiveTwoColumns}>
                <div>
                    <Image className={styles.responsiveImage} src={`/images/catWallpaper.jpg`} alt="cat wearing sunglasses" width={500} height={400} />
                    hello {project.title}
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