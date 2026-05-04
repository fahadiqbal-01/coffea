"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Coffeecart({ src }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5 }}
      className=" bg-[#E2D9C8] w-full max-w-[350px] p-4 rounded-[18px] group shadow-sm hover:shadow-xl duration-500"
    >
      <div className=" aspect-square overflow-hidden rounded-[18px] ">
        <img
          src={src}
          className=" w-full h-full object-cover group-hover:scale-[1.10] duration-300 ease-in-out "
        />
      </div>
      <div>
        <h1 className=" font-clash text-[28px] md:text-[38px] text-moca mt-4 ">
          Lungo coffee
        </h1>
        <p className=" font-clashSec text-[16px] md:text-[20px] text-moca  ">
          Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit,
        </p>
        <div className=" flex flex-col sm:flex-row justify-between items-center mt-3 gap-3 ">
          <p className=" font-clash text-[20px] text-moca leading-5 self-start sm:self-center ">
            Rs. 200
          </p>
          <button className=" w-full sm:w-auto text-white font-clashSec text-[16px] md:text-[18px] bg-moca rounded-lg px-6.5 py-2.5 select-none cursor-pointer hover:bg-transparent hover:text-moca duration-300 ease-out ">
            Order Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}
