"use client";
import React from "react";
import Container from "./container";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className=" w-full 2xl:h-[90vh] xl:h-[80vh] ">
      <Container className={` pt-24 md:pt-43 pb-32 md:pb-52 `}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className=" font-clashSec text-[20px] text-white "
        >
          Welcome
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className=" font-zodiak text-white text-[42px] md:text-[72px] leading-tight md:leading-20 max-w-150 mt-10 "
        >
          We serve the richest coffee in the city!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className=" font-clashSec text-[18px] text-white leading-6.5 mt-6 "
        >
          We serve the richest coffee in the city!
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className=" font-clash text-black text-[18px] bg-white px-10 py-4 rounded-full mt-10 md:mt-14 "
        >
          Order Now
        </motion.button>
      </Container>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        src="images/banner.png"
        className=" w-full h-full md:h-auto object-cover absolute left-0 -top-10 -z-50 "
      />
    </section>
  );
}
