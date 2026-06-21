import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import GithubStats from "./components/GithubStats";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-emerald-950 to-cyan-950 text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Certificates />
        <GithubStats />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;