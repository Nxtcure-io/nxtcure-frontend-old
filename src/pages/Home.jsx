import Navbar from "../components/Navbar";
import Hero from "../components/HeroSection";
import FeaturesSection from "../components/StatsSection";
import NxtCureSection from "../components/AboutSection";
import TrustedBySection from "../components/TrustedBySection";
import MeetTheTeamSection from "../components/MeetTheTeam";
import CallToActionSection from "../components/CallToActionSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import HowItStarted from "../components/HowItStarted";
import StayUpdated from "../components/StayUpdated";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <NxtCureSection />
      <TrustedBySection />
      <HowItStarted />
      <MeetTheTeamSection />
      <StayUpdated />
      <ContactForm />
      <Footer />
    </>
  );
}
