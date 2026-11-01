import Navbar from '../components/Navbar';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div>
      <Navbar />
      <main className={styles.container}>
        <h1>About Me</h1>
        <img src="https://media.licdn.com/dms/image/v2/D4D03AQGMgFC2WJA7dw/profile-displayphoto-shrink_200_200/B4DZsExctmJcAY-/0/1765311635271?e=2147483647&v=beta&t=h6Oshrur_TomY3dSfX9d8KNMuIyuYTeZRH2chyUXsDI" alt="Profile" className={styles.profilePic} />
        <p>I am a computer science student with a strong interest in front-end frameworks.</p>
        <h2>Key Skills</h2>
        <ul className={styles.skillsList}>
          <li>JavaScript (ES6+)</li>
          <li>React.js & Next.js</li>
          <li>Node.js</li>
          <li>CSS Modules</li>
        </ul>
      </main>
    </div>
  );
}