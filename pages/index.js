import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Mohib Ullah Khan</h1>
          <p>Full-Stack Web Developer passionate about building interactive applications.</p>
        </div>
      </div>
    </div>
  );
}