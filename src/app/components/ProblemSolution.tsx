import styles from './ProblemSolution.module.css';

export default function ProblemSolution() {
  return (
    <>
      <section className={`${styles.section} ${styles.problemSection}`}>
        <div className={styles.container}>
          <div>
            <span className={styles.label}>Il Problema</span>
            <h2 className={styles.title}>WordPress nel 2026?<br/>Funziona. Finché non devi crescere.</h2>
            <p className={styles.description}>
              La maggior parte dei siti aziendali oggi è costruita con template preconfezionati, 
              page builder drag & drop e 12 plugin che si aggiornano quando vogliono loro.
              All’inizio sembra tutto facile. Poi inizi a pagare il prezzo.
            </p>
          </div>
          <ul className={styles.list}>
            <li className={styles.item}>
              <span className={`${styles.icon} ${styles.problemIcon}`}>✕</span>
              <span>Sito lento che perde utenti</span>
            </li>
            <li className={styles.item}>
              <span className={`${styles.icon} ${styles.problemIcon}`}>✕</span>
              <span>Aggiornamenti che rompono tutto</span>
            </li>
            <li className={styles.item}>
              <span className={`${styles.icon} ${styles.problemIcon}`}>✕</span>
              <span>Plugin in conflitto</span>
            </li>
            <li className={styles.item}>
              <span className={`${styles.icon} ${styles.problemIcon}`}>✕</span>
              <span>Design uguale ad altri 200 siti</span>
            </li>
            <li className={styles.item}>
              <span className={`${styles.icon} ${styles.problemIcon}`}>✕</span>
              <span>Impossibilità di fare modifiche strutturali serie</span>
            </li>
          </ul>
          <p className={styles.conclusion}>
            Non è “colpa di WordPress”. È che non è pensato per soluzioni su misura evolute.
          </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.solutionSection}`}>
        <div className={styles.container}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <span className={`${styles.icon} ${styles.solutionIcon}`}>✓</span>
              <span>Struttura pensata per il tuo modello di business</span>
            </li>
            <li className={styles.item}>
              <span className={`${styles.icon} ${styles.solutionIcon}`}>✓</span>
              <span>Codice scritto su misura</span>
            </li>
            <li className={styles.item}>
              <span className={`${styles.icon} ${styles.solutionIcon}`}>✓</span>
              <span>Database progettato correttamente</span>
            </li>
            <li className={styles.item}>
              <span className={`${styles.icon} ${styles.solutionIcon}`}>✓</span>
              <span>Performance ottimizzate lato server</span>
            </li>
            <li className={styles.item}>
              <span className={`${styles.icon} ${styles.solutionIcon}`}>✓</span>
              <span>Niente layer inutili sopra layer inutili</span>
            </li>
          </ul>
          <div>
            <span className={styles.label}>La Soluzione</span>
            <h2 className={styles.title}>Io non installo template.<br/>Progetto architetture.</h2>
            <p className={styles.description}>
              Ogni progetto parte da zero. Vuoi una funzione nuova? Si sviluppa.
              Non si cerca il plugin sperando che esista.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
