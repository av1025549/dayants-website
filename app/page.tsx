import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Inspired from "../components/Inspired";
import Experience from "../components/Experience";
import WhyChoose from "../components/WhyChoose";
import Gallery from "../components/Gallery";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Inspired />
      <Experience />
      <WhyChoose />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}