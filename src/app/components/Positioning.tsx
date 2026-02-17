import styles from './Positioning.module.css';

export default function Positioning() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Non sono un "installatore di temi".</h2>
        <p className={styles.subtitle}>Non vendo:</p>
        <div className={styles.list}>
          <span className={styles.item}>Theme Forest</span>
          <span className={styles.item}>Elementor Pro</span>
          <span className={styles.item}>Shopify con 8 app esterne</span>
        </div>
        <p className={styles.strongStatement}>
          Sviluppo architetture digitali.
        </p>
      </div>
    </section>
  );
}
