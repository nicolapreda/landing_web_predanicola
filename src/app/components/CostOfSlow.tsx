import styles from './CostOfSlow.module.css';

export default function CostOfSlow() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Quanto ti costa un sito lento?</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <span className={styles.number}>-53%</span>
            <span className={styles.label}>Di visite mobile</span>
            <p className={styles.desc}>Se il sito impiega più di 3 secondi a caricare.</p>
          </div>
          <div className={styles.card}>
            <span className={styles.number}>-7%</span>
            <span className={styles.label}>Sulle conversioni</span>
            <p className={styles.desc}>Per ogni secondo di ritardo nel caricamento.</p>
          </div>
          <div className={styles.card}>
            <span className={styles.number}>SEO</span>
            <span className={styles.label}>Penalizzazione Google</span>
            <p className={styles.desc}>I Core Web Vitals sono fattore di ranking dal 2021.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
