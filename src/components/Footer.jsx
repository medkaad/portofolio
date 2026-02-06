function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="font-semibold text-white">
          Mohammed Kardal
        </p>

        <p className="text-sm mt-2">
          Développeur Web Full-Stack · Django · Vue.js · React
        </p>

        <div className="mt-4 flex justify-center gap-6">
          <a
            href="mailto:kardalm132@gmail.com"
            className="hover:text-white"
          >
            Email
          </a>
          <a
            href="https://github.com/medkaad"
            target="_blank"
            className="hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-kardal-7748021a9/"
            target="_blank"
            className="hover:text-white"
          >
            LinkedIn
          </a>
        </div>

        <p className="text-xs text-gray-500 mt-6">
          © {new Date().getFullYear()} · Tous droits réservés
        </p>
      </div>
    </footer>
  );
}

export default Footer;
