import styles from '../page.module.css';

export default function Contact() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Contact Me</h1>
        <p>
          I'm always interested in hearing about new opportunities and
          collaborations. Feel free to reach out!
        </p>
        <div className={styles.ctas}>
          <a href="mailto:your.email@example.com" className={styles.primary}>
            Send Email
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            LinkedIn
          </a>
        </div>
      </main>
    </div>
  );
}
