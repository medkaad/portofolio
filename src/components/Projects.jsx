import Badge from "./Badge";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Projets
        </h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Projet 1 */}
          <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">
              Application de gestion des tâches
            </h3>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Application full-stack avec Django REST et Vue.js :
              authentification JWT, CRUD utilisateurs et tâches,
              PostgreSQL et Docker.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/medkaad/task-manager"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                GitHub
              </a>
              <span className="text-gray-300">|</span>
              <span className="text-sm text-green-600 font-medium">
                Terminé
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <Badge text="Django" type="backend" />
              <Badge text="VueJS" type="frontend" />
              <Badge text="JWT" type="backend" />
              <Badge text="PostgreSQL" type="database" />
              <Badge text="Docker" type="tools" />
            </div>
          </div>

          {/* Projet 2 */}
          <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">
              API Blog sécurisée – Django REST
            </h3>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Application backend avec Django REST :
              authentification JWT, gestion des utilisateurs,
              PostgreSQL et Docker <span className="italic">(en cours)</span>.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/medkaad/blog-project"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                GitHub
              </a>
              <span className="text-gray-300">|</span>
              <span className="text-sm text-orange-500 font-medium">
                En cours
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <Badge text="Django" type="backend" />
              <Badge text="JWT" type="backend" />
              <Badge text="PostgreSQL" type="database" />
              <Badge text="Docker" type="tools" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
