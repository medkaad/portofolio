import { motion } from "framer-motion";

function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          À propos
        </motion.h2>

        <motion.p
          className="text-gray-700 leading-relaxed text-lg text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          Développeur Web Full-Stack diplômé d’un <strong>Master 2 en Ingénierie
          des Systèmes d’Information</strong>. J’ai travaillé sur des projets web
          full-stack en environnement <strong>Agile</strong>, de la conception
          jusqu’au déploiement. Je suis particulièrement orienté backend avec
          <strong> Django</strong> et la création d’
          <strong>API REST</strong> sécurisées et performantes.
        </motion.p>
      </div>
    </section>
  );
}

export default About;
