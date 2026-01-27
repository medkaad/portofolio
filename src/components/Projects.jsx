import Badge from "./Badge";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Projets</h2>

      <motion.div
  className="border rounded p-6 shadow hover:shadow-lg transition"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
  viewport={{ once: true }}
>
  {<div className="grid md:grid-cols-2 gap-8">
        <div className="border rounded p-6 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">
            Application de gestion des tâches
          </h3>
          <p className="text-gray-600 mb-4">
            Application fullstack avec Django REST et React :
            authentification JWT, CRUD utilisateurs et tâches,
            PostgreSQL et Docker.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/ton-github/projet1"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
            <span className="text-gray-400">|</span>
            <span className="text-sm text-gray-500">En cours</span>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            <Badge text="Django" type="backend" />
            <Badge text="React" type="frontend" />
            <Badge text="JWT" type="backend" />
            <Badge text="PostgreSQL" type="database" />
            <Badge text="Docker" type="tools" />
          </div>

        </div>

        <div className="border rounded p-6 shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">
            Projet Django (API REST)
          </h3>
          <p className="text-gray-600 mb-4">
            Backend Django avec API REST, gestion des utilisateurs,
            permissions et endpoints sécurisés.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/ton-github/projet2"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
            <span className="text-gray-400">|</span>
            <span className="text-sm text-gray-500">En cours</span>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            <Badge text="Django" type="backend" />
            <Badge text="React" type="frontend" />
            <Badge text="JWT" type="backend" />
            <Badge text="PostgreSQL" type="database" />
            <Badge text="Docker" type="tools" />
          </div>

        </div>
      </div>}
</motion.div>


      
    </section>
  );
}

export default Projects;
