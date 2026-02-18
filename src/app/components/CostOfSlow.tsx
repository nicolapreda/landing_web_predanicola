import styles from './CostOfSlow.module.css';

export default function CostOfSlow() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Quanto ti costa un sito lento?</h2>
        <p className={styles.subtitle}>
          Nel 2026, la velocità non è un lusso. È il fattore #1 per le vendite.
        </p>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.number}>-7%</div>
            <p className={styles.label}>Conversioni</p>
            <p className={styles.description}>Per ogni secondo di ritardo nel caricamento.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.number}>40%</div>
            <p className={styles.label}>Abbandono</p>
            <p className={styles.description}>Degli utenti se il sito impiega più di 3 secondi.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.number}>$$$</div>
            <p className={styles.label}>Costi Nascosti</p>
            <p className={styles.description}>Plugin, manutenzione continua e downtime improvvisi.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
