import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Image 
              src="/logo.webp" 
              alt="Nicola Preda Logo" 
              width={150} 
              height={40} 
              className={styles.logoImage}
            />
            <p className={styles.tagline}>
              Sviluppo Web Custom per aziende ambiziose.
            </p>
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copyright}>© {new Date().getFullYear()} Nicola Preda.</p>
          <div className={styles.socials}>
            <Link href="https://www.linkedin.com/in/nicola-preda-5b0722233/" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</Link>
            <Link href="https://github.com/nicolapreda" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</Link>
            <Link href="https://instagram.com/nicolapreda_" target="_blank" rel="noopener noreferrer" className={styles.link}>Instagram</Link>
            <Link href="mailto:info@predanicola.it" className={styles.link}>Email</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
