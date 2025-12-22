"use client";

import { motion } from "framer-motion";


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function IAM() {
  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-gray-900 to-black text-gray-200 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl" />

      {/* Hero */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={fadeUp}
        className="relative max-w-6xl mx-auto px-6 py-24 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          Industry–Academia Meet
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          The flagship convergence of <span className="text-blue-400 font-semibold">IMPETUS 9.0</span>,
          connecting industry leaders, academicians, and aspiring engineers
          to foster innovation and collaboration.
        </p>
      </motion.div>

      {/* About IAM */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        variants={fadeUp}
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <h2 className="text-3xl font-bold text-white mb-6">
          About IAM
        </h2>

        <p className="text-gray-300 leading-relaxed">
          The Industry–Academia Meet (IAM) under IMPETUS establishes a shared
          platform for collaboration between industry and academia. It
          prioritizes knowledge exchange and insightful discussions on
          engineering practices, employability trends, and talent
          identification in campus recruitment.
        </p>

        <p className="mt-4 text-gray-300 leading-relaxed">
          By bringing together senior industry officials, academicians, and
          students, IAM nurtures meaningful dialogue and strengthens
          long-term engagement between institutions and organizations.
        </p>
      </motion.div>

      {/* Aim */}
      <div className="bg-slate-900/60 backdrop-blur">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeUp}
          className="max-w-6xl mx-auto px-6 py-20"
        >
          <h2 className="text-3xl font-bold text-white mb-10">
            Aim of Industry–Academia Meet
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Address technical challenges through collaborative projects and consultancy services.",
              "Showcase practical solutions via research studies and academic publications.",
              "Implement innovative and time-efficient strategies for campus hiring processes.",
              "Encourage active engagement between industries and scholars to solve real-world problems.",
              "Create networking opportunities with delegates from industries and research institutes.",
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-slate-800/70 border border-slate-700 p-6 rounded-xl text-gray-300"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Flagship Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={fadeUp}
        className="relative max-w-6xl mx-auto px-6 py-24 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Flagship Event of IMPETUS 9.0
        </h2>

        <p className="mt-6 text-gray-300 max-w-3xl mx-auto">
          The Industry–Academia Meet stands as the flagship event of IMPETUS,
          driving impactful conversations, collaborative innovation, and
          sustainable partnerships between industry and academia.
        </p>
      </motion.div>
    </section>
  );
}
