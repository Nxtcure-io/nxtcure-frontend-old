import Navbar from "../components/Navbar";
import Hero from "../components/HeroSection";
import FeaturesSection from "../components/StatsSection";
import NxtCureSection from "../components/AboutSection";
import TrustedBySection from "../components/TrustedBySection";
import MeetTheTeamSection from "../components/MeetTheTeam";
import CallToActionSection from "../components/CallToActionSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <NxtCureSection />
      <TrustedBySection />
      <MeetTheTeamSection />
      <CallToActionSection />
      <Footer />
    </>
  );
}
