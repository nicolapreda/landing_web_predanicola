import styles from './WhyMe.module.css';

export default function WhyMe() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Perché scegliermi?</h2>
        <div className={styles.grid}>
          <div className={`${styles.card} ${styles.agency}`}>
            <h3 className={styles.cardTitle}>Soluzione Standard</h3>
            <ul className={styles.list}>
              <li className={styles.item}><span className={styles.icon}>✕</span> Sito basato su template</li>
              <li className={styles.item}><span className={styles.icon}>✕</span> Builder che appesantisce</li>
              <li className={styles.item}><span className={styles.icon}>✕</span> Dipendenza da plugin</li>
              <li className={styles.item}><span className={styles.icon}>✕</span> Hosting condiviso</li>
              <li className={styles.item}><span className={styles.icon}>✕</span> Difficoltà di scalabilità</li>
            </ul>
          </div>
          <div className={`${styles.card} ${styles.me}`}>
            <h3 className={styles.cardTitle}>Approccio Custom</h3>
            <ul className={styles.list}>
              <li className={styles.item}><span className={styles.icon}>✓</span> Codice scritto da zero</li>
              <li className={styles.item}><span className={styles.icon}>✓</span> Performance misurabili</li>
              <li className={styles.item}><span className={styles.icon}>✓</span> Architettura scalabile</li>
              <li className={styles.item}><span className={styles.icon}>✓</span> Deploy professionale su VPS</li>
              <li className={styles.item}><span className={styles.icon}>✓</span> Controllo completo del progetto</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
