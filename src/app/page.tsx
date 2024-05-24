
// import styles from './page.module.css'
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
    <html lang="en">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Ingrid Garcia | Software Engineer and Designer from the Bay Area, CA</title>
      <meta name="Demonstrating my work and skills in the portfolio site"></meta>
      <meta name="software engineer" content="Ingrid Garcia,  Skilled in Typescript, Node.js, Jest, and React.js"/>
    <div>
      <Navbar />
        <div > {/*className={styles.main}*/}
          {/* <Hello projects={projects} /> */}
      <Hero />
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
      </html>
  )
}