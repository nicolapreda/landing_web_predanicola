import Header from "./components/Header";
import Hero from "./components/Hero";
import Problema from "./components/Problema";
import Attacco from "./components/Attacco";
import Colpevole from "./components/Colpevole";
import Rottura from "./components/Rottura";
import Posizionamento from "./components/Posizionamento";
import Outcome from "./components/Outcome";
import DoneForYou from "./components/DoneForYou";
import Comparison from "./components/Comparison";
import CaseStudies from "./components/CaseStudies";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        
        <Hero />
        
        <div className="card-wrapper card-dark">
          <div className="card-content">
            <Problema />
          </div>
        </div>

        <div className="card-wrapper card-glass">
          <div className="card-content">
            <Attacco />
          </div>
        </div>

        <div className="card-wrapper card-dark">
          <div className="card-content">
            <Colpevole />
          </div>
        </div>

        <div className="card-wrapper card-glow">
          <div className="card-content">
            <Rottura />
          </div>
        </div>

        <div className="card-wrapper card-dark">
          <div className="card-content">
            <Posizionamento />
          </div>
        </div>

        <div className="card-wrapper card-glass">
          <div className="card-content">
            <Outcome />
          </div>
        </div>

        <div className="card-wrapper card-dark">
          <div className="card-content">
            <DoneForYou />
          </div>
        </div>

        <div className="card-wrapper card-glow">
          <div className="card-content">
            <Comparison />
          </div>
        </div>

        <div className="card-wrapper card-dark">
          <div className="card-content">
            <CaseStudies />
          </div>
        </div>

        <div className="card-wrapper card-glass">
          <div className="card-content">
            <About />
          </div>
        </div>

        <div className="card-wrapper card-dark">
          <div className="card-content">
            <Contact />
          </div>
        </div>
        
        <Footer />
      </main>
    </div>
  );
}
