"use client";

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { sendContactForm } from '../actions/contact';
import styles from './Contact.module.css';
import { useEffect, useRef } from 'react';

const initialState = {
  success: false,
  message: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className={styles.button} disabled={pending}>
      {pending ? 'Invio in corso...' : 'Richiedi Preventivo'}
    </button>
  );
}

export default function Contact() {
  const [state, formAction] = useActionState(sendContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success && formRef.current) {
        formRef.current.reset();
    }
  }, [state.success]);

  return (
    <section className={styles.section} id="contatti">
      <div className={styles.container}>
        <div className={styles.intro}>
          <p className={styles.warning}>Se vuoi un sito da template, non sono la persona giusta.</p>
          <h2 className={styles.title}>Se vuoi una struttura digitale solida, pensata per crescere davvero,<br/>parliamone.</h2>
        </div>
        
        <form className={styles.form} action={formAction} ref={formRef}>
          <div className={styles.group}>
            <label htmlFor="name" className={styles.label}>Nome</label>
            <input type="text" id="name" name="name" className={styles.input} placeholder="Il tuo nome" required />
          </div>
          <div className={styles.group}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input type="email" id="email" name="email" className={styles.input} placeholder="tua@email.com" required />
          </div>
          <div className={styles.group}>
            <label htmlFor="phone" className={styles.label}>Telefono</label>
            <input type="tel" id="phone" name="phone" className={styles.input} placeholder="+39 000 000 0000" />
          </div>
          <div className={styles.group}>
            <label htmlFor="type" className={styles.label}>Tipo di progetto</label>
            <select id="type" name="type" className={styles.select}>
              <option value="">Seleziona un'opzione</option>
              <option value="vetrina">Sito Vetrina</option>
              <option value="ecommerce">E-commerce</option>
              <option value="landing">Landing Page</option>
              <option value="webapp">Web App / Dashboard</option>
              <option value="restyling">Restyling</option>
            </select>
          </div>
          <div className={styles.group}>
            <label htmlFor="message" className={styles.label}>Messaggio</label>
            <textarea id="message" name="message" className={styles.textarea} placeholder="Raccontami il tuo progetto..." required></textarea>
          </div>
          
          <SubmitButton />

          {state.message && (
            <p className={state.success ? styles.successMessage : styles.errorMessage} style={{ marginTop: '1rem', textAlign: 'center' }}>
              {state.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
