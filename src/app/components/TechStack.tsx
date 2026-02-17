import styles from './TechStack.module.css';

const stack = [
  { name: "Next.js", desc: "Rendering veloce e SEO nativa" },
  { name: "Node.js", desc: "Backend personalizzato" },
  { name: "MySQL", desc: "Database strutturato correttamente" },
  { name: "Docker", desc: "Ambiente stabile e replicabile" },
  { name: "VPS", desc: "Server dedicato, non hosting condiviso" },
];

export default function TechStack() {
  return (
    <section className={styles.section} id="stack">
      <div className={styles.container}>
        <h2 className={styles.title}>Stack moderno, non "builder-based"</h2>
        <div className={styles.grid}>
          {stack.map((item) => (
            <div key={item.name} className={styles.card}>
              <h3 className={styles.techName}>{item.name}</h3>
              <p className={styles.techDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
        <p className={styles.conclusion}>
          Non dipendi da piattaforme. Il tuo sito è tuo.
        </p>
      </div>
    </section>
  );
}
