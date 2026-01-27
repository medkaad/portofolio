import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md px-8 py-4 flex justify-between z-50">
      <h1 className="font-bold text-xl">MK</h1>

      <div className="space-x-6">
        <Link to="/" className="hover:text-blue-600">Accueil</Link>
        <Link to="/experience" className="hover:text-blue-600">Expérience</Link>
        <Link to="/projects" className="hover:text-blue-600">Projets</Link>
        <Link to="/contact" className="hover:text-blue-600">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
