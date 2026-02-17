import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section className={styles.section} id="esperienza">
      <h2 className={styles.title}>Esperienza</h2>
      <div className={styles.list}>
        <div>
          <h3 className={styles.role}>Artista freelance</h3>
          <p className={styles.details}>Freelance • giu 2024 - Presente</p>
          <p className={styles.details}>Bergamo, Lombardia, Italia</p>
        </div>
      </div>
    </section>
  );
}
