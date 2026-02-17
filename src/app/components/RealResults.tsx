import styles from './RealResults.module.css';

export default function RealResults() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Performance Reali</h2>
          <p>Dati misurati con Google PageSpeed Insights su progetti reali.</p>
        </div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <span className={styles.score}>99</span>
            <span className={styles.metric}>Performance</span>
            <span className={styles.desc}>Caricamento istantaneo &lt; 0.5s</span>
          </div>
          <div className={styles.card}>
            <span className={styles.score}>100</span>
            <span className={styles.metric}>SEO</span>
            <span className={styles.desc}>Struttura semantica perfetta</span>
          </div>
          <div className={styles.card}>
            <span className={styles.score}>100</span>
            <span className={styles.metric}>Accessibility</span>
            <span className={styles.desc}>Navigabile per tutti gli utenti</span>
          </div>
        </div>
      </div>
    </section>
  );
}
