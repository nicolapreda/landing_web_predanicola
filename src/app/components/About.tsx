import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.section} id="chi-sono">
      <h2 className={styles.title}>Chi Sono</h2>
      <div className={styles.content}>
        <p className={styles.text}>
          Ho 20 anni e amo intrecciare i fili delle mie storie con quelle degli altri per raccontarle attraverso la mia creatività.
          Nel mio lavoro fondo fotografia, video e direzione artistica per creare narrazioni visive potenti.
          La mia ambizione è lavorare su progetti che sfidano l'ordinario, portando un'estetica curata e un punto di vista personale.
        </p>
        <div className={styles.imageContainer}>
             {/* Placeholder for the image */}
             <div className={styles.imagePlaceholder} style={{background: 'url(/placeholder-portrait.jpg) center/cover no-repeat, #ccc'}}></div>
        </div>
      </div>
    </section>
  );
}
