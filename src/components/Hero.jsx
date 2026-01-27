function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-100 px-4">
      <h1 className="text-5xl font-bold">Mohammed Kardal</h1>

      <h2 className="text-2xl mt-4 text-blue-600">
        Développeur Web Fullstack
      </h2>

      <p className="mt-4 text-gray-600 max-w-xl">
        Master 2 en Informatique · Django · React · API REST · Docker
      </p>

      <p className="mt-2 text-gray-500">
        Disponible immédiatement
      </p>

      <div className="mt-6 flex gap-4">
        <a
          href="/cv.pdf"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Télécharger CV
        </a>
        <a
          href="#projects"
          className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50"
        >
          Voir mes projets
        </a>
      </div>
    </section>
  );
}

export default Hero;
