"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import styles from './CaseStudies.module.css';

const projects = [
  {
    id: "mysagra",
    title: "MySagra",
    role: "Full Stack Developer",
    description: "SaaS Open Source per la gestione completa di sagre e festival. Include ordinazioni al tavolo, stampa comande e dashboard in tempo reale. Un sistema complesso reso semplice per migliaia di utenti.",
    tech: ["Next.js", "PostgreSQL", "Real-time"],
    link: "https://mysagra.com",
    image: "/websites/mysagra.png", 
    logo: "🍝" 
  },
  {
    id: "sunfai",
    title: "Sun-Fai",
    role: "Lead Developer",
    description: "Piattaforma per una Cooperativa Energetica Rinnovabile. Gestione soci, monitoraggio consumi e portale informativo per promuovere la sostenibilità e l'energia condivisa.",
    tech: ["React", "Dashboard", "Energy"],
    link: "https://sun-fai.org",
    image: "/websites/sun-fai.png", 
    logo: "⚡"
  },

   {
    id: "domora",
    title: "Domora",
    role: "Web Design",
    description: "Landing page ad alta conversione progettata per generare lead qualificati nel settore delle consulenze per aste immobiliari. Design pulito, copy persuasivo e focus sull'acquisizione clienti.",
    tech: ["UX/UI", "Corporate", "Listing"],
    link: "https://domoraimmobiliare.it",
    image: "/websites/domoraimmobiliare.png", 
    logo: "🏠"
  },
  {
    id: "galacticos",
    title: "Galacticos",
    role: "Full Stack",
    description: "Hub digitale completo per una lega di calcio a 7 locale. Offre risultati live, classifiche aggiornate in tempo reale e un pannello di amministrazione su misura per la gestione automatizzata del torneo.",
    tech: ["Next.js", "Sports Stats", "Community"],
    link: "https://galacticosvb.it",
    image: "/websites/galacticosvb.png",
    logo: "⚽"
  },
  {
    id: "predanicola",
    title: "Preda Nicola",
    role: "Design & Dev",
    description: "Il mio hub personale e biglietto da visita digitale. Progettato con un'estetica moderna e pulita per presentare i miei servizi, i casi studio di successo e il mio approccio allo sviluppo web.",
    tech: ["Portfolio", "Identity", "Creative"],
    link: "https://predanicola.it",
    image: "/websites/predanicola.png",
    logo: "👨‍💻"
  },
  {
    id: "ssa",
    title: "SSA Agency",
    role: "Agency Site",
    description: "Sito web per agenzia di Social Media Marketing. Landing page ad alta conversione per attrarre nuovi clienti business.",
    tech: ["Marketing", "Landing Page", "Lead Gen"],
    link: "https://ssaagency.it",
    image: "/websites/ssaagency.png",
    logo: "🚀"
  }
];

export default function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = projects[currentIndex];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className={styles.section} id="progetti">
        <h2 className={styles.sectionTitle}>I Miei Progetti</h2>
        <p className={styles.subtitle}>Casi studio selezionati</p>

      <div className={styles.container}>
        {/* Left Column: Info & Navigation */}
        <div className={styles.infoColumn}>
          <div className={styles.projectSelector}>
            {projects.map((p, index) => (
              <button 
                key={p.id}
                onClick={() => setCurrentIndex(index)}
                className={`${styles.selectorBtn} ${index === currentIndex ? styles.activeSelector : ''}`}
                aria-label={`Select ${p.title}`}
              >
                <span className={styles.selectorIcon}>{p.logo}</span>
                <span className={styles.selectorLabel}>{p.title}</span>
              </button>
            ))}
          </div>

          <div className={styles.contentWrapper}>
            <div className={styles.header}>
              <h3 className={styles.projectTitle}>{currentProject.title}</h3>
              <span className={styles.roleTag}>{currentProject.role}</span>
            </div>
            
            <p className={styles.description}>
              {currentProject.description}
            </p>

            <div className={styles.tags}>
              {currentProject.tech.map(t => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>

            <div className={styles.actions}>
                <Link href={currentProject.link} target="_blank" className={styles.visitBtn}>
                    Visita Sito <ExternalLink size={16} />
                </Link>
                <div className={styles.navArrows}>
                    <button onClick={prevProject} className={styles.arrowBtn} aria-label="Previous project">
                        <ArrowLeft size={20} />
                    </button>
                    <button onClick={nextProject} className={styles.arrowBtn} aria-label="Next project">
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>
          </div>
        </div>

        {/* Right Column: Desktop Mockup */}
        <div className={styles.visualColumn}>
            <div className={styles.desktopWrapper}>
                <div className={styles.browserBar}>
                  <div className={styles.browserDots}></div>
                </div>
                <div className={styles.screenContent}>
                     <img 
                        src={currentProject.image} 
                        alt={`${currentProject.title} Preview`} 
                        className={styles.screenImage}
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://placehold.co/800x600/1a1a1a/FFF?text=${currentProject.title}`;
                        }}
                    />
                </div>
            </div>
            
            {/* Background decoration */}
            <div className={styles.glowEffect}></div>
        </div>
      </div>
    </section>
  );
}
