import styles from './Outcome.module.css';

const benefits = [
  "Esperienza fluida",
  "Caricamento rapido",
  "Percorso chiaro",
  "Meno abbandoni",
  "Più richieste"
];

export default function Outcome() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Outcome</p>
          <h2 className={styles.title}>Cosa cambia quando<br/>la struttura è giusta</h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.benefitsBox}>
            <ul className={styles.list}>
              {benefits.map((benefit, i) => (
                <li key={i} className={styles.listItem}>
                  <span className={styles.check}>✓</span> {benefit}
                </li>
              ))}
            </ul>
          </div>
          
          <div className={styles.impactBox}>
            <div className={styles.quoteMark}>"</div>
            <p className={styles.impactText}>
              Anche un piccolo aumento di conversione<br/>
              può cambiare completamente i numeri.
            </p>
            <p className={styles.conclusion}>
              E il sito inizia a ripagarsi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
