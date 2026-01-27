import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function NotFound() {
  return (
    <motion.section
  className="min-h-screen flex flex-col justify-center items-center text-center px-4"
  initial={{ scale: 0.9, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.4 }}
>
      <h1 className="text-7xl font-bold text-blue-600">404</h1>

      <h2 className="text-2xl font-semibold mt-4">
        Page introuvable
      </h2>

      <p className="text-gray-600 mt-2 max-w-md">
        Oups 😅 la page que vous cherchez n’existe pas ou a été déplacée.
      </p>

      <Link
        to="/"
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Retour à l’accueil
      </Link>
    </motion.section>
  );
}

export default NotFound;
