import * as React from 'react'
import styles from '../page.module.css'
import Image from 'next/image'
import { ProjectProps } from "../page";

export default function Projects({ projects }: ProjectProps) {

    const mappProjects = projects.map(project => {
        return (
            <div key={project.id}>
                <Image className={styles.responsiveImage} src={`/images/${project.coverImg}`} alt={project.alt} width={500} height={400} />
                <h1>{project.title}</h1>
                <p>{project.description}</p>
            </div>
    
        )
    })

    return (
        <div className={styles.greeting}>
            
            <h1>Hello from my Projects Section</h1>

            <div className={styles.responsiveTwoColumns}>
                {mappProjects}
           
            </div>
        </div>
    )
}