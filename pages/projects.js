import Navbar from '../components/Navbar';
import fs from 'fs';
import path from 'path';
import styles from '../styles/Projects.module.css';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'projects.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const projects = JSON.parse(jsonData);

  return {
    props: { projects }
  };
}

export default function Projects({ projects }) {
  return (
    <div>
      <Navbar />
      <main className={styles.container}>
        <h1>My Projects</h1>
        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.card}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.github} target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}