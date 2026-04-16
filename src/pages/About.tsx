import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import TechStackSection from "@/components/TechStackSection";
import AcademicSection from "@/components/AcademicSection";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <AboutSection />
        <TechStackSection />
        <AcademicSection />
        <TestimonialSection />
      </div>
      <Footer />
    </div>
  );
};

export default About;
