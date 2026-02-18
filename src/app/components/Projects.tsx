"use client";
import Link from 'next/link';
import styles from './Projects.module.css';

const projects = [
  {
    id: 1,
    title: "MySagra",
    image: "/websites/mysagra.jpg", // User needs to provide this
    description: "SaaS Open Source per la gestione di sagre e festival.",
    href: "https://mysagra.com"
  },
  {
    id: 2,
    title: "Sun-Fai",
    image: "/websites/sun-fai.jpg", // User needs to provide this
    description: "Cooperativa Comunità Energetica Rinnovabile.",
    href: "https://sun-fai.org"
  },
  {
    id: 3,
    title: "DT Photo",
    image: "/websites/dtphoto.jpg", // User needs to provide this
    description: "Portfolio Fotografia Nightlife & Street.",
    href: "https://dtphoto.it"
  },
  {
    id: 4,
    title: "Domora",
    image: "/websites/domora.jpg",
    description: "Real Estate & Design",
    href: "#"
  },
  {
    id: 5,
    title: "Galacticos",
    image: "/websites/galacticos.jpg",
    description: "Sport & Entertainment",
    href: "#"
  },
  {
    id: 6,
    title: "Preda Nicola",
    image: "/websites/predanicola.png",
    description: "Personal Portfolio",
    href: "#"
  }
];

export default function Projects() {
  return (
    <section className={styles.section} id="progetti">
        <div className={styles.gridBackground}></div>
      <div className={styles.container}>
        <h2 className={styles.title}>I Miei Progetti 🚀</h2>
        <p className={styles.subtitle}>Alcuni dei lavori che ho realizzato con passione ❤️‍🔥</p>
        
        <div className={styles.slider}>
          {projects.map((project) => (
            <Link 
              key={project.id} 
              href={project.href} 
              target={project.href.startsWith('http') ? "_blank" : "_self"}
              className={styles.cardLink}
            >
              <div className={styles.card}>
                <div className={styles.imageContainer}>
                  {/* Using generic placeholders if image fails would be good, but sticking to img tag for now */}
                   <img 
                    src={project.image} 
                    alt={project.title} 
                    className={styles.image} 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://placehold.co/600x400/1a1a1a/FFF?text=${project.title}`;
                    }}
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectTags}>{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
