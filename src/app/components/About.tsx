import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.section} id="chi-sono">
      <div className={styles.gridBackground}></div>
      <div className={styles.content}>
        
        <div className={styles.textContent}>
          <p className={styles.eyebrow}>Chi c'è dietro</p>
          <h2 className={styles.title}>Nicola Preda</h2>
          <div className={styles.textBlock}>
            <p className={styles.textHighlight}>
              Ho studiato <strong>informatica per 5 anni</strong> e conosco ogni aspetto di come è strutturato un software.
            </p>
            <p className={styles.text}>
              Questo mi permette di sviluppare <strong>siti web 100% custom</strong>, senza usare template pesanti o builder lenti. Il risultato? Piattaforme web <strong>estremamente veloci, sicure</strong> e costruite su misura per le tue esigenze reali.
            </p>
            <p className={styles.text}>
              Ma la tecnica da sola non basta. Avendo iniziato la mia carriera come <strong>fotografo e videomaker</strong>, unisco lo sviluppo tecnico a un occhio attento per la <strong>comunicazione visiva e il design</strong>. Questo mi permette di avere una visione completa di ciò che serve a un’attività per farsi notare online.
            </p>
            
            <div className={styles.resultBox}>
              <span className={styles.resultLabel}>Il risultato?</span>
              <p className={styles.resultDesc}>Strutture digitali coerenti, efficaci e costruite con un obiettivo chiaro: <strong>generare valore</strong>.</p>
            </div>
            
            <p className={styles.textClosing}>
              <span className={styles.highlightRed}>Lavoro con chi vuole distinguersi.</span><br/>
              Non con chi cerca la soluzione più economica.
            </p>
          </div>
        </div>

        <div className={styles.imageContainer}>
             <img src="/chi-sono.webp" alt="Nicola Preda" className={styles.image} />
        </div>
        
      </div>
    </section>
  );
}
