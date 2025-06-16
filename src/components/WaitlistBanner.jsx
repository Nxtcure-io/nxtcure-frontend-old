import { motion } from "framer-motion";

export default function WaitlistBanner() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-6 text-center bg-[radial-gradient(circle_at_center,_#020202_10%,_#020202_30%,_#F1E2FE_80%)]">
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfb_5tHzHN3NrhJFKpRhEhLkQIDQrXdH7jXGKK-PZrt4KBaAg/viewform?usp=sharing&ouid=105836010722188729845">
      <motion.div
        className="max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="font-bold leading-tight mt-2"
          style={{ fontSize: "2rem" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <span className="cormorant text-white bg-clip-text">
	  	Join Our Waitlist
          </span>
        </motion.h1>

      </motion.div>
      </a>
    </section>
  );
}
