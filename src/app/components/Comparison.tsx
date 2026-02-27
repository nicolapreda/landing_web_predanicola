import styles from './Comparison.module.css';

export default function Comparison() {
  return (
    <section className={styles.section} id="differenze">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Nel 2026 WordPress è una scelta.<br/>
            <span className={styles.highlight}>Non una necessità.</span>
          </h2>
          <p className={styles.subtitle}>
            I builder hanno reso facile "fare un sito".<br/>
            Ma hanno anche reso tutti uguali.<br/>
            <strong>Questa è l'opportunità per distinguerti.</strong>
          </p>
        </div>
        
        <div className={styles.content}>
          <p className={styles.intro}>Un sito custom:</p>
          <ul className={styles.list}>
            <li>Non ha vincoli di template</li>
            <li>Non ha limiti di struttura</li>
            <li>Non dipende da 12 plugin</li>
            <li>Non è copia-incolla</li>
          </ul>
          
          <div className={styles.conclusion}>
            <p className={styles.conclusionTitle}>È tuo.</p>
            <p className={styles.conclusionText}>Costruito intorno al tuo modello di business.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
