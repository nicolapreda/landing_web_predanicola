import Header from "./components/Header";
import Hero from "./components/Hero";
import ProblemSolution from "./components/ProblemSolution";
import CostOfSlow from "./components/CostOfSlow";
import Positioning from "./components/Positioning";
import ValuePrice from "./components/ValuePrice";
import Services from "./components/Services";
import RealResults from "./components/RealResults";
import TechStack from "./components/TechStack";
import WhyMe from "./components/WhyMe";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Hero />
        <ProblemSolution />
        <CostOfSlow />
        <Positioning />
        <ValuePrice />
        <Services />
        <RealResults />
        <TechStack />
        <WhyMe />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
