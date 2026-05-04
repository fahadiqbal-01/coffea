"use client";
import React from "react";
import Container from "@/components/container";
import { FaGlobeAmericas, FaSeedling, FaFireAlt, FaMugHot } from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="bg-primary min-h-screen">
      {/* Header */}
      <section className="bg-void pt-40 pb-24">
        <Container className="text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="font-zodiak text-white text-[64px]">Our Story</motion.h1>
        </Container>
      </section>

      {/* Content Section 1 */}
      <section className="py-24">
        <Container className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-zodiak text-void text-[42px] leading-tight mb-6">
              Brewing Excellence <br /> Since 2010
            </h2>
            <p className="font-clashSec text-void/80 text-[18px] leading-relaxed mb-6">
              Founded on the belief that coffee is more than just a drink—it's a
              ritual—Coffea began as a small corner roastery. Today, we continue
              to bridge the gap between farmers and your cup.
            </p>
            <p className="font-clashSec text-void/80 text-[18px] leading-relaxed">
              Every bean is ethically sourced and roasted in small batches to
              ensure the unique flavor profile of the region is preserved.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[24px] overflow-hidden">
            <img
              src="images/banner.png"
              alt="Our Roastery"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </Container>
      </section>

      {/* Our Process Section */}
      <section className="bg-primary py-24 border-y border-void/10">
        <Container>
          <h2 className="font-zodiak text-void text-[42px] text-center mb-16">The Journey of a Bean</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: <FaSeedling />, title: "Sourcing", desc: "We partner with local farmers in Ethiopia and Brazil." },
              { icon: <FaGlobeAmericas />, title: "Selection", desc: "Only the top 5% of hand-picked beans make the cut." },
              { icon: <FaFireAlt />, title: "Roasting", desc: "Small-batch roasting to pull out unique flavor profiles." },
              { icon: <FaMugHot />, title: "Brewing", desc: "Crafted by baristas who treat coffee as an art form." },
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="text-4xl text-moca mb-6 p-6 bg-secondary rounded-full">
                  {step.icon}
                </div>
                <h4 className="font-clash text-void text-[22px] mb-3">{step.title}</h4>
                <p className="font-clashSec text-void/70 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Philosophy Section */}
      <section className="bg-secondary py-24">
        <Container className="text-center max-w-3xl">
          <h2 className="font-zodiak text-void text-[42px] mb-8">
            Our Philosophy
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Quality", desc: "Premium grade specialty beans only." },
              {
                title: "Community",
                desc: "Supporting local farmers directly.",
              },
              { title: "Craft", desc: "Precision roasting and brewing." },
            ].map((item, i) => (
              <div key={i} className="p-6">
                <h4 className="font-clash text-moca text-[22px] mb-2">
                  {item.title}
                </h4>
                <p className="font-clashSec text-void/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-void">
        <Container className="text-center">
          <p className="font-zodiak text-white text-[32px] md:text-[48px] leading-tight italic max-w-4xl mx-auto">
            "A good cup of coffee is like a warm hug for your soul. We make sure every sip counts."
          </p>
          <div className="h-px w-24 bg-secondary mx-auto mt-10" />
          <p className="text-secondary font-clash mt-6 uppercase tracking-widest">Master Roaster</p>
        </Container>
      </section>
    </main>
  );
}
