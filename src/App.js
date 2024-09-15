import logo from './logo.svg';
import './App.css';
import Header from './comonents/header/Header';
import Home from './comonents/home/Home';
import About from './comonents/about/About';
import Skills from './comonents/skills/Skills';
import Services from './comonents/services/Services';
import Qual from './comonents/qual/Qual';
import Contact from './comonents/contact/Contact';
import Portfolio from './comonents/portfolio/Portfolio';
import Footer from './comonents/footer/Footer';
import ScrollUp from './comonents/_helpers/scrollup/ScrollUp';

const App = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Qual />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  )
}

export default App;
