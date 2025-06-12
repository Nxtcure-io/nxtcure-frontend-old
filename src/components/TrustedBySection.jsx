import React from "react";
import { motion } from "framer-motion";

import harvardLogo from "../assets/harvard.png";
import yaleLogo from "../assets/Yale_University_logo.png";
import mitLogo from "../assets/mit.png";
import hipaaBadge from "../assets/hipaa-compliant.png";
import schwarzman from "../assets/sc.png";
import broad from "../assets/broad.png";
import forbes from "../assets/forbes.png";

export default function TrustedBySection() {
  const logos = [
    { src: harvardLogo, alt: "Harvard Logo", size: "w-16 h-16" },
    { src: yaleLogo, alt: "Yale Logo", size: "h-10" },
    { src: mitLogo, alt: "MIT Logo", size: "h-10" },
    { src: schwarzman, alt: "Schwarzman Scholars Logo", size: "h-10" },
    { src: broad, alt: "Broad Institute Logo", size: "h-10" },
    { src: forbes, alt: "Forbes Logo", size: "h-7" },
  ];

  return (
    <section className="py-20 bg-white text-center">
      <motion.h3
        className="text-3xl font-bold mb-10 text-gray-700"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.6 }}
      >
        Trusted By
      </motion.h3>

      <div className="flex flex-wrap justify-center items-center gap-12">
        {logos.map((logo, index) => (
          <motion.img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className={logo.size}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: false, amount: 0.5 }}
          />
        ))}
      </div>

      <motion.p
        className="text-gray-500 mt-10 font-medium"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
      >
        HIPAA Compliant
      </motion.p>
      <motion.p
        className="text-sm text-gray-400 mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: false }}
      >
        Secure, and built for you because your health journey matters
      </motion.p>

      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <img
          src={hipaaBadge}
          alt="HIPAA Compliant Badge"
          className="h-20"
          style={{ height: "8rem", width: "15rem" }}
        />
      </motion.div>
    </section>
  );
}
