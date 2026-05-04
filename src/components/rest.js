"use client";
import React from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { motion } from "framer-motion";

export default function Rest() {
  const testimonials = [
    { id: 1, stars: 4 },
    { id: 2, stars: 5 },
    { id: 3, stars: 3 },
  ];

  return (
    <section>
      <div className="bg-primary py-20 px-4">
        <p className="font-zodiak text-5xl text-center text-void leading-12">
          Come and Join
        </p>
        <h2 className="font-zodiak text-[46px] text-center text-void mt-2 leading-14">
          OUR HAPPY CUSTOMERS
        </h2>

        <div className="max-w-[1100px] mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`rounded-[18px] p-5 border ${
                idx === 1
                  ? "bg-[#e6ddcf] border-[#c8bca9]"
                  : "bg-[#f0ebe3] border-transparent"
              }`}
            >
              ...
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src="/images/human.png"
                    alt="Customer avatar"
                    className="w-11 h-11 rounded-full"
                  />
                  <div>
                    <h3 className="font-clash text-[25px] text-void leading-7">
                      James Smith
                    </h3>
                    <p className="font-clashSec text-sm text-void/80">
                      Entrepreneur
                    </p>
                  </div>
                </div>
                <div className="flex gap-1 pt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={
                        star <= item.stars ? "text-[#f4b020]" : "text-[#c6c6c6]"
                      }
                    />
                  ))}
                </div>
              </div>
              <p className="font-clashSec text-[14px] text-void/90 mt-4 leading-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing Lorem ipsum
                dolor sit amet, consectetur adipisicing dolor sit amet,
                consectetur adipisicing elit,Lorem ipsum amet, consectetur
                adipisicing elit,Lorem ipsum dolor sit amet, consectetur
                adipisicing elit,
              </p>
            </motion.article>
          ))}
        </div>

        <div className="flex justify-center items-center gap-2 mt-8">
          <span className="w-3 h-3 rounded-full bg-void inline-block" />
          <span className="w-3 h-3 rounded-full bg-void/35 inline-block" />
          <span className="w-3 h-3 rounded-full bg-void/35 inline-block" />
        </div>
      </div>

      <div className="bg-secondary relative py-18 px-4 overflow-hidden">
        <img src="/images/bl.png" alt="" className="absolute left-0 top-0 " />
        <img src="/images/br.png" alt="" className="absolute right-0 top-0  " />

        <div className=" mx-auto text-center">
          <h3 className="font-clash text-[50px] text-void leading-13">
            Join in and ger 15% off!
          </h3>
          <p className="font-clashSec text-void/80 text-[22px] mt-2">
            Subscribe to our newsletter in get 15% off discount code.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <div className="bg-primary rounded-full px-5 h-14 flex items-center w-full max-w-[420px]">
              <MdOutlineMail className="text-void text-xl" />
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent outline-none w-full ml-2 font-clashSec text-void placeholder:text-void/60"
              />
            </div>
            <button className="h-14 px-8 rounded-full bg-void text-white font-clash text-[20px] cursor-pointer select-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
