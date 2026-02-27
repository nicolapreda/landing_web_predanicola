import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.container}>
        <h1 className={styles.headline}>
          Non è un sito.<br />
          <span style={{color: 'var(--primary-blue)'}}>È un asset che ti porta contatti.</span>
        </h1>
        
        <div className={styles.subheadlineWrapper}>
          <p className={styles.subheadline}>
            E non deve essere solo online. Nel 2026 avere un sito non basta.<br/>
            Serve una struttura digitale che trasformi traffico in richieste reali.
          </p>
          <p className={styles.subheadlineContext}>
            Progetto siti completamente su misura, pensati per:
          </p>
        </div>

        <div className={styles.bullets}>
          <span className={styles.bullet}><span className={styles.check}>✓</span> distinguerti dai template copia-incolla</span>
          <span className={styles.bullet}><span className={styles.check}>✓</span> caricare velocemente</span>
          <span className={styles.bullet}><span className={styles.check}>✓</span> convertire meglio</span>
          <span className={styles.bullet}><span className={styles.check}>✓</span> durare negli anni senza diventare obsoleti</span>
        </div>
      
        <div className={styles.actions}>
          <a href="#contatti" className={styles.primaryCta}>
            Parliamone
          </a>
          <a href="#progetti" className={styles.secondaryCta}>
            Guarda i progetti reali
          </a>
        </div>
        
        <p className={styles.microcopy}>
          Parliamo del tuo sito o della tua idea. Risposta entro 24h.
        </p>
      </div>
    </section>
  );
}
