import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mohammed <span className="text-blue-600">Kardal</span>
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl mt-6 text-gray-700 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Développeur Web Full-Stack
        </motion.h2>

        <motion.p
          className="mt-6 text-gray-600 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Master 2 en Informatique, spécialisé en développement
          d’applications web avec <strong>Django</strong>,
          <strong> API REST</strong>, <strong>Vue.js</strong>,
          <strong> React</strong> et <strong>Docker</strong>.
        </motion.p>

        <motion.p
          className="mt-4 inline-block text-green-600 font-semibold bg-green-50 px-4 py-2 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Disponible immédiatement
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {/* CV = lien externe → <a> OK */}
          <a
            href="/cv.pdf"
            target="_blank"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Télécharger le CV
          </a>

          {/* Navigation interne → Link */}
          <Link
            to="/projects"
            className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition"
          >
            Voir mes projets
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
