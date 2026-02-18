import styles from './TheMechanism.module.css';

export default function TheMechanism() {
  return (
    <section className={styles.section} id="stack">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Il Meccanismo</h2>
          <p className={styles.subtitle}>
            Come trasformo il codice in un vantaggio competitivo per la tua azienda.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.icon}>⚡️</div>
            <h3 className={styles.cardTitle}>Next.js & React</h3>
            <p className={styles.cardText}>
              La tecnologia usata da Netflix e TikTok. Navigazione istantanea, SEO perfetta e UX fluide che trattengono l'utente.
            </p>
          </div>
          
          <div className={styles.card}>
            <div className={styles.icon}>🛡️</div>
            <h3 className={styles.cardTitle}>Sicurezza Totale</h3>
            <p className={styles.cardText}>
              Niente database WordPress esposti. Architettura headless che riduce la superficie d'attacco al minimo.
            </p>
          </div>
          
          <div className={styles.card}>
            <div className={styles.icon}>📈</div>
            <h3 className={styles.cardTitle}>Scalabilità Docker</h3>
            <p className={styles.cardText}>
              Infrastruttura containerizzata pronta a reggere picchi di traffico. Il tuo sito cresce con il tuo business.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>🎨</div>
            <h3 className={styles.cardTitle}>Design System Custom</h3>
            <p className={styles.cardText}>
              Nessun tema comprato. Un'identità visiva unica, costruita pixel-perfect per il tuo brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
