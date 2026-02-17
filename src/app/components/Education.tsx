import styles from './Experience.module.css'; // Reusing styles as layout is identical

export default function Education() {
  return (
    <section className={styles.section} id="formazione">
      <h2 className={styles.title}>Formazione</h2>
      <div className={styles.list}>
        <div>
          <h3 className={styles.role}>Politecnico di Milano</h3>
          <p className={styles.details}>Laurea triennale, Design e comunicazione visiva</p>
          <p className={styles.details}>lug 2024 - lug 2027</p>
        </div>
        <div>
          <h3 className={styles.role}>ITIS Paleocapa</h3>
          <p className={styles.details}>Diploma Istituto Tecnico</p>
          <p className={styles.details}>set 2019 - giu 2024</p>
        </div>
      </div>
    </section>
  );
}
