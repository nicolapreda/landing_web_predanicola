import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.section} id="contatti">
      <div className={styles.container}>
        <div className={styles.intro}>
          <p className={styles.warning}>Se vuoi un sito da template, non sono la persona giusta.</p>
          <h2 className={styles.title}>Se vuoi una struttura digitale solida, pensata per crescere davvero,<br/>parliamone.</h2>
        </div>
        
        <form className={styles.form}>
          <div>
            <label htmlFor="name" className={styles.label}>Nome</label>
            <input type="text" id="name" className={styles.input} placeholder="Il tuo nome" />
          </div>
          <div>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input type="email" id="email" className={styles.input} placeholder="tua@email.com" />
          </div>
          <div>
            <label htmlFor="phone" className={styles.label}>Telefono</label>
            <input type="tel" id="phone" className={styles.input} placeholder="+39 000 000 0000" />
          </div>
          <div>
            <label htmlFor="type" className={styles.label}>Tipo di progetto</label>
            <select id="type" className={styles.select}>
              <option value="">Seleziona un'opzione</option>
              <option value="vetrina">Sito Vetrina</option>
              <option value="ecommerce">E-commerce</option>
              <option value="landing">Landing Page</option>
              <option value="webapp">Web App / Dashboard</option>
              <option value="restyling">Restyling</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className={styles.label}>Messaggio</label>
            <textarea id="message" className={styles.textarea} placeholder="Raccontami il tuo progetto..."></textarea>
          </div>
          <button type="submit" className={styles.button}>Richiedi Preventivo</button>
        </form>
      </div>
    </section>
  );
}
