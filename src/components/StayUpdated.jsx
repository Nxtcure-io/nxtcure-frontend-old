import { motion } from "framer-motion";

export default function StayUpdated() {
  return (
    <section className="bg-[radial-gradient(circle_at_center,_#F1E2FE_0%,_#F3ECFF_10%,_#EEF7FF_90%)] py-12 px-4 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 mb-5">
        {/* Left: Text Section */}
        <motion.div
          className="text-center md:text-left md:w-1/2 space-y-3 mt-5"
          style={{ marginRight: "2rem" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }} // triggers every time it's ~30% visible
        >
          <h2 className="cormorant text-4xl md:text-5xl font-bold text-gray-800 italic">
            Stay updated with
            <br /> NxtCure
          </h2>
          <p className="text-gray-500 text-lg">
            Join our newsletter to receive the latest insights, trial updates,
            and healthcare innovations directly to your inbox.
          </p>
        </motion.div>

        {/* Right: Form Section */}
        <motion.div
          className="md:w-1/2 flex flex-col sm:flex-row items-center gap-4 w-full justify-center md:justify-end"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="bg-white px-4 py-2 w-full sm:w-auto flex-1 rounded-full border border-[#7D4AE7] focus:outline-none"
          />
          <motion.button
            className="bg-[#7D4AE7] text-white px-6 py-2 rounded-full button_hvr transition cursor-pointer whitespace-nowrap"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "mirror",
            }}
          >
            Subscribe
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
