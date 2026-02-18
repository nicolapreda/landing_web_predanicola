import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.container}>
        <h1 className={styles.headline}>
        Il tuo sito deve<br />
        <span style={{color: 'var(--primary-blue)'}}>generare clienti.</span>
      </h1>
      <p className={styles.subheadline}>
        Smetti di perdere conversioni con siti lenti e template standard.
        <br />
        <strong>Sviluppo Custom Next.js</strong> progettato per performance, scalabilità e risultati di business.
      </p>
      
      <div className={styles.actions}>
        <a href="#contatti" className={styles.primaryCta}>
          Analizza il tuo progetto
        </a>
        <a href="#differenze" className={styles.secondaryCta}>
          Vedi le differenze
        </a>
      </div>

      <div className={styles.bullets}>
        <span className={styles.bullet}><span className={styles.check}>✓</span> No WordPress</span>
        <span className={styles.bullet}><span className={styles.check}>✓</span> No Page Builders</span>
        <span className={styles.bullet}><span className={styles.check}>✓</span> 100/100 Lighthouse</span>
        <span className={styles.bullet}><span className={styles.check}>✓</span> Struttura Pronta per Scalare</span>
      </div>
      </div>
    </section>
  );
}
