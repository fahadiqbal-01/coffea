"use client";
import React from "react";
import { FaAnglesRight } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Bestbeans() {
  return (
    <section className=" min-h-[350px] py-16 bg-secondary flex justify-center items-center relative overflow-hidden px-4">
      <motion.img
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        src="images/beans.png"
        className=" absolute right-0 top-0 w-32 md:w-auto opacity-40 md:opacity-100 "
      />
      <motion.img
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        src="images/beansSec.png"
        className=" absolute left-0 top-0 w-32 md:w-auto opacity-40 md:opacity-100 "
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center md:text-left relative z-10"
      >
        <h1 className=" text-[32px] md:text-[40px] leading-tight md:leading-12.5 text-void font-zodiak ">
          Check Out Our Best <br /> Coffee Beans
        </h1>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className=" text-white text-[16px] font-clashSec px-9.5 py-4 bg-void rounded-full mt-6 flex justify-center items-center gap-1 select-none cursor-pointer "
        >
          Explore Out Products <FaAnglesRight />
        </motion.button>
      </motion.div>
    </section>
  );
}
