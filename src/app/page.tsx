import AboutSection from "@/components/homepage/AboutSection";
import FAQSection from "@/components/homepage/FAQSection";
import FavouriteSection from "@/components/homepage/FavouriteSection";
import HeroSection from "@/components/homepage/HeroSection";
import ServicesSection from "@/components/homepage/ServicesSection";
import { Poppins } from "next/font/google";
import ReviewSection from "@/components/homepage/ReviewSection";
import ContactSection from "@/components/homepage/ContactSection";
import ChangeTheme from "@/components/ChangeTheme";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export default function Home() {
  return (
    <div className={`bg-[#fafafa] dark:bg-black  ${poppins.className}`}>
      <div>
        <HeroSection/>
      <AboutSection/>
      <ServicesSection/>
      <FavouriteSection/>
      <FAQSection/>
      <ReviewSection/>
      <ContactSection/>
      <Footer />
      </div>
    </div>
  );
}
