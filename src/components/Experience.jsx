import Badge from "./Badge";

function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-100 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Expériences</h2>

        {/* Expérience Django immersion */}
        <div className="bg-white p-6 rounded shadow mb-6">
          <h3 className="text-xl font-semibold">
            Développeur Web – Projet Django (Immersion)
          </h3>
          <p className="text-sm text-gray-500 mb-3">
            Projet en cours
          </p>

          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Analyse des besoins et rédaction des user stories</li>
            <li>Participation à l’évolution d’une plateforme web existante</li>
            <li>Développement de nouvelles fonctionnalités avec Django</li>
            <li>Correction et amélioration de fonctionnalités existantes</li>
            <li>Écriture de tests unitaires et correction de tests non conformes</li>
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

        </div>

        {/* Expérience IBM i */}
        <div className="bg-white p-6 rounded shadow mb-6">
        <h3 className="text-xl font-semibold">
            Administrateur IBM i
        </h3>

        <p className="text-sm text-gray-500 mb-3">
            Armonie · Paris · 04/2023 – 12/2023
        </p>

        <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Administration et supervision de systèmes IBM i en environnement de production</li>
            <li>Gestion des sauvegardes et de la continuité de service</li>
            <li>Analyse et résolution d’incidents techniques</li>
            <li>Travail sur des environnements critiques avec contraintes de fiabilité</li>
            <li>Collaboration avec des équipes techniques et métiers</li>
        </ul>

        <div className="flex flex-wrap gap-2 mt-4">
            <Badge text="IBM i / AS400" type="tools" />
            <Badge text="DB2" type="database" />
            <Badge text="CL" type="backend" />
        </div>
        </div>


        {/* Norsys */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold">
            Développeur Fullstack Symfony & VueJS
          </h3>
          <p className="text-sm text-gray-500 mb-3">
            Norsys Afrique · 01/2022 – 08/2022
          </p>

          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Analyse du besoin et conception de solutions web</li>
            <li>Développement d’une application de gestion (CRUD, authentification)</li>
            <li>Création de bases de données et intégration frontend</li>
            <li>Dockerisation de l’environnement de travail</li>
            <li>Correction de bugs et amélioration continue</li>
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

        </div>
      </div>
    </section>
  );
}

export default Experience;
