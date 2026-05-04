import Bestbeans from "@/components/bestbeans";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Rest from "@/components/rest";
import Specialcoffee from "@/components/specialcoffee";
import Varients from "@/components/varients";
import React from "react";

export default function Landing() {
  return (
    <main>
      <Hero />
      <Varients />
      <Specialcoffee />
      <Bestbeans />
      <Rest />
    </main>
  );
}
