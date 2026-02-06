import { motion } from "framer-motion";
import Badge from "./Badge";

function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Compétences
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Backend */}
          <motion.div
            className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            whileHover={{ y: -4 }}
          >
            <h3 className="font-semibold mb-4 text-lg">Backend</h3>
            <div className="flex flex-wrap gap-2">
              <Badge text="Python" type="backend" />
              <Badge text="Django" type="backend" />
              <Badge text="Django REST" type="backend" />
              <Badge text="API REST" type="backend" />
              <Badge text="Tests" type="backend" />
            </div>
          </motion.div>

          {/* Frontend */}
          <motion.div
            className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            whileHover={{ y: -4 }}
          >
            <h3 className="font-semibold mb-4 text-lg">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              <Badge text="Vue.js" type="frontend" />
              <Badge text="React" type="frontend" />
              <Badge text="JavaScript" type="frontend" />
              <Badge text="HTML" type="frontend" />
              <Badge text="CSS" type="frontend" />
              <Badge text="Tailwind" type="frontend" />
            </div>
          </motion.div>

          {/* Database */}
          <motion.div
            className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            whileHover={{ y: -4 }}
          >
            <h3 className="font-semibold mb-4 text-lg">Bases de données</h3>
            <div className="flex flex-wrap gap-2">
              <Badge text="PostgreSQL" type="database" />
              <Badge text="MySQL" type="database" />
              <Badge text="DB2" type="database" />
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            whileHover={{ y: -4 }}
          >
            <h3 className="font-semibold mb-4 text-lg">
              Outils & Environnement
            </h3>
            <div className="flex flex-wrap gap-2">
              <Badge text="Git" type="tools" />
              <Badge text="Docker" type="tools" />
              <Badge text="Linux" type="tools" />
              <Badge text="Agile / Scrum" type="tools" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
