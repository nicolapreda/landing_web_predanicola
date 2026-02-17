import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.container}>
        <h1 className={styles.headline}>
          Sviluppo Web Custom.
        </h1>
        <p className={styles.subheadline}>
          Nel 2026 usare WordPress è una scelta, non una necessità.<br/><br/>
          Realizzo siti web, e-commerce e web app completamente su misura.
          Niente template. Niente page builder. Niente plugin da incrociare le dita.
          Solo codice vero. Performante. Scalabile. Progettato per crescere con il tuo business.
        </p>
        
        <div className={styles.actions}>
          <Link href="#contatti" className={styles.primaryCta}>
            Richiedi una consulenza gratuita
          </Link>
          <Link href="#portfolio" className={styles.secondaryCta}>
            Guarda i progetti reali
          </Link>
        </div>

        <div className={styles.bullets}>
          <span className={styles.bullet}><span className={styles.check}>✓</span> 100% Codice Proprietario</span>
          <span className={styles.bullet}><span className={styles.check}>✓</span> Zero WordPress, Zero Builder</span>
          <span className={styles.bullet}><span className={styles.check}>✓</span> Performance Reali (Non Marketing)</span>
          <span className={styles.bullet}><span className={styles.check}>✓</span> Struttura Pronta per Scalare</span>
        </div>
      </div>
    </section>
  );
}
