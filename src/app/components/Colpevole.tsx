import styles from './Colpevole.module.css';

export default function Colpevole() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.eyebrow}>Il Colpevole</p>
        <h2 className={styles.title}>
          <span className={styles.strikethrough}>WordPress e i builder hanno democratizzato il web.</span><br/>
          <span className={styles.highlight}>Hanno distrutto la differenziazione.</span>
        </h2>

        <div className={styles.content}>
          <p className={styles.statement}>Oggi chiunque può fare un sito. E infatti si vede.</p>
          
          <div className={styles.tags}>
            <span className={styles.tag}>Stessi layout</span>
            <span className={styles.tag}>Stessi blocchi</span>
            <span className={styles.tag}>Stessi effetti</span>
            <span className={styles.tag}>Stessi errori</span>
          </div>

          <div className={styles.conclusion}>
            <p className={styles.resultLabel}>Il risultato?</p>
            <p className={styles.resultText}>Sei solo uno dei tanti.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
