import Hero from "@/components/home/hero";
import NavBar from "@/components/shared/navbar";
import Image from "next/image";
import Pay from "../components/home/pay";
import Footer from "../components/shared/footer";
import Smarter from "../components/home/smarter";
import { Features } from "@/components/home/features";
import { Faq } from "@/components/home/faq";
import { Cta } from "@/components/home/cta";

export default function Home() {
  return (
    <div className="w-full h-fit bg-linear-to-tl from-gray-100 via-transparent to-transparent">
      <NavBar/>
      <Hero/>
      <Pay/>
      <Smarter/>
      <Features/>
      <Faq/>
      <Cta/>
      <Footer/>
    </div>
  );
}
