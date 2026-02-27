import styles from './Problema.module.css';

export default function Problema() {
  return (
    <section className={styles.section} id="problema">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Il problema non è avere un sito.<br/>
            <span className={styles.highlight}>È avere un sito che non lavora per te.</span>
          </h2>
        </div>

        <div className={styles.content}>
          <p className={styles.intro}>Molte aziende nel 2026 hanno ancora:</p>
          
          <ul className={styles.list}>
            <li className={styles.listItem}>Siti WordPress pieni di plugin</li>
            <li className={styles.listItem}>Builder lenti e limitanti</li>
            <li className={styles.listItem}>Design identici ai competitor</li>
            <li className={styles.listItem}>Aggiornamenti continui per non farli "rompere"</li>
            <li className={styles.listItem}>Costi nascosti nel tempo</li>
          </ul>

          <div className={styles.conclusion}>
            <p className={styles.resultLabel}>Risultato?</p>
            <p className={styles.resultText}>Il sito diventa un costo fisso.<br/>Non un asset.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
