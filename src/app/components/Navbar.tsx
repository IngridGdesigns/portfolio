import * as React from 'react'
import styles from '../page.module.css'

export default function Navbar() {
    return (
        <nav>
            <h2>Nav logo stuff</h2>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}