import Badge from "./Badge";
import { motion } from "framer-motion";

function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Expériences professionnelles
        </motion.h2>

        {/* Expérience 1 */}
        <motion.div
          className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition mb-8"
          whileHover={{ y: -4 }}
        >
          <h3 className="text-xl font-semibold">
            Développeur Web – Projet Django (Immersion)
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            Arimayi · 12/2025 – 02/2026
          </p>

          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Analyse des besoins et rédaction des user stories</li>
            <li>Développement de nouvelles fonctionnalités avec Django</li>
            <li>Amélioration et correction de fonctionnalités existantes</li>
            <li>Écriture et correction de tests unitaires</li>
            <li>Travail en méthodologie Agile (Scrum)</li>
          </ul>

          <div className="flex flex-wrap gap-2 mt-4">
            <Badge text="Django" type="backend" />
            <Badge text="Python" type="backend" />
            <Badge text="API REST" type="backend" />
            <Badge text="Tests" type="backend" />
            <Badge text="Docker" type="tools" />
            <Badge text="Git" type="tools" />
            <Badge text="Agile" type="tools" />
          </div>
        </motion.div>

        {/* Expérience 2 */}
        <motion.div
          className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition mb-8"
          whileHover={{ y: -4 }}
        >
          <h3 className="text-xl font-semibold">
            Administrateur IBM i
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            Armonie · Paris · 04/2023 – 12/2023
          </p>

          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Administration de systèmes IBM i en production</li>
            <li>Gestion des sauvegardes et de la continuité de service</li>
            <li>Analyse et résolution d’incidents techniques</li>
            <li>Collaboration avec équipes techniques et métiers</li>
          </ul>

          <div className="flex flex-wrap gap-2 mt-4">
            <Badge text="IBM i / AS400" type="tools" />
            <Badge text="DB2" type="database" />
            <Badge text="CL" type="backend" />
          </div>
        </motion.div>

        {/* Expérience 3 */}
        <motion.div
          className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
          whileHover={{ y: -4 }}
        >
          <h3 className="text-xl font-semibold">
            Développeur Full-Stack Symfony & Vue.js
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            Norsys Afrique · 01/2022 – 08/2022
          </p>

          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Analyse du besoin et conception de solutions web</li>
            <li>Développement d’une application de gestion (CRUD, auth)</li>
            <li>Intégration frontend et création de bases de données</li>
            <li>Dockerisation de l’environnement</li>
            <li>Maintenance et amélioration continue</li>
          </ul>

          <div className="flex flex-wrap gap-2 mt-4">
            <Badge text="Symfony" type="backend" />
            <Badge text="PHP" type="backend" />
            <Badge text="VueJS" type="frontend" />
            <Badge text="MySQL" type="database" />
            <Badge text="Docker" type="tools" />
            <Badge text="Git" type="tools" />
            <Badge text="Agile" type="tools" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
