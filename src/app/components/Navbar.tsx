import * as React from 'react'
import Link from 'next/link'
import styles from '../page.module.css'

export default function Navbar() {
    return (
        <nav>
            <h2>Nav logo stuff</h2>
            <ul>
                <li><Link href="#about">About</Link></li>
                <li><Link href="#projects">Projects</Link></li>
                <li><Link href="#contact">Contact</Link></li>
            </ul>
        </nav>
    )
}