import { motion } from "framer-motion";

export default function WaitlistBanner() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 py-6 text-center bg-[radial-gradient(circle_at_center,_#F1E2FE_10%,_#F3ECFF_30%,_#EEF7FF_80%)]">
      <motion.div
        className="max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="font-bold leading-tight mt-2"
          style={{ fontSize: "4rem" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <span className="cormorant text-black bg-clip-text">
	  	Join Our Waitlist
          </span>
        </motion.h1>

      </motion.div>
    </section>
  );
}
