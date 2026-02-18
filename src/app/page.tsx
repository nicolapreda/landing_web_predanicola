import Header from "./components/Header";
import Hero from "./components/Hero";
import CostOfSlow from "./components/CostOfSlow";
import TheMechanism from "./components/TheMechanism";
import RealResults from "./components/RealResults";
import Roi from "./components/Roi";
import Comparison from "./components/Comparison";
import Faq from "./components/Faq";
import FinalCta from "./components/FinalCta";
import CaseStudies from "./components/CaseStudies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        
        <div className="section-card">
          <Hero />
        </div>
        
        <div className="section-card">
          <CostOfSlow />
        </div>
        
        <div className="section-card">
          <TheMechanism />
        </div>
        
        <div className="section-card">
          <RealResults />
        </div>

        <div className="section-card">
          <Roi />
        </div>

        <div className="section-card">
          <CaseStudies />
        </div>

        <div className="section-card">
          <Comparison />
        </div>
        
        <div className="section-card">
          <Faq />
        </div>
        
        <div className="section-card">
          <Contact />
        </div>
        
        <Footer />
      </main>
    </div>
  );
}
