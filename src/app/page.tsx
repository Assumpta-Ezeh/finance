import Hero from "@/components/home/hero";
import NavBar from "@/components/shared/navbar";
import Image from "next/image";
import Pay from "./pay";

export default function Home() {
  return (
    <div className="w-full h-fit bg-linear-to-tl from-gray-100 via-transparent to-transparent">
      <NavBar/>
      <Hero/>
      <Pay/>
    </div>
  );
}
