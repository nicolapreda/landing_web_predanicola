import styles from './Rottura.module.css';

export default function Rottura() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Nel 2026 non vince chi è online.<br/>
            <span className={styles.highlight}>Vince chi è strutturato.</span>
          </h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.fact}>
            <p className={styles.notThis}>Un sito non è grafica.</p>
            <p className={styles.isThis}>È architettura.</p>
          </div>
          <div className={styles.fact}>
            <p className={styles.notThis}>Non è template.</p>
            <p className={styles.isThis}>È strategia.</p>
          </div>
          <div className={styles.fact}>
            <p className={styles.notThis}>Non è "bello".</p>
            <p className={styles.isThis}>È progettato per convertire.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
