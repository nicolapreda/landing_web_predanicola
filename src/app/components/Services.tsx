import styles from './Services.module.css';

const services = [
  {
    title: "Siti Vetrina",
    desc: "Niente template standard. Design unico che comunica il valore del tuo brand al primo sguardo.",
    icon: "✨"
  },
  {
    title: "E-commerce Custom",
    desc: "Velocità = Conversione. Negozi online ottimizzati per vendere, senza i freni di WooCommerce.",
    icon: "🛍️"
  },
  {
    title: "Landing Page",
    desc: "Pagine ad alta conversione. Focus totale sull'obiettivo: trasformare i visitatori in clienti.",
    icon: "🎯"
  },
  {
    title: "Web App / Dashboard",
    desc: "Strumenti di business complessi e pannelli di controllo su misura per gestire la tua attività.",
    icon: "⚡"
  },
  {
    title: "Portfolio",
    desc: "Fai parlare i tuoi lavori. Uno spazio digitale curato nei minimi dettagli per attrarre lead qualificati.",
    icon: "🎨"
  },
  {
    title: "Migrazioni",
    desc: "Scappa da WordPress senza danni. Migrazione sicura di contenuti e SEO verso tecnologie moderne.",
    icon: "🔄"
  }
];

export default function Services() {
  return (
    <section className={styles.section} id="servizi">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Cosa costruisco</h2>
          <p>Soluzioni digitali complete, dalla progettazione al deploy.</p>
        </div>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
