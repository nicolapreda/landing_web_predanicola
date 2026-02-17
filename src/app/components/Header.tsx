import Link from 'next/link';
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
      <div className={styles.nav}>
        <Link href="#hero" className={styles.logo}>NP.</Link>
        <div className={styles.links}>
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className={styles.link}>
              {item.label}
            </Link>
          ))}
          <Link href="#contatti" className={styles.cta}>
            Parliamone
          </Link>
        </div>
      </div>
    </header>
  );
}
