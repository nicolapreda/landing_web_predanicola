import styles from './RealResults.module.css';

export default function RealResults() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Risultati Concreti</h2>
        <p className={styles.subtitle}>Non parole, ma metriche.</p>
        
        <div className={styles.metricGrid}>
          <div className={styles.metricCard}>
            <div className={styles.metricValue}>-38%</div>
            <div className={styles.metricLabel}>Tempo di Caricamento</div>
            <div className={styles.metricSub}>Rispetto al sito precedente</div>
          </div>
          
          <div className={styles.metricCard}>
            <div className={styles.metricValue}>+22%</div>
            <div className={styles.metricLabel}>Conversion Rate</div>
            <div className={styles.metricSub}>Grazie alla UX migliorata</div>
          </div>
          
          <div className={styles.metricCard}>
            <div className={styles.metricValue}>100%</div>
            <div className={styles.metricLabel}>Uptime</div>
            <div className={styles.metricSub}>0 crash durante il Black Friday</div>
          </div>
        </div>
      </div>
    </section>
  );
}
