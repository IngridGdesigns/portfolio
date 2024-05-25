
import styles from './styles.module.css'
import Greetings from './components/Greetings'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { data } from './projectData'
import Hero from './components/Hero'

type MyProjects = {
  id: number;
  description: string;
  title: string;
  imageUrl: string;
  alt: string;
  // sourceUrl: string;
  // githubLink: string;
  // labels: string[];
}

export type ProjectProps = {
  projects: MyProjects[];
}

export default function Home() {
  const projects: MyProjects[] = data; //fetching data;

  return (
   
    <body>
       <header className={styles.header} role="banner" id="top">
          <Navbar />
          <Hero />
        </header>
        <div > {/*className={styles.main}*/}
          {/* <Hello projects={projects} /> */}
        <Projects projects={projects}/>
        <Skills />
        <About />
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
      </body>
       
  )
}