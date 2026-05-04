"use client";
import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import Container from "./container";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#2f2217] text-white px-6 md:px-14 lg:px-24 py-16">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          show: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <Container className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          <motion.div
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
          >
            <img src="images/logo.png" />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <h3 className="font-zodiak text-[26px] leading-8 mb-4 uppercase">
              Privacy
            </h3>
            <ul className="space-y-2.5 font-clashSec text-[18px] leading-8.5 text-white/90">
              <li>Terms of use</li>
              <li>Privacy policy</li>
              <li>Cookies</li>
            </ul>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <h3 className="font-zodiak text-[26px] leading-8 mb-4 uppercase">
              Services
            </h3>
            <ul className="space-y-2.5 font-clashSec text-[18px] leading-8.5 text-white/90">
              <li>Shop</li>
              <li>Order ahead</li>
              <li>Menu</li>
            </ul>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <h3 className="font-zodiak text-[26px] leading-8 mb-4 uppercase">
              About us
            </h3>
            <ul className="space-y-2.5 font-clashSec text-[18px] leading-8.5 text-white/90">
              <li>Find a location</li>
              <li>About us</li>
              <li>Out story</li>
            </ul>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <h3 className="font-zodiak text-[26px] leading-8 mb-4 uppercase">
              Infotnation
            </h3>
            <ul className="space-y-2.5 font-clashSec text-[18px] leading-8.5 text-white/90">
              <li>Plons & pricing</li>
              <li>Sell your prodcts</li>
              <li>Jobs</li>
            </ul>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <h3 className="font-zodiak text-[26px] leading-8 mb-4 uppercase">
              Social media
            </h3>
            <div className="flex items-center gap-4 text-2xl pt-1">
              <FaXTwitter className="cursor-pointer" />
              <FaInstagram className="cursor-pointer" />
              <FaFacebookF className="cursor-pointer" />
              <FaLinkedinIn className="cursor-pointer" />
            </div>
          </motion.div>
        </Container>
      </motion.div>
    </footer>
  );
}
