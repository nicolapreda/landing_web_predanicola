import styles from './DoneForYou.module.css';

const features = [
  "Infrastruttura gestita",
  "Struttura stabile",
  "Zero dipendenza da plugin",
  "Zero rattoppi",
  "Sito pensato per durare"
];

export default function DoneForYou() {
  return (
    <section className={styles.section} id="done-for-you">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.contentLeft}>
            <p className={styles.eyebrow}>Done For You</p>
            <h2 className={styles.title}>
              Tu pensi al business.<br/>
              <span className={styles.highlight}>Io penso alla struttura.</span>
            </h2>
            <p className={styles.conclusion}>
              Tu non devi occuparti di niente.
            </p>
          </div>

          <div className={styles.contentRight}>
            <ul className={styles.list}>
              {features.map((feature, i) => (
                <li key={i} className={styles.listItem}>
                  <div className={styles.checkIcon}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
