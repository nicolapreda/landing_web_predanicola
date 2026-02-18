import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.section} id="chi-sono">
      <div className={styles.gridBackground}></div>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>Chi Sono 👨‍💻📸</h2>
          <p className={styles.text}>
            Ho studiato <strong>informatica seria</strong> per 5 anni 💻, e da due anni ho iniziato la mia carriera nel mondo <strong>foto e video</strong> 🎥.
          </p>
          <p className={styles.text}>
            Amo intrecciare i fili delle mie storie con quelle degli altri per raccontarle attraverso la mia creatività ✨.
            Nel mio lavoro fondo competenze tecniche e direzione artistica per creare narrazioni visive potenti 🚀.
          </p>
        </div>
        <div className={styles.imageContainer}>
             <img src="/chi-sono.webp" alt="Chi Sono" className={styles.image} />
        </div>
      </div>
    </section>
  );
}
