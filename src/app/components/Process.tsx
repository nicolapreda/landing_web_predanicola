import styles from './Process.module.css';

const steps = [
  "Analisi tecnica e strategica",
  "Progettazione architettura",
  "Sviluppo custom",
  "Test performance",
  "Deploy in Docker su VPS",
  "Monitoraggio e supporto"
];

export default function Process() {
  return (
    <section className={styles.section} id="processo">
      <div className={styles.container}>
        <h2 className={styles.title}>Il Processo</h2>
        <div className={styles.steps}>
          {steps.map((step, index) => (
            <div key={step} className={styles.step}>
              <div className={styles.number}>{index + 1}</div>
              <span className={styles.stepTitle}>{step}</span>
            </div>
          ))}
        </div>
        <p className={styles.conclusion}>
          Non consegno un “sito”. Consegno una struttura digitale.
        </p>
      </div>
    </section>
  );
}
