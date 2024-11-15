import HomeHero from "@/components/HomeHero";
import HomeAbout from "@/components/HomeAbout";
import HomeNews from "@/components/HomeNews";
import Image from "next/image";
import HomeValueStatements from "@/components/HomeValueStatements";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <HomeHero />

      <HomeAbout />

      <HomeNews />

      <HomeValueStatements />

      {/* <Footer/> */}
    </>
  );
}
