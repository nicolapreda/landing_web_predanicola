import Link from 'next/link';
import styles from './ProjectSection.module.css';

interface ProjectSectionProps {
  title: string;
  category: string;
  description: string;
  variant: 'blue' | 'white';
  imageSrc?: string; // Placeholder for now
  ctaLink?: string;
}

export default function ProjectSection({ title, category, description, variant, ctaLink = '#' }: ProjectSectionProps) {
  return (
    <section className={`${styles.section} ${variant === 'blue' ? styles.sectionBlue : styles.sectionWhite}`}>
      <div className={styles.container}>
        {/* Simple logic to alternate if needed, for now standard order */}
        {variant === 'white' && <div className={styles.image} style={{background: 'url(/placeholder-events.jpg) center/cover'}} />}
        
        <div className={styles.content}>
          <span className={styles.label}>{category}</span>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          <Link href={ctaLink} className={styles.cta}>
            Scopri il progetto →
          </Link>
        </div>

        {variant === 'blue' && <div className={styles.image} style={{background: 'url(/placeholder-sport.jpg) center/cover'}} />}
      </div>
    </section>
  );
}
