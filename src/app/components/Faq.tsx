"use client";
import { useState } from 'react';
import styles from './Faq.module.css';

const faqs = [
  {
    q: "È più costoso di un sito WordPress?",
    a: "All'inizio sì, nel lungo termine no. Un sito WordPress economico richiede manutenzione costante, plugin a pagamento e spesso deve essere rifatto dopo 2-3 anni. Una soluzione custom è un investimento che dura nel tempo senza costi nascosti."
  },
  {
    q: "Quanto tempo richiede lo sviluppo?",
    a: "Solitamente dalle 4 alle 8 settimane, a seconda della complessità. Non uso template pronti, quindi ogni riga di codice è scritta per il tuo progetto. La qualità richiede il suo tempo, ma il risultato è definitivo."
  },
  {
    q: "Posso modificare i contenuti da solo?",
    a: "Assolutamente sì. Integro un CMS Headless (come Sanity o Contentful) che è molto più facile e pulito di WordPress. Tu gestisci i testi e le immagini, io garantisco che il design non si rompa mai."
  },
  {
    q: "Come gestiamo la SEO?",
    a: "Next.js è nato per la SEO. Il sito sarà velocissimo (Core Web Vitals verdi), con struttura semantica perfetta e metadata dinamici. Google ama i siti veloci e ben strutturati."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Domande Frequenti</h2>
        
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.item} ${openIndex === index ? styles.open : ''}`}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className={styles.question}>
                {faq.q}
                <span className={styles.toggle}>{openIndex === index ? '−' : '+'}</span>
              </div>
              <div className={styles.answer}>
                <div className={styles.answerInner}>
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
