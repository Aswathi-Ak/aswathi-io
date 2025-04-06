import styles from '../page.module.css';

export default function About() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>About Me</h1>
        <p>
          Hi, I'm Aswati. I'm a software engineer specializing in building web
          and mobile applications using React, Next.js, and React Native.
        </p>
        <div className={styles.pillList}>
          <div className={styles.pill}>react</div>
          <div className={styles.pill}>next.js</div>
          <div className={styles.pill}>react native</div>
          <div className={styles.pill}>typescript</div>
          <div className={styles.pill}>javascript</div>
        </div>
      </main>
    </div>
  );
}
