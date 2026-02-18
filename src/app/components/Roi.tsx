import styles from './Roi.module.css';

export default function Roi() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Un sito web non dovrebbe essere una spesa.
        </h2>
        <p className={styles.subtitle}>
          Se un sito converte, si ripaga da solo in pochi mesi. Ecco come.
        </p>

        <div className={styles.content}>
          <div className={styles.textBlock}>
            <p>
              La maggior parte delle aziende vede il sito web come un <strong>costo fisso</strong>. 
              Hosting, domini, manutenzione, rifacimenti ogni 2 anni perché "è diventato lento".
            </p>
            <p>
              Un sito <strong>Custom Highapi-Performance</strong> è un <strong>asset finanziario</strong>.
            </p>
            <ul className={styles.list}>
              <li>
                <span className={styles.check}>✓</span> 
                <strong>Conversione +1%:</strong> Su 10.000 visitatori, sono 100 lead in più/anno.
              </li>
              <li>
                <span className={styles.check}>✓</span> 
                <strong>Zero Manutenzione Tecnica:</strong> Niente plugin da aggiornare, niente crash.
              </li>
              <li>
                <span className={styles.check}>✓</span> 
                <strong>Longevità:</strong> Un'architettura React/Next.js dura anni senza diventare obsoleta.
              </li>
            </ul>
          </div>
          <div className={styles.visualBlock}>
            {/* Abstract visual representation of growth/ROI */}
            <div className={styles.chartLine}></div>
            <div className={styles.chartLabel}>Valore nel tempo</div>
          </div>
        </div>
      </div>
    </section>
  );
}
