import { useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import alessandroPic from "../assets/alessandro.jpg";
import shruthiPic from "../assets/shruthi.jpg";
import keanuPic from "../assets/keanu.jpg";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -30,
    transition: { duration: 0.5, ease: "easeIn" },
  },
};

export default function MeetTheTeamSection() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const inView1 = useInView(ref1, { amount: 0.4 });
  const inView2 = useInView(ref2, { amount: 0.4 });

  return (
    <section className="py-20 bg-white text-center px-4">
      <h2 className="cormorant text-5xl font-bold mb-4 text-gray-700">
        Meet the Team
      </h2>
      <p className="text-gray-500 mb-12">
        Together, they're building a future where no one is left behind in the
        search for healing.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Alessandro */}
        <div ref={ref1} className="h-full">
          <AnimatePresence mode="wait">
            {inView1 && (
              <motion.div
                key="alessandro"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white p-6 rounded-lg border border-gray-400 max-w-md w-full h-full"
                style={{ boxShadow: "1px 2px 5px gray" }}
              >
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center mb-4">
                      <img
                        src={alessandroPic}
                        alt="Alessandro"
                        className="w-20 h-20 rounded-full mr-4"
                      />
                      <div className="text-left">
                        <h4 className="font-bold">Alessandro Hammond</h4>
                        <p className="text-sm text-gray-400">CEO</p>
                      </div>
                    </div>
                    <p className="text-justify text-gray-600 text-sm">
                      Alessandro Hammond is a Harvard graduate and Schwarzman
                      Scholar currently conducting clinical research at Boston
                      Children’s Hospital, the Broad Institute, and
                      Massachusetts General Hospital. Specializing in oncology
                      and hematology, he has authored 20+ publications in
                      leading journals including Nature, Nature Medicine, and
                      JCO. Featured in Forbes and Good Morning America, he is
                      passionate about connecting patients with clinical trials
                      and guiding researchers through them.
                    </p>
                  </div>
                  <div className="mt-4 text-left">
                    <a
                      href="https://www.linkedin.com/in/alessandro-hammond-43b650224/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Alessandro LinkedIn"
                      className="inline-block"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 text-gray-600 hover:text-blue-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-6a6 6 0 016-6zM2 9h4v12H2z"
                        />
                        <circle
                          cx="4"
                          cy="4"
                          r="2"
                          stroke="currentColor"
                          strokeWidth={2}
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>


        {/* Shruthi */}
        <div ref={ref1} className="h-full">
          <AnimatePresence mode="wait">
            {inView1 && (
              <motion.div
                key="shruthi"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white p-6 rounded-lg border border-gray-400 max-w-md w-full h-full"
                style={{ boxShadow: "1px 2px 5px gray" }}
              >
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center mb-4">
                      <img
                        src={shruthiPic}
                        alt="Shruthi"
                        className="w-20 h-20 rounded-full mr-4"
                      />
                      <div className="text-left">
                        <h4 className="font-bold">Shruthi</h4>
                        <p className="text-sm text-gray-400">COO</p>
                      </div>
                    </div>
                    <p className="text-justify text-gray-600 text-sm">
		    	Sruthi Ranganathan is a medical student at the Univeristy of Cambridge, having grown up in Singapore. She has clinical interests in neurosurgery and oncology, and is deeply passionate about evidence-based medicine, healthcare equity, and policies. At NxtCure, she is excited to aid in developing the next big solution for barriers in clinical trials enrolllment and commitment for patients, doctors, and researchers
                    </p>
                  </div>
                  <div className="mt-4 text-left">
                    <a
                      href="https://www.linkedin.com/in/sruthi-ranganathan-9243441b7/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Sruthi LinkedIn"
                      className="inline-block"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 text-gray-600 hover:text-blue-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-6a6 6 0 016-6zM2 9h4v12H2z"
                        />
                        <circle
                          cx="4"
                          cy="4"
                          r="2"
                          stroke="currentColor"
                          strokeWidth={2}
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Keanu */}
        <div ref={ref1} className="h-full">
          <AnimatePresence mode="wait">
            {inView1 && (
              <motion.div
                key="keanu"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white p-6 rounded-lg border border-gray-400 max-w-md w-full h-full"
                style={{ boxShadow: "1px 2px 5px gray" }}
              >
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center mb-4">
                      <img
                        src={keanuPic}
                        alt="Keanu"
                        className="w-20 h-20 rounded-full mr-4"
                      />
                      <div className="text-left">
                        <h4 className="font-bold">Keanu Clark</h4>
                        <p className="text-sm text-gray-400">CTO</p>
                      </div>
                    </div>
                    <p className="text-justify text-gray-600 text-sm">
		    	Keanu Clark is a Massachusetts Institute of Technology Graduate who studied Computer Science and Molecular Biology.  During his time in the Sharp Lab at the MIT Koch Institute for Integrative Cancer Research, he learned machine learning in dialouge with cutting edge computational biology literature. A winner of HackMIT and the IBM Call for Code Challenge, he has a curious mind for making technology solve tough problems in unconvential ways from algorithms serving medical discovery to novel networking protocols.
                    </p>
                  </div>
                  <div className="mt-4 text-left">
                    <a
                      href="https://www.linkedin.com/in/keanu-clark-3625b4286/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Keanu LinkedIn"
                      className="inline-block"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 text-gray-600 hover:text-blue-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-6a6 6 0 016-6zM2 9h4v12H2z"
                        />
                        <circle
                          cx="4"
                          cy="4"
                          r="2"
                          stroke="currentColor"
                          strokeWidth={2}
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
