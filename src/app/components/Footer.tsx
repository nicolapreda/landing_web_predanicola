import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>NP.</div>
        <p className={styles.copyright}>© {new Date().getFullYear()} Nicola Preda. All rights reserved.</p>
        <div className={styles.socials}>
          <Link href="#" className={styles.link}>LinkedIn</Link>
          <Link href="#" className={styles.link}>GitHub</Link>
          <Link href="#" className={styles.link}>Email</Link>
        </div>
      </div>
    </footer>
  );
}
