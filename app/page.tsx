import React from "react";
import Header from "@/app/Sections/Header";
import Hero from "@/app/Sections/Hero";
import Features from "@/app/Sections/Features";
import Pricing from "@/app/Sections/Pricing";
import Faq from "@/app/Sections/Faq";
import Testimonials from "@/app/Sections/Testmonials";
import Download from "@/app/Sections/Download";
import Footer from "@/app/Sections/Footer";

const Home = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
      <Footer />
    </main>
  );
};
export default Home;
