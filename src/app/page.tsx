import Image from 'next/image'
import styles from './page.module.css'
import Greetings from './components/Greetings'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Hello } from './components/Hello'
import { data } from './projectData'

type MyProjects = {
  id: number;
  title: string;
  description: string;
  coverImg: string;
  alt: string;
  // liveSite: string;
  // repo: string;
  // labels: string[];
}

export type ProjectProps = {
  projects: MyProjects[];
}

export default function Home() {
  const projects: MyProjects[] = data; //fetching data;

  return (
    <div>
      <Navbar />
      <div className={styles.main}>
        {/* <Hello projects={projects} /> */}
      <Greetings />
      <About />
      <Projects projects={projects}/>
      <Skills />
      <Contact />
      <Footer />

    {/* <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p> 

      </div>
      </main> */}
      </div>
      </div>
  )
}