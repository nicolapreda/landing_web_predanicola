import styles from './Comparison.module.css';

export default function Comparison() {
  return (
    <section className={styles.section} id="differenze">
      <div className={styles.container}>
        <h2 className={styles.title}>Scelte che contano</h2>
        
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.featureCol}></th>
                <th className={styles.standardCol}>
                  WordPress / Builder
                  <span className={styles.colSub}>La scelta standard</span>
                </th>
                <th className={styles.customCol}>
                  Sviluppo Custom
                  <span className={styles.colSub}>La mia offerta</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.feature}>Tecnologia</td>
                <td>PHP / Template pesanti</td>
                <td className={styles.highlight}>Next.js / React (Moderno)</td>
              </tr>
              <tr>
                <td className={styles.feature}>Velocità</td>
                <td>Lento (dipende dai plugin)</td>
                <td className={styles.highlight}>Istantaneo (Statico/Edge)</td>
              </tr>
              <tr>
                <td className={styles.feature}>Sicurezza</td>
                <td>Vulnerabile (SQL Injection)</td>
                <td className={styles.highlight}>Blindato (No database esposto)</td>
              </tr>
              <tr>
                <td className={styles.feature}>Scalabilità</td>
                <td>Difficile (server condivisi)</td>
                <td className={styles.highlight}>Infinita (Docker/Serverless)</td>
              </tr>
              <tr>
                <td className={styles.feature}>Manutenzione</td>
                <td>Costante (aggiornamenti plugin)</td>
                <td className={styles.highlight}>Zero (Non si "rompe" da solo)</td>
              </tr>
              <tr>
                <td className={styles.feature}>Design</td>
                <td>Adattato da un tema</td>
                <td className={styles.highlight}>Disegnato su misura</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
