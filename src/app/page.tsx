import { Contact } from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { About } from "./components/About";
import { Services } from "./components/Services";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
