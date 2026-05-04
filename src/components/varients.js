"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Varients() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        show: {
          transition: { staggerChildren: 0.2 },
        },
      }}
      className=" bg-secondary py-12 flex flex-wrap justify-center items-center gap-10 md:gap-20 lg:gap-37.5 overflow-x-hidden px-4 "
    >
      <motion.div
        variants={itemVariants}
        className=" flex flex-col justify-center items-center "
      >
        <img src="icons/hotcoffee.png" className=" w-20 mb-2.5 " />
        <p className=" text-[#544A3E] font-clash text-[18px] ">Hot Coffee</p>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className=" flex flex-col justify-center items-center "
      >
        <img src="icons/coldcoffee.png" className=" w-20 mb-2.5 " />
        <p className=" text-[#544A3E] font-clash text-[18px] ">Cold Coffee</p>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className=" flex flex-col justify-center items-center "
      >
        <img src="icons/coffeecup.png" className=" w-20 mb-2.5 " />
        <p className=" text-[#544A3E] font-clash text-[18px] ">Coffee Cup</p>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className=" flex flex-col justify-center items-center "
      >
        <img src="icons/dessert.png" className=" w-20 mb-2.5 " />
        <p className=" text-[#544A3E] font-clash text-[18px] ">Dessert</p>
      </motion.div>
    </motion.section>
  );
}
