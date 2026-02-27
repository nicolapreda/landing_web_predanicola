import styles from './Posizionamento.module.css';

export default function Posizionamento() {
  return (
    <section className={styles.section} id="approccio">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>Io non uso template.</h2>
          
          <div className={styles.statements}>
            <p className={styles.statement}>Non uso builder.</p>
            <p className={styles.statement}>Non uso strutture preconfezionate.</p>
          </div>
          
          <div className={styles.emphasisBox}>
            <p className={styles.emphasisText}>Ogni progetto parte da zero.</p>
            <p className={styles.reason}>Perché ogni business è diverso. E deve sembrare diverso.</p>
          </div>

          <p className={styles.warning}>
            Se il tuo sito è identico a quello dei tuoi competitor,<br/>
            <strong>stai già perdendo.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
