import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Coming Soon</h1>
        <h2>Aswati</h2>
        <div className={styles.pillList}>
          <div className={styles.pill}>react</div>
          <div className={styles.pill}>next.js</div>
          <div className={styles.pill}>react native</div>
        </div>
      </main>
    </div>
  );
}
