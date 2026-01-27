import Badge from "./Badge";

function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-100 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Compétences</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold mb-3">Backend</h3>
            <div className="flex flex-wrap gap-2">
              
              <Badge text="Python" type="backend" />
              <Badge text="Django" type="backend" />
              <Badge text="Django REST" type="backend" />
              <Badge text="API REST" type="backend" />
              <Badge text="Tests" type="backend" />

            </div>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold mb-3">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              <Badge text="React" type="frontend" />
              <Badge text="JavaScript" type="frontend" />
              <Badge text="HTML" type="frontend" />
              <Badge text="CSS" type="frontend" />
              <Badge text="Tailwind" type="frontend" />
            </div>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold mb-3">Base de données</h3>
            <div className="flex flex-wrap gap-2">
              <Badge text="PostgreSQL" type="database" />
              <Badge text="MySQL" type="database" />
              <Badge text="DB2" type="database" />

            </div>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold mb-3">Outils & Environnement</h3>
            <div className="flex flex-wrap gap-2">
              <Badge text="Git" type="tools" />
              <Badge text="Docker" type="tools" />
              <Badge text="Linux" type="tools" />
              <Badge text="Agile / Scrum" type="tools" />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
