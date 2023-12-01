import Image from 'next/image'
import styles from './page.module.css'
import Greetings from './components/Greetings'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


export default function Home() {
  return (
    <div className='container'>
      <Navbar />
        <Greetings />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />

    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p> 

      </div>
      </main>
    </div>
  )
}