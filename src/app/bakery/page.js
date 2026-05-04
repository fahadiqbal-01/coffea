"use client";
import React from "react";
import Container from "@/components/container";
import Coffeecart from "@/components/coffeecart";
import { motion } from "framer-motion";

export default function Bakery() {
  const bakeryItems = [
    "images/sc1.png",
    "images/sc2.png",
    "images/sc3.png",
    "images/sc4.png",
    "images/sc1.png",
    "images/sc2.png",
  ];

  return (
    <main className="bg-secondary min-h-screen">
      {/* Header */}
      <section className="bg-void pt-40 pb-20">
        <Container className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-zodiak text-white text-[64px]"
          >
            Freshly Baked
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-clashSec text-white/80 text-[18px] mt-4"
          >
            Artisan pastries and breads, handmade every single morning.
          </motion.p>
        </Container>
      </section>

      <Container className="py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 justify-items-center"
        >
          {bakeryItems.map((img, index) => (
            <div key={index} className="flex flex-col items-center">
              <Coffeecart src={img} />
              <span className="mt-4 font-clash text-void uppercase tracking-widest text-sm">
                Bakery Selection
              </span>
            </div>
          ))}
        </motion.div>
      </Container>
    </main>
  );
}
