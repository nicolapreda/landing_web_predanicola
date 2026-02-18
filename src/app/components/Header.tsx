import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

const navItems = [
  { label: "Servizi", href: "#servizi" },
  { label: "Stack", href: "#stack" },
  { label: "Processo", href: "#processo" },
  { label: "Contatti", href: "#contatti" }
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.navPill}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo.webp"
            alt="Nicola Preda Logo"
            width={150}
            height={40}
            className={styles.logoImage}
            priority
          />
        </Link>
        <div className={styles.links}>
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className={styles.link}>
              {item.label}
            </Link>
          ))}
        </div>
        <Link href="#contatti" className={styles.cta}>
          Parliamone
        </Link>
      </div>
    </header>
  );
}
