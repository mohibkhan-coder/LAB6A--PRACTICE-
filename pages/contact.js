import { useState } from 'react';
import Navbar from '../components/Navbar';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: e.target.message.value })
    });
    
    if (res.ok) {
      setStatus('Message sent successfully!');
      e.target.reset();
    }
  };

  return (
    <div>
      <Navbar />
      <main className={styles.container}>
        <h1>Contact Me</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <textarea name="message" rows="5" required placeholder="Your message here..."></textarea>
          <button type="submit">Send Message</button>
        </form>
        {status && <p>{status}</p>}
      </main>
    </div>
  );
}