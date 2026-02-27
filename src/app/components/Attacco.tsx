import styles from './Attacco.module.css';

export default function Attacco() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Il 90% dei siti aziendali è <span className={styles.highlight}>inutile</span>.
        </h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <p className={styles.looks}>
              Design "carino".<br/>
              Animazioni.<br/>
              Template premium da 59€.
            </p>
          </div>
          <div className={styles.cardDark}>
            <p className={styles.reality}>
              Ma quando un cliente entra…<br/>
              <strong>non succede niente.</strong>
            </p>
            <ul className={styles.nothingList}>
              <li>Niente richieste.</li>
              <li>Niente contatti.</li>
              <li>Niente vendite.</li>
            </ul>
          </div>
        </div>

        <div className={styles.conclusion}>
          <p className={styles.question}>E sai perché?</p>
          <p className={styles.answer}>Perché sono tutti uguali.</p>
        </div>
      </div>
    </section>
  );
}
