import AboutSection from "@/components/homepage/AboutSection";
import HeroSection from "@/components/homepage/HeroSection";
import Image from "next/image";
import { Toaster, toast } from 'sonner'
import { Poppins } from "next/font/google";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export default function Home() {
  return (
    <div className={`bg-[#fafafa] ${poppins.className}`}>
      <HeroSection/>
      <AboutSection/>
    </div>
  );
}
