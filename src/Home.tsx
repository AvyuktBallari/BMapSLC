import CallToActionSection from "./components/CTA"
import FAQ from "./components/FAQ"
import FeaturesAccordion from "./components/Features"
import Fix from "./components/Fix"
import Footer from "./components/Footer"
import HeroSection from "./components/Hero"
import Navbar from "./components/Navbar"
import PricingSection from "./components/Pricing"
import Problem from "./components/Problem"
import Testimonials11 from "./components/Testimonial"

const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <Problem />
        <Fix />
        <Testimonials11 />
        <FeaturesAccordion />
        <PricingSection />
        <FAQ />
        <CallToActionSection />
        <Footer />
    </div>
  )
}

export default Home