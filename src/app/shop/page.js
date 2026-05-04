"use client";
import React from "react";
import Container from "@/components/container";
import Coffeecart from "@/components/coffeecart";
import Bestbeans from "@/components/bestbeans";
import { motion } from "framer-motion";

export default function Shop() {
  const allProducts = [
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
      <section className="bg-void pt-40 pb-20">
        <Container className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-zodiak text-white text-[64px]"
          >
            Our Shop
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center flex-wrap gap-4 md:gap-6 mt-8 text-white/60 font-clashSec uppercase text-sm tracking-widest"
          >
            <span className="text-white border-b border-white pb-1 cursor-pointer">
              All
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Beans
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Brewing Kit
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Merch
            </span>
          </motion.div>
        </Container>
      </section>

      <Container className="py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 gap-x-4 justify-items-center">
          {allProducts.map((img, index) => (
            <Coffeecart key={index} src={img} />
          ))}
        </div>
      </Container>
    </main>
  );
}
