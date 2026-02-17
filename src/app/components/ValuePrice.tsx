import styles from './ValuePrice.module.css';

export default function ValuePrice() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Paghi sviluppo.<br/>Non struttura aziendale.</h2>
          <p className={styles.priceComparison}>Sito Custom ≠ Sito da Agenzia da 30k</p>
          <ul className={styles.list}>
            <li className={styles.item}><span className={styles.check}>✓</span> Costi più accessibili rispetto alle agenzie strutturate</li>
            <li className={styles.item}><span className={styles.check}>✓</span> Contatto diretto con chi scrive il codice</li>
            <li className={styles.item}><span className={styles.check}>✓</span> Nessun ricarico commerciale</li>
            <li className={styles.item}><span className={styles.check}>✓</span> Supporto tecnico reale</li>
          </ul>
        </div>
         <div className={styles.imagePlaceholder}>
            💎
        </div>
      </div>
    </section>
  );
}
