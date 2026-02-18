import styles from './FinalCta.module.css';

export default function FinalCta() {
  return (
    <section className={styles.section} id="contatti">
      <div className={styles.container}>
        <h2 className={styles.headline}>
          Costruiamo qualcosa di solido.
        </h2>
        <p className={styles.subheadline}>
          Se cerchi un sito veloce ed economico fatto con un builder, non sono la persona giusta.<br/>
          Se cerchi un partner tecnico per una struttura digitale professionale, parliamone.
        </p>
        
        <a href="mailto:info@nicolapreda.it" className={styles.ctaButton}>
          Inizia il Progetto
        </a>
      </div>
    </section>
  );
}
