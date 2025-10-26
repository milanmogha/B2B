import Header from './components/Header';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import Products from './components/Products';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Capabilities />
        <Products />
        <About />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
