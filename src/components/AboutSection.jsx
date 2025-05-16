import React from "react";
import { motion } from "framer-motion";
import doctorLogo from "../assets/doctor.png";
import patientLogo from "../assets/patient.png";
import researcherLogo from "../assets/researcher.png";

export default function NxtCureSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <section className="py-20 bg-[radial-gradient(circle_at_center,_#F1E2FE_0%,_#F3ECFF_10%,_#EEF7FF_90%)] text-center">
      {/* Heading */}
      <motion.h2
        className="cormorant text-3xl font-bold mb-1 text-purple-600"
        style={{ fontSize: "64px", color: "rgb(82 59 124)" }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.6 }}
      >
        NxtCure
      </motion.h2>

      <motion.p
        className="text-gray-700 mb-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false, amount: 0.6 }}
      >
        Your Path to Hope and Healing
      </motion.p>

      <motion.p
        className="max-w-3xl mx-auto text-gray-400 mb-12"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: false, amount: 0.6 }}
      >
        At Next Cure, we believe everyone deserves access to cutting-edge
        healthcare. Our AI-powered platform transforms the trial process, making
        it accessible, trusted, and innovative for you:
      </motion.p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto pl-7 pr-7">
        {[
          {
            title: "Patients",
            img: patientLogo,
            iconClass: "fas fa-user-nurse",
            text: "Living with a condition and seeking hope? Our free Clinical Trial Matching tool connects you to trials that fit your health profile.",
          },
          {
            title: "Researchers",
            img: researcherLogo,
            iconClass: "fas fa-flask",
            text: "Struggling with overly restrictive trial criteria? Our Clinical Trial Accessibility Rater evaluates your protocols and helps optimize enrollment.",
          },
          {
            title: "Doctors",
            img: doctorLogo,
            iconClass: "fas fa-user-nurse",
            text: "Keep up with the latest therapies using our FDA Treatment Dashboard — explore ongoing trials all in one place.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="p-6 bg-white rounded-lg text-left"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={i}
            viewport={{ once: false, amount: 0.6 }}
          >
            <div className="mb-4">
              <i className={`${item.iconClass} text-4xl text-purple-600`}></i>
            </div>
            <div className="mb-4">
              <img
                src={item.img}
                alt={`${item.title} Logo`}
                className="w-12 h-12 object-contain"
              />
            </div>
            <h4 className="font-semibold mb-2">{item.title}</h4>
            <p className="text-gray-500 text-sm">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
