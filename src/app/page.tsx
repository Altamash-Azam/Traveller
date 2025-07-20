import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import { Toaster, toast } from 'sonner'

export default function Home() {
  return (
    <div className="bg-[#fafafa]">
      <HeroSection/>
    </div>
  );
}
