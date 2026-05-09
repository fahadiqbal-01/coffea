"use client";
import React from "react";
import Container from "@/components/container";
import Coffeecart from "@/components/coffeecart";
import Varients from "@/components/varients";
import { motion } from "framer-motion";

export default function Coffee() {
  const coffeeItems = [
    "images/c1.png",
    "images/c2.png",
    "images/c3.png",
    "images/c4.png",
    "images/sc1.png",
    "images/sc2.png",
    "images/sc3.png",
    "images/sc4.png",
  ];

  return (
    <main className="bg-primary min-h-screen">
      {/* Page Header */}
      <section className="bg-void pt-40 pb-20">
        <Container className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-zodiak text-white text-[64px] leading-tight"
          >
            The Art of Coffee
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-clashSec text-white/80 text-[18px] mt-4 max-w-2xl mx-auto"
          >
            From bean to cup, explore our selection of artisan roasts and
            signature blends crafted for the perfect morning.
          </motion.p>
        </Container>
      </section>

      <Varients />

      <Container className="py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 gap-6 justify-items-center">
          {coffeeItems.map((img, index) => (
            <Coffeecart key={index} src={img} />
          ))}
        </div>
      </Container>
    </main>
  );
}
